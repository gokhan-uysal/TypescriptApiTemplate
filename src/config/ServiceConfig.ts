import { config } from '../config/Config';
import { UserRepository } from '../repositories/user.repository';
import { MailService } from '../services/mail.service';
import { PasswordService } from '../services/password.service';
import { TokenService } from '../services/token.service';
import { UserService } from '../services/user.service';

//Repositories
export const userRepository = new UserRepository();

//Services
export const mailService = new MailService(config.nodemailer.user, config.nodemailer.key);
export const tokenService = new TokenService(config.jwt.accessToken);
export const passwordService = new PasswordService(8);
export const userService = new UserService(userRepository, passwordService, mailService, tokenService);
