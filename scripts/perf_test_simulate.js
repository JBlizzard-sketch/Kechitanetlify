#!/usr/bin/env node
const fs = require('fs');
const fetch = require('node-fetch');
const NUM = process.env.NUM_REQUESTS ? Number(process.env.NUM_REQUESTS) : 500;
const CACHE_HIT_RATE = process.env.SIM_CACHE_HIT ? Number(process.env.SIM_CACHE_HIT) : 0.3;
const BATCHING_SAVED = process.env.SIM_BATCH_SAVED ? Number(process.env.SIM_BATCH_SAVED) : 0.25; // percent tokens saved
(async ()=>{
  let hits = 0, misses = 0, totalTokens = 0;
  for(let i=0;i<NUM;i++){
    const cached = Math.random() < CACHE_HIT_RATE;
    if(cached){ hits++; totalTokens += 10; } else { misses++; totalTokens += 200; }
  }
  const rawCost = totalTokens * 0.002; // cents per token heuristic
  const batchedCost = rawCost * (1 - BATCHING_SAVED);
  const savings = rawCost - batchedCost;
  const report = {
    requests: NUM, cacheHitRate: (hits/NUM), cacheHits: hits, cacheMisses: misses,
    totalTokens, rawCostCents: Math.round(rawCost), batchedCostCents: Math.round(batchedCost), savingsCents: Math.round(savings)
  };
  fs.writeFileSync('ops/perf_report_phase18.json', JSON.stringify(report, null, 2));
  console.log('Perf test simulated. Report written to ops/perf_report_phase18.json');
})();
