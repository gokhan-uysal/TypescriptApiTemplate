"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = exports.rules = exports.errorHandler = exports.authenticator = void 0;
const logger_1 = require("../library/logger");
let authenticator = (req, res, next) => { };
exports.authenticator = authenticator;
let errorHandler = (error, req, res, next) => {
    logger_1.Logger.error(error.message);
    return res.status(404).json({ message: error.message });
};
exports.errorHandler = errorHandler;
let rules = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
};
exports.rules = rules;
let requestLogger = (req, res, next) => {
    res.on('finish', () => {
        if (res.statusCode >= 200 && res.statusCode <= 302) {
            logger_1.Logger.info(`[${res.statusCode}] [${req.method}] [${req.url}] [${req.socket.remoteAddress}]`);
        }
        else {
            logger_1.Logger.error(`[${res.statusCode}] [${req.method}] [${req.url}] [${req.socket.remoteAddress}]`);
        }
    });
    next();
};
exports.requestLogger = requestLogger;
//# sourceMappingURL=middleware.js.map