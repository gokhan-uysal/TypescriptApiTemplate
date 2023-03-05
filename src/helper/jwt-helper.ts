import jwt, { JwtPayload } from 'jsonwebtoken';

export class JwtHelper {
    public constructor() {}

    verifyToken(token: string, accesToken: string): void {
        return jwt.verify(token, accesToken, (err, token): JwtPayload | string => {
            if (err) {
                throw err;
            }
            if (token === undefined) {
                throw new Error('Token is undefined');
            }
            return token;
        });
    }

    registerToken(payload: Object, accesToken: string): string {
        return jwt.sign(payload, accesToken);
    }
}
