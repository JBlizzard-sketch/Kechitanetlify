export function pickModelForTask(task){
  // tasks: 'scoring', 'summarize', 'chat'
  if(task==='scoring') return process.env.OPENAI_MODEL || 'gpt-4o-mini'
  if(task==='summarize') return process.env.CHEAP_OPENAI_MODEL || 'gpt-4o-mini'
  return process.env.OPENAI_MODEL || 'gpt-4o-mini'
}
