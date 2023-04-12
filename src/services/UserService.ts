import { Mail } from '../types/Types';
import { UserRepository } from '../repositories/UserRepository';
import { PasswordService } from './PasswordService';
import { MailService } from './MailService';
import { TokenService } from './TokenService';
import { ErrorMessage } from '../utils/Error';
import { MapHelper } from '../utils/MapHelper';

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
