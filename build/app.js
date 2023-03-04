"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./config/middleware");
const mongoose_1 = __importDefault(require("mongoose"));
const redis_1 = require("redis");
const config_1 = require("./config/config");
const logger_1 = require("./library/logger");
const app = (0, express_1.default)();
const redisClient = (0, redis_1.createClient)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(middleware_1.requestLogger);
app.use(middleware_1.rules);
connectRedis(async () => {
    await connectMongo();
});
app.get('/', (req, res, next) => {
    return res.sendStatus(200);
});
app.use((req, res) => {
    const error = new Error('Endpoint not found');
    logger_1.Logger.error(error.message);
    return res.status(404).json({ message: error.message });
});
async function connectRedis(cb) {
    await redisClient
        .connect()
        .then(() => {
        logger_1.Logger.info('Redis connected');
        return cb();
    })
        .catch((err) => {
        logger_1.Logger.error(`Redis ${err.message}`);
        return;
    });
}
async function connectMongo() {
    await mongoose_1.default
        .connect(config_1.config.mongo.url, { retryWrites: true, w: 'majority' })
        .then(() => {
        logger_1.Logger.info('Mongo connected');
        startServer();
    })
        .catch((err) => {
        logger_1.Logger.error(`Mongo ${err.message}`);
        return;
    });
}
function startServer() {
    app.listen(config_1.config.server.port, () => {
        logger_1.Logger.info(`Server is listenning on port ${config_1.config.server.port}`);
    });
}
//# sourceMappingURL=app.js.map