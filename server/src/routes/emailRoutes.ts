import { Router } from 'express';
import { getGmailEmails, getOutlookEmails, categorizeEmail, generateEmailReply } from '../controllers/emailController';

const router = Router();

router.get('/gmail', getGmailEmails);
router.post('/outlook', getOutlookEmails);
router.post('/categorize', categorizeEmail);
router.post('/reply', generateEmailReply);

export default router;
