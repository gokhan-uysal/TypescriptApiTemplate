import { UserService } from '../services/UserService';

export class UserController {
    private _userService: UserService;

    constructor(userService: UserService) {
        this._userService = userService;
    }
}
