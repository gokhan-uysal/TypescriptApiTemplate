import { Router } from 'express';
import { UserController } from '../controllers/UserController';
// import { authenticator } from '../middleware/Middleware';
import { userService } from '../config/ServiceConfig';

const userController = new UserController(userService);

export const user: Router = Router();
