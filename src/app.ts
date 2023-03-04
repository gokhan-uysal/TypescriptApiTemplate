import express from 'express';
import mongoose from 'mongoose';
import redis from 'redis';
import { config } from './config/config';

const app = express();
app.use(express.json());

app.listen(config.server.port, () => {
    console.log(`Server is listenning on port ${config.server.port}`);
});
