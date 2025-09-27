#!/usr/bin/env node
// Example: batch multiple prompts into one Copilot call
const fetch = require('node-fetch')
async function batchPrompts(prompts){
  const combined = prompts.join('\n---\n')
  const res = await fetch(process.env.BASE_URL + '/api/copilot/query', { method:'POST', headers:{'Content-Type':'application/json', Authorization:'Bearer '+process.env.DEMO_TOKEN}, body: JSON.stringify({ prompt: combined }) })
  return res.json()
}
module.exports = { batchPrompts }
