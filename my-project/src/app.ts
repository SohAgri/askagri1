import 'dotenv/config';
import express, { Request, Response } from 'express';
import { AIService } from './ai/aiService';
import { ChatRequest } from './ai/types';

const app = express();
const PORT = Number(process.env.PORT || 3000);
const aiService = new AIService();

const requestHits = new Map<string, { count: number; resetAt: number }>();
const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 25;

app.use(express.json({ limit: '1mb' }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = requestHits.get(ip);
  if (!entry || now > entry.resetAt) {
    requestHits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) {
    return false;
  }
  entry.count += 1;
  requestHits.set(ip, entry);
  return true;
}

function parseRequest(body: unknown): ChatRequest {
  if (!body || typeof body !== 'object') {
    throw new Error('invalid payload');
  }
  const data = body as Partial<ChatRequest>;
  if (!data.message || typeof data.message !== 'string') {
    throw new Error('message is required');
  }
  return {
    message: data.message.slice(0, 1800),
    language: typeof data.language === 'string' ? data.language.slice(0, 20) : 'en',
    mode: data.mode === 'student' ? 'student' : 'farmer',
    context: data.context && typeof data.context === 'object' ? data.context : {},
    history: Array.isArray(data.history) ? data.history.slice(-8) : [],
  };
}

app.get('/health', (_req: Request, res: Response) => {
  res.json({ ok: true, service: 'askkrishi-ai-api' });
});

app.post('/api/ai/chat', async (req: Request, res: Response) => {
  if (!checkRateLimit(req.ip || 'unknown')) {
    return res.status(429).json({ error: 'Too many requests. Please retry shortly.' });
  }

  try {
    const payload = parseRequest(req.body);
    const result = await aiService.chat(payload);
    return res.json({
      answer: result.text,
      metadata: {
        source: result.source,
        followUpSuggested: result.followUpSuggested,
      },
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'unknown error';
    if (msg === 'message is required' || msg === 'invalid payload') {
      return res.status(400).json({ error: 'Invalid request. Please enter your question.' });
    }
    return res.status(503).json({ error: 'AI service unavailable. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`AskKrishi backend running on http://localhost:${PORT}`);
});