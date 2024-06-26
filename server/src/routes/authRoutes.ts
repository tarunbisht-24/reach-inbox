import { Router } from 'express';
import { googleAuth, googleCallback, outlookAuth, outlookCallback } from '../controllers/authController';

const router = Router();

router.get('/google', googleAuth);
router.get('/google/callback', googleCallback);

router.get('/outlook', outlookAuth);
router.get('/outlook/callback', outlookCallback);

export default router;
