import { MysqlError, Pool, PoolConnection, createPool } from 'mysql';
import { config } from '../config/Config';
import { Logger } from '../utils/Logger';

export class ConnectionPool {
    private static shared: ConnectionPool;
    public pool: Pool;

    private constructor() {
        this.pool = createPool(config.mysql);
        Logger.info('Mysql connected');
    }

    public static getInstance(): ConnectionPool {
        if (ConnectionPool.shared == null) {
            ConnectionPool.shared = new ConnectionPool();
        }
        return ConnectionPool.shared;
    }

    public getCon(): Promise<PoolConnection> {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err: MysqlError, con: PoolConnection) => {
                if (err) {
                    reject(err);
                }
                resolve(con);
            });
        });
    }
}
