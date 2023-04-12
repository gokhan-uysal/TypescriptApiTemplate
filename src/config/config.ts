import dotenv from 'dotenv';
import crypto from 'crypto';
import { DbConfig } from './DbConfig';
import { ServerConfig } from './ServerConfig';
import { JWTConfig } from './JWTConfig';
import { NodemailerConfig } from './NodemailerConfig';

dotenv.config();

//Mysql config
const MYSQL_HOST: string = process.env.MYSQL_HOST || 'localhost';
const MYSQL_USER: string = process.env.MYSQL_USER || 'root';
const MYSQL_PASSWORD: string = getDbPassword();
const MYSQL_DATABASE: string = getDbDatabase();

//JWT config
const JWT_ACCESS_TOKEN: string = getJwtAccessToken();
const JWT_REFRESH_TOKEN: string = getJwtRefreshToken();

//Mail config
const MAIL_USER: string = getMailUser();
const MAIL_KEY: string = getMailKey();

//Server config
const SERVER_HOST: string = process.env.SERVER_HOST || 'localhost';
const SERVER_PORT: number = Number.parseInt(process.env.SERVER_PORT || '8000');

function getJwtAccessToken(): string {
    if (process.env.JWT_ACCESS_TOKEN === undefined) {
        return crypto.randomBytes(64).toString('hex');
    }
    return process.env.JWT_ACCESS_TOKEN;
}

function getJwtRefreshToken(): string {
    if (process.env.JWT_REFRESH_TOKEN === undefined) {
        return crypto.randomBytes(64).toString('hex');
    }
    return process.env.JWT_REFRESH_TOKEN;
}

function getMailUser(): string {
    if (process.env.MAIL_USER === undefined) {
        throw new Error('Mail user not found');
    }
    return process.env.MAIL_USER;
}

function getMailKey(): string {
    if (process.env.MAIL_KEY === undefined) {
        throw new Error('Mail KEY not found');
    }
    return process.env.MAIL_KEY;
}

function getDbPassword(): string {
    if (process.env.MYSQL_PASSWORD === undefined) {
        throw new Error('Db password not found');
    }
    return process.env.MYSQL_PASSWORD;
}

function getDbDatabase(): string {
    if (process.env.MYSQL_DATABASE === undefined) {
        throw new Error('Db database not found');
    }
    return process.env.MYSQL_DATABASE;
}

export const config = {
    mysql: new DbConfig(MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE),
    server: new ServerConfig(SERVER_HOST, SERVER_PORT),
    jwt: new JWTConfig(JWT_ACCESS_TOKEN, JWT_REFRESH_TOKEN),
    nodemailer: new NodemailerConfig(MAIL_USER, MAIL_KEY)
};
