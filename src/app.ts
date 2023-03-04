import express from 'express';
import { Request, Response } from 'express';
import { rules, requestLogger } from './config/middleware';
import mongoose from 'mongoose';
import { RedisClientType, createClient } from 'redis';
import { config } from './config/config';
import { Logger } from './library/logger';

const app = express();
const redisClient: RedisClientType = createClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(rules);

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

app.get('/', (req: Request, res: Response, next) => {
    return res.sendStatus(200);
});

app.use((req: Request, res: Response) => {
    const error = new Error('Endpoint not found');
    Logger.error(error.message);
    return res.status(404).json({ message: error.message });
});
