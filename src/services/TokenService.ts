import { verify, sign, JwtPayload } from 'jsonwebtoken';

export class TokenService {
    private accessToken: string;

    public constructor(accesToken: string) {
        this.accessToken = accesToken;
    }

    verifyToken(token: string): JwtPayload {
        let payloud: JwtPayload | null = verify(token, this.accessToken, { complete: true }).payload as JwtPayload;
        if (!payloud) {
            throw new Error('Payload not found');
        }
        return payloud;
    }

    registerToken(payload: Object, expiresIn: string): string {
        return sign(payload, this.accessToken, { expiresIn: expiresIn, encoding: 'utf-8' });
    }
}
