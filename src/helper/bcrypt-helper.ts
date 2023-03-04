import bcrypt from 'bcrypt';
export class BcryptHelper {
    private salt: number;
    public constructor(salt: number) {
        this.salt = salt;
    }

    async hashPassword(password: string): Promise<string> {
        let hashedPassword: string = await bcrypt.hash(password, this.salt);
        return hashedPassword;
    }

    async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }
}
