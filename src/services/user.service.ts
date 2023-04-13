import { Mail } from '../types/types';
import { UserRepository } from '../repositories/user.repository';
import { PasswordService } from './password.service';
import { MailService } from './mail.service';
import { TokenService } from './token.service';
import { ErrorMessage } from '../utils/error';
import { MapHelper } from '../utils/map.helper';

export class UserService {
    private _userRepository: UserRepository;
    private _passwordService: PasswordService;
    private _tokenService: TokenService;
    private _mailService: MailService;

    public constructor(userRepository: UserRepository, passwordService: PasswordService, mailService: MailService, tokenService: TokenService) {
        this._userRepository = userRepository;
        this._passwordService = passwordService;
        this._tokenService = tokenService;
        this._mailService = mailService;
    }
}
