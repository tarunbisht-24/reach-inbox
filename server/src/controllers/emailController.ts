import { Request, Response } from 'express';
import { fetchGmailEmails } from '../services/gmailService';
import { fetchOutlookEmails } from '../services/outlookService';
import { analyzeEmail, generateReply } from '../services/openAIService';

export const getGmailEmails = async (req: Request, res: Response) => {
  const emails = await fetchGmailEmails();
  res.json(emails);
};

export const getOutlookEmails = async (req: Request, res: Response) => {
  const { accessToken } = req.body;
  const emails = await fetchOutlookEmails(accessToken);
  res.json(emails);
};

export const categorizeEmail = async (req: Request, res: Response) => {
  const { content } = req.body;
  const category = await analyzeEmail(content);
  res.json({ category });
};

export const generateEmailReply = async (req: Request, res: Response) => {
  const { content } = req.body;
  const reply = await generateReply(content);
  res.json({ reply });
};
