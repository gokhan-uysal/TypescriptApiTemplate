"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisHelper = void 0;
class RedisHelper {
    redisClient;
    constructor(redisClient) {
        this.redisClient = redisClient;
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
}
exports.RedisHelper = RedisHelper;
//# sourceMappingURL=redis-helper.js.map