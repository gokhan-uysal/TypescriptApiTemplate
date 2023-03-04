import { Logger } from '../library/logger';
import mongoose from 'mongoose';

export class MongoHelper {
    private url: string;
    public constructor(url: string) {
        this.url = url;
    }

    async connectMongo(cb: Function) {
        await mongoose
            .connect(this.url, { retryWrites: true, w: 'majority' })
            .then(() => {
                Logger.info('Mongo connected');
                return cb();
            })
            .catch((err: Error) => {
                Logger.error(err);
                return;
            });
    }
}
