const { Worker } = require('bullmq')
const connection = { host: process.env.REDIS_HOST || '127.0.0.1', port: process.env.REDIS_PORT || 6379 }

const worker = new Worker('jobs', async job => {
  console.log('Processing job', job.name, job.data)
  if(job.name === 'mpesa-poll') {
    // poll status logic
  }
}, { connection })

worker.on('completed', job => console.log('Job completed', job.id))
worker.on('failed', (job, err) => console.error('Job failed', err))
