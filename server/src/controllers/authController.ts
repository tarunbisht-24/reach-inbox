import { Request, Response } from 'express';
import { getGmailAuthUrl, setGmailCredentials } from '../services/gmailService';
import { getOutlookAuthUrl, setOutlookCredentials } from '../services/outlookService';

export const googleAuth = (req: Request, res: Response) => {
  res.redirect(getGmailAuthUrl());
};

export const googleCallback = async (req: Request, res: Response) => {
  const code = req.query.code as string;
  const tokens = await setGmailCredentials(code);
  res.json(tokens);
};

export const outlookAuth = (req: Request, res: Response) => {
  res.redirect(getOutlookAuthUrl());
};

export const outlookCallback = async (req: Request, res: Response) => {
  const code = req.query.code as string;
  const tokens = await setOutlookCredentials(code);
  res.json(tokens);
};
