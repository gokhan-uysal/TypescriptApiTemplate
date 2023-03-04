import dotenv from 'dotenv';
dotenv.config();

//Mongo config
const MONGO_USER: string = process.env.MONGO_USER || '';
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || '';
const MONGO_URL: string = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@r2d2.oioszvx.mongodb.net/`;

//Redis config
const REIDS_PORT: string = process.env.REDIS_PORT || '6379';
const REDIS_URL: string = `redis://localhost:${REIDS_PORT}`;

//Server config
const SERVER_PORT: string = process.env.SERVER_PORT || '3000';

export const config = {
    mongo: {
        url: MONGO_URL
    },
    redis: {
        url: REDIS_URL
    },
    server: {
        port: SERVER_PORT
    }
};
