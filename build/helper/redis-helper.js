"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisHelper = void 0;
const redis_1 = require("redis");
const logger_1 = require("../library/logger");
class RedisHelper {
    redisClient;
    constructor() {
        this.redisClient = (0, redis_1.createClient)();
        this.redisClient.on('connect', async () => {
            logger_1.Logger.info('Redis connected');
        });
        this.redisClient.on('error', async (err) => {
            logger_1.Logger.error(err);
        });
    }
    async setChache(key, value) {
        await this.redisClient.SET(key, value);
    }
    async getCache(key) {
        return await this.redisClient.GET(key);
    }
    async deleteCache(key) {
        await this.redisClient.DEL(key);
    }
    async checkHealth() {
        let health = await this.redisClient.ping();
        return health;
    }
    async connectRedis(cb) {
        await this.redisClient
            .connect()
            .then(() => {
            return cb();
        })
            .catch((err) => {
            logger_1.Logger.error(err);
            return;
        });
    }
}
exports.RedisHelper = RedisHelper;
//# sourceMappingURL=redis-helper.js.map