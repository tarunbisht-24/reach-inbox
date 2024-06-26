import { Queue } from 'bullmq';

const emailQueue = new Queue('emailQueue', {
  connection: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
  },
});

export default emailQueue;
