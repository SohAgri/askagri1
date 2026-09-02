export type ChatRole = 'system' | 'user' | 'assistant';

export interface ChatMessage {
  role: ChatRole;
  content: string;
}

export interface FarmerContext {
  state?: string;
  district?: string;
  crop?: string;
  cropVariety?: string;
  cropStage?: string;
  daysAfterSowing?: number;
  irrigationType?: string;
  soilType?: string;
}

export interface ChatRequest {
  message: string;
  language?: string;
  mode?: 'farmer' | 'student';
  context?: FarmerContext;
  history?: ChatMessage[];
}

export interface ChatResponse {
  text: string;
  source: 'provider' | 'fallback';
  followUpSuggested: boolean;
}

export interface AIProvider {
  chat(messages: ChatMessage[], timeoutMs?: number): Promise<string>;
}
