"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptHelper = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class BcryptHelper {
    salt;
    constructor(salt) {
        this.salt = salt;
    }
    async hashPassword(password) {
        let hashedPassword = await bcrypt_1.default.hash(password, this.salt);
        return hashedPassword;
    }
    async comparePassword(password, hashedPassword) {
        return await bcrypt_1.default.compare(password, hashedPassword);
    }
}
exports.BcryptHelper = BcryptHelper;
//# sourceMappingURL=bcrypt-helper.js.map