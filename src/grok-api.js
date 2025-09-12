const { OpenAI } = require('openai');

class GrokAPI {
  constructor(apiKey) {
    this.client = new OpenAI({
      apiKey: apiKey,
      baseURL: 'https://api.x.ai/v1'
    });
  }

  async query(model, prompt, options = {}) {
    try {
      const systemPrompt = options.systemPrompt || 'You are a helpful assistant.';
      const response = await this.client.chat.completions.create({
        model: model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt }
        ],
        stream: options.stream || false,
        max_tokens: options.max_tokens || 1000
      });

      if (options.stream) {
        let fullResponse = '';
        for await (const chunk of response) {
          const content = chunk.choices[0]?.delta?.content || '';
          process.stdout.write(content);
          fullResponse += content;
        }
        return fullResponse;
      } else {
        return response.choices[0].message.content;
      }
    } catch (error) {
      console.error('❌ GROK API ERROR:', error.message);
      return `Quantum disruption! Error: ${error.message}`;
    }
  }
}

module.exports = { GrokAPI };
