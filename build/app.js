"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const redis_1 = require("redis");
const config_1 = require("./config/config");
const app = (0, express_1.default)();
const redisClient = (0, redis_1.createClient)();
app.use(express_1.default.json());
redisClient
    .connect()
    .then(() => {
    console.log('Redis connected');
})
    .catch((err) => {
    console.log(err);
    return;
});
mongoose_1.default
    .connect(config_1.config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
    console.log('Mongodb connected');
})
    .catch((err) => {
    console.log(err);
    return;
});
app.listen(config_1.config.server.port, () => {
    console.log(`Server is listenning on port ${config_1.config.server.port}`);
});
//# sourceMappingURL=app.js.map