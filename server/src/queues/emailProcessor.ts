import { Worker } from 'bullmq';
import { fetchGmailEmails } from '../services/gmailService';
import { fetchOutlookEmails } from '../services/outlookService';
import { analyzeEmail, generateReply } from '../services/openAIService';

const emailWorker = new Worker('emailQueue', async job => {
  const { provider, accessToken } = job.data;

  let emails;
  if (provider === 'gmail') {
    emails = await fetchGmailEmails();
  } else if (provider === 'outlook') {
    emails = await fetchOutlookEmails(accessToken);
  }

  for (const email of emails) {
    const category = await analyzeEmail(email.snippet);
    const reply = await generateReply(email.snippet);
    console.log(`Email ID: ${email.id}`);
    console.log(`Category: ${category}`);
    console.log(`Reply: ${reply}`);
  }
}, {
  connection: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
  },
});

export default emailWorker;
