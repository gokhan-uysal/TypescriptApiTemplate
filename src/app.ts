import express from 'express';
import { Request, Response } from 'express';
import { rules, requestLogger } from './config/middleware';
import mongoose from 'mongoose';
import { config } from './config/config';
import { Logger } from './library/logger';
import { RedisHelper } from './helper/redis-helper';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(rules);

const redisHelper = new RedisHelper();

redisHelper.connectRedis(async () => {
    connectMongo(() => {
        startServer();
    });
});

app.get('/', (req: Request, res: Response, next) => {
    return res.sendStatus(200);
});

app.use((req: Request, res: Response) => {
    const error = new Error('Endpoint not found');
    Logger.error(error);
    return res.status(404).json({ message: error.message });
});

async function connectMongo(cb: Function) {
    await mongoose
        .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
        .then(() => {
            Logger.info('Mongo connected');
            return cb();
        })
        .catch((err: Error) => {
            Logger.error(err);
            return;
        });
}

function startServer() {
    app.listen(config.server.port, () => {
        Logger.info(`Server is listenning on port ${config.server.port}`);
    });
}
