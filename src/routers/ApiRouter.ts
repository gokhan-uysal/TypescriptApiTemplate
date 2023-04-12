import { Router } from 'express';
import { onboardLimiter } from '../middleware/Middleware';

export const api: Router = Router();
api.use(onboardLimiter);
