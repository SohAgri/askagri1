import { AIProvider, ChatMessage } from '../types';

interface OpenAICompatibleConfig {
  apiKey: string;
  endpoint: string;
  model: string;
}

export class OpenAICompatibleProvider implements AIProvider {
  constructor(private readonly config: OpenAICompatibleConfig) {}

  async chat(messages: ChatMessage[], timeoutMs = 20000): Promise<string> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(this.config.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.config.apiKey,
        },
        body: JSON.stringify({
          model: this.config.model,
          messages,
          temperature: 0.2,
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Provider request failed (${response.status})`);
      }

      const data = (await response.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const content = data.choices?.[0]?.message?.content?.trim();
      if (!content) {
        throw new Error('Provider returned empty response');
      }

      return content;
    } finally {
      clearTimeout(timer);
    }
  }
}
