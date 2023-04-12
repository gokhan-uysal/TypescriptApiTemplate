import { config } from '../config/Config';
import { UserRepository } from '../repositories/UserRepository';
import { MailService } from '../services/MailService';
import { PasswordService } from '../services/PasswordService';
import { TokenService } from '../services/TokenService';
import { UserService } from '../services/UserService';

//Repositories
export const userRepository = new UserRepository();

//Services
export const mailService = new MailService(config.nodemailer.user, config.nodemailer.key);
export const tokenService = new TokenService(config.jwt.accessToken);
export const passwordService = new PasswordService(8);
export const userService = new UserService(userRepository, passwordService, mailService, tokenService);
