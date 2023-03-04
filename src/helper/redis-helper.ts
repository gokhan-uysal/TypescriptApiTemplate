import { RedisClientType, createClient } from 'redis';
import { Logger } from '../library/logger';

export class RedisHelper {
    private redisClient: RedisClientType;

    public constructor() {
        this.redisClient = createClient();
        this.redisClient.on('connect', async () => {
            Logger.info('Redis connected');
        });

        this.redisClient.on('error', async (err) => {
            Logger.error(err);
        });
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

    async checkHealth(): Promise<string> {
        let health = await this.redisClient.ping();
        return health;
    }

    async connectRedis(cb: Function) {
        await this.redisClient
            .connect()
            .then(() => {
                return cb();
            })
            .catch((err: Error) => {
                Logger.error(err);
                return;
            });
    }
}
