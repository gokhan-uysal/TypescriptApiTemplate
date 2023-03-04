import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGO_USER: string = process.env.MONGO_USER || '';
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || '';
const url: string = `${MONGO_USER} ${MONGO_PASSWORD}`;

mongoose.connect(url).then();
