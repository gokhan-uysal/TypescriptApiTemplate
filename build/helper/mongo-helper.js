"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoHelper = void 0;
const logger_1 = require("../library/logger");
const mongoose_1 = __importDefault(require("mongoose"));
class MongoHelper {
    url;
    constructor(url) {
        this.url = url;
    }
    async connectMongo(cb) {
        await mongoose_1.default
            .connect(this.url, { retryWrites: true, w: 'majority' })
            .then(() => {
            logger_1.Logger.info('Mongo connected');
            return cb();
        })
            .catch((err) => {
            logger_1.Logger.error(err);
            return;
        });
    }
}
exports.MongoHelper = MongoHelper;
//# sourceMappingURL=mongo-helper.js.map