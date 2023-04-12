export type Mail = {
    from: string;
    to: string;
    subject: string;
    text: string | undefined;
    html: string | undefined;
};

export type UserPayload = {
    _id?: string;
    iat?: Date;
    exp?: Date;
};

export type IpLimiter = {
    count: number;
    time: number;
};
