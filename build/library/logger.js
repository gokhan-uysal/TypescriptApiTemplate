"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    static info = (args) => {
        console.log(chalk_1.default.blueBright(`[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] [INFO] ${args}`));
    };
    static warning = (args) => {
        console.log(chalk_1.default.yellowBright(`[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] [WARNING] ${args}`));
    };
    static error = (args) => {
        console.log(chalk_1.default.redBright(`[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] [ERROR] ${args}`));
    };
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map