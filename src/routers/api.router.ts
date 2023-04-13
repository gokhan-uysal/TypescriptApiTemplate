import { Router } from 'express';
import { onboardLimiter } from '../middleware/middleware';

export const api: Router = Router();
api.use(onboardLimiter);
