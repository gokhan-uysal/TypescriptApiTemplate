export class DbConfig {
    public host: string;
    public user: string;
    public password: string;
    public database: string;
    public connectionLimit: number;

    public constructor(host: string, user: string, password: string, database: string, connectionLimit?: number) {
        this.host = host;
        this.user = user;
        this.password = password;
        this.database = database;
        this.connectionLimit = connectionLimit || 10;
    }
}
