import { RedisClientType, createClient } from 'redis';

export class RedisHelper {
    private redisClient: RedisClientType;

    public constructor(redisClient: RedisClientType) {
        this.redisClient = createClient();
    }

    async setChache(key: any, value: any) {
        await this.redisClient.SET(key, value);
    }

    async getCache(key: any) {
        return await this.redisClient.GET(key);
    }

    async deleteCache(key: any) {
        await this.redisClient.DEL(key);
    }
}
