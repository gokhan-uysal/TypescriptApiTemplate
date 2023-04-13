import express from 'express';
import { config } from './config/Config';
import { requestLogger, errorHandler } from './middleware/middleware';
import { Logger } from './utils/logger';
import { api } from './routers/api.router';
import { user } from './routers/user.router';
import { ConnectionPool } from './connections/pool.connection';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

//Routers
app.use('/api', api);
api.use('/user', user);

app.use(errorHandler);

ConnectionPool.getInstance();
startServer();

app.get('/', (req, res) => {
    return res.sendStatus(200);
});

app.get('/favicon.ico', (req, res) => {
    res.sendStatus(204);
});

app.use((req, res) => {
    const error = new Error('Endpoint not found');
    Logger.error(error);
    return res.status(404).json({ error: error.message });
});

function startServer() {
    app.listen(config.server.port, async () => {
        Logger.info(`Server is listenning on ${config.server.host}:${config.server.port}`);
    });
}
