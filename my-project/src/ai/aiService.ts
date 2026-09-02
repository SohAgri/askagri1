import { ASK_KRISHI_SYSTEM_PROMPT } from './systemPrompt';
import { AIProvider, ChatMessage, ChatRequest, ChatResponse } from './types';
import { OpenAICompatibleProvider } from './providers/openAICompatibleProvider';

const FALLBACK_REPLY = `I can help with crop, pest, and nutrient guidance.
Please share: crop name, district/state, crop stage, and key symptoms.
For pesticide/fungicide use, always verify product label and local expert advice before spraying.`;

const NEEDS_CONTEXT_PATTERNS = [
  /yellow|curl|spot|blight|blast|pest|disease|fungus|borer/i,
  /fertilizer|urea|dap|npk|spray|dose|medicine/i,
];

function sanitizeText(input: string): string {
  return input.replace(/\s+/g, ' ').trim();
}

function formatContext(req: ChatRequest): string {
  const ctx = req.context || {};
  const rows = [
    ['Language', req.language || 'en'],
    ['Mode', req.mode || 'farmer'],
    ['State', ctx.state || 'unknown'],
    ['District', ctx.district || 'unknown'],
    ['Crop', ctx.crop || 'unknown'],
    ['Crop variety', ctx.cropVariety || 'unknown'],
    ['Crop stage', ctx.cropStage || 'unknown'],
    ['Days after sowing/transplanting', typeof ctx.daysAfterSowing === 'number' ? String(ctx.daysAfterSowing) : 'unknown'],
    ['Irrigation', ctx.irrigationType || 'unknown'],
    ['Soil type', ctx.soilType || 'unknown'],
  ];
  return rows.map(([k, v]) => `- ${k}: ${v}`).join('\n');
}

function shouldSuggestFollowUp(message: string, request: ChatRequest): boolean {
  const likelyNeedsContext = NEEDS_CONTEXT_PATTERNS.some((pattern) => pattern.test(message));
  if (!likelyNeedsContext) return false;
  const ctx = request.context || {};
  return !(ctx.district && ctx.crop && ctx.cropStage);
}

function buildMessages(req: ChatRequest): ChatMessage[] {
  const history = (req.history || [])
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-8)
    .map((m) => ({ role: m.role, content: sanitizeText(m.content).slice(0, 1200) }));

  const userMessage = sanitizeText(req.message).slice(0, 1800);
  return [
    { role: 'system', content: ASK_KRISHI_SYSTEM_PROMPT },
    { role: 'system', content: `Farmer context:\n${formatContext(req)}` },
    ...history,
    { role: 'user', content: userMessage },
  ];
}

export class AIService {
  private readonly provider?: AIProvider;

  constructor() {
    const apiKey = process.env.AI_API_KEY;
    const endpoint = process.env.AI_API_ENDPOINT || 'https://api.openai.com/v1/chat/completions';
    const model = process.env.AI_MODEL || 'gpt-4o-mini';

    if (apiKey) {
      this.provider = new OpenAICompatibleProvider({ apiKey, endpoint, model });
    }
  }

  async chat(req: ChatRequest): Promise<ChatResponse> {
    if (!req.message || !req.message.trim()) {
      throw new Error('message is required');
    }

    const followUpSuggested = shouldSuggestFollowUp(req.message, req);
    if (!this.provider) {
      return {
        text: followUpSuggested
          ? `${FALLBACK_REPLY}\n\nBefore I suggest specifics, please share your district and crop stage.`
          : FALLBACK_REPLY,
        source: 'fallback',
        followUpSuggested,
      };
    }

    const text = await this.provider.chat(buildMessages(req));
    return { text, source: 'provider', followUpSuggested };
  }
}
