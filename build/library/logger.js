"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    static info = (args) => {
        console.log(chalk_1.default.blueBright(`[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] [INFO]`), typeof args === 'string' ? chalk_1.default.blue(args) : args);
    };
    static warning = (args) => {
        console.log(chalk_1.default.yellowBright(`[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] [WARNING]`), typeof args === 'string' ? chalk_1.default.yellow(args) : args);
    };
    static error = (args) => {
        console.log(chalk_1.default.redBright(`[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] [ERROR]`), typeof args === 'string' ? chalk_1.default.red(args) : args);
    };
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map