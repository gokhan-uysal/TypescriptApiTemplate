import jwt from 'jsonwebtoken';

export class JwtHelper {
    public constructor() {}

    async verifyToken(token: string, accesToken: string) {
        return jwt.verify(token, accesToken, (err, token): any | undefined => {
            if (err) {
                throw err;
            }
            return token;
        });
    }

    registerToken(payload: Object, accesToken: string): string {
        return jwt.sign(payload, accesToken);
    }
}
