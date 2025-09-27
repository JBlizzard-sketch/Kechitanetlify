import OpenAI from 'openai'
import { config } from '@/lib/config'
const client = new OpenAI({ apiKey: config.openaiKey || process.env.OPENAI_API_KEY })

export async function callOpenAIFunction({ prompt, functions }) {
  // Use Chat Completions with function calling via the OpenAI SDK
  const res = await client.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
    functions: functions,
    function_call: 'auto',
    max_tokens: 800
  })
  return res
}
