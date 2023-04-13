import { Request, Response, NextFunction } from 'express';
import { Logger } from '../utils/logger';
import { IpLimiter } from '../types/types';
import { HttpError } from '../utils/error';

const onboardIpMap: Map<string, IpLimiter> = new Map<string, IpLimiter>();

export const onboardLimiter = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const ip: string | undefined = req.socket.remoteAddress;
        if (!ip) {
            throw new HttpError('Ip address is missing', 401);
        }

        const refreshTimeMin: number = 10;

        let ipLimit: IpLimiter | undefined = onboardIpMap.get(ip);
        if (!ipLimit) {
            ipLimit = {
                count: 0,
                time: new Date().getTime()
            };
        }

        let currentTime: number = new Date().getTime();
        let windowMs: number = currentTime - ipLimit.time;
        let windowMin: number = Math.floor(windowMs / 60000);

        if (windowMin >= refreshTimeMin) {
            ipLimit.count = 0;
            ipLimit.time = new Date().getTime();
        }

        ipLimit.count += 1;

        if (ipLimit.count > 5 && windowMin < refreshTimeMin) {
            throw new HttpError('Too many requests', 429);
        }

        onboardIpMap.set(ip, ipLimit);
        return next();
    } catch (err) {
        next(err);
    }
};

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
    res.on('finish', () => {
        if (res.statusCode >= 200 && res.statusCode <= 308) {
            Logger.info(`[${res.statusCode}] [${req.method}] [${req.url}] [${req.socket.remoteAddress}]`);
        }
    });
    next();
};

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof HttpError) {
        res.status(err.statusCode).json({ error: err.message });
    } else {
        res.status(500).json({ error: err.message });
    }
    Logger.error(`[${res.statusCode}] [${res.statusMessage}] [${req.method}] [${req.url}] [${req.socket.remoteAddress}]`);
    Logger.log(err);
    return;
};
