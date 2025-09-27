// Mock OpenAI SDK-like response for function-calling
module.exports = {
  chat: {
    completions: {
      create: async ({ messages, functions }) => {
        return {
          choices: [
            {
              message: {
                content: JSON.stringify({ recommendation: 'approve', score: 85, reasons: ['low amount', 'good history'] })
              },
              finish_reason: 'function_call'
            }
          ]
        }
      }
    }
  }
}
