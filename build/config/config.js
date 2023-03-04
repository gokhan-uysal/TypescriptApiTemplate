"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//Mongo config
const MONGO_USER = process.env.MONGO_USER || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@r2d2.oioszvx.mongodb.net/`;
//Redis config
const REIDS_PORT = process.env.REDIS_PORT || '6379';
const REDIS_URL = `redis://localhost:${REIDS_PORT}`;
//Server config
const SERVER_PORT = process.env.SERVER_PORT || '3000';
exports.config = {
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
