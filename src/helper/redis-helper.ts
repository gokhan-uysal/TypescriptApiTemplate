import { RedisClientType } from 'redis';

export class RedisHelper {
    private redisClient: RedisClientType;

    public constructor(redisClient: RedisClientType) {
        this.redisClient = redisClient;
    }

    async setChache(key: any, value: any) {
        await this.redisClient.SET(key, value);
    }

    async getCache(key: any): Promise<any> {
        return await this.redisClient.GET(key);
    }

    async deleteCache(key: any) {
        await this.redisClient.DEL(key);
    }
}
