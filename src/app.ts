import express from 'express';
import mongoose from 'mongoose';
import { RedisClientType, createClient } from 'redis';
import { config } from './config/config';
import { Logger } from './library/logger';

const app = express();
const redisClient: RedisClientType = createClient();
app.use(express.json());

redisClient
    .connect()
    .then(() => {
        Logger.info('Redis connected');
    })
    .catch((err) => {
        console.log(err);
        return;
    });

mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        Logger.info('Mongo connected');
    })
    .catch((err) => {
        console.log(err);
        return;
    });

app.listen(config.server.port, () => {
    Logger.info(`Server is listenning on port ${config.server.port}`);
});
