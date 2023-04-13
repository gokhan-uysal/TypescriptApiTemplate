import { UserService } from '../services/user.service';

export class UserController {
    private _userService: UserService;

    constructor(userService: UserService) {
        this._userService = userService;
    }
}
