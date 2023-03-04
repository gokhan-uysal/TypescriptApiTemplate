"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./config/middleware");
const config_1 = require("./config/config");
const logger_1 = require("./library/logger");
const redis_helper_1 = require("./helper/redis-helper");
const mongo_helper_1 = require("./helper/mongo-helper");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(middleware_1.requestLogger);
app.use(middleware_1.rules);
const redisHelper = new redis_helper_1.RedisHelper();
const mongoHelper = new mongo_helper_1.MongoHelper(config_1.config.mongo.url);
redisHelper.connectRedis(async () => {
    mongoHelper.connectMongo(() => {
        startServer();
    });
});
app.get('/', (req, res, next) => {
    return res.sendStatus(200);
});
app.use((req, res) => {
    const error = new Error('Endpoint not found');
    logger_1.Logger.error(error);
    return res.status(404).json({ message: error.message });
});
function startServer() {
    app.listen(config_1.config.server.port, () => {
        logger_1.Logger.info(`Server is listenning on port ${config_1.config.server.port}`);
    });
}
//# sourceMappingURL=app.js.map