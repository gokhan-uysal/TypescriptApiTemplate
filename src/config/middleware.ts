import { Request, Response, NextFunction } from 'express';
import { Logger } from '../library/logger';

export let errorHandler = (req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Endpoint not found');
    Logger.error(error.message);
    return res.status(404).json({ message: error.message });
};

export let rules = (req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
};

export let requestLogger = (req: Request, res: Response, next: NextFunction) => {
    res.on('finish', () => {
        Logger.info(`[${res.statusCode}] [${req.method}] [${req.url}] [${req.socket.remoteAddress}]`);
    });
    next();
};
