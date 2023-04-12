export class ServerConfig {
    public host: string;
    public port: number;

    public constructor(host: string, port: number) {
        this.host = host;
        this.port = port;
    }
}
