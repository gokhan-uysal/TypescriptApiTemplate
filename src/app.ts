import express from 'express';
import mongoose from 'mongoose';
import { RedisClientType, createClient } from 'redis';
import { config } from './config/config';

const app = express();
const redisClient: RedisClientType = createClient();
app.use(express.json());

redisClient
    .connect()
    .then(() => {
        console.log('Redis connected');
    })
    .catch((err) => {
        console.log(err);
        return;
    });

mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log('Mongodb connected');
    })
    .catch((err) => {
        console.log(err);
        return;
    });

app.listen(config.server.port, () => {
    console.log(`Server is listenning on port ${config.server.port}`);
});
