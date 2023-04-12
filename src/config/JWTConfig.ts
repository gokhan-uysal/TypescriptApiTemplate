export class JWTConfig {
    public accessToken: string;
    public refreshToken: string;

    public constructor(accessToken: string, refreshToken: string) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }
}
