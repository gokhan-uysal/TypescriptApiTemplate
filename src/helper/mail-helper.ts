import { Transporter, createTransport } from 'nodemailer';
import { Logger } from '../library/logger';

type Email = {
    from: string;
    to: string;
    subject: string;
    text: string | undefined;
    html: string | undefined;
};

export class MailHelper {
    private sender: string;
    private transporter: Transporter;

    public constructor(sender: string, gmailAuth: string) {
        this.transporter = this.createTransporter(sender, gmailAuth);
        this.sender = sender;
    }

    createTransporter(gmailUser: string, gmailAuth: string): Transporter {
        const transporter = createTransport({
            service: 'gmail',
            auth: {
                user: gmailUser,
                pass: gmailAuth
            }
        });
        return transporter;
    }

    createEmail = (sendTo: string, subjetct: string, text = '', html = ''): Email => {
        const email: Email = {
            from: this.sender,
            to: sendTo,
            subject: subjetct,
            text: text,
            html: html
        };
        return email;
    };

    sendMail(email: Email) {
        this.transporter
            .sendMail(email)
            .then(() => {
                Logger.info(`Email sent to ${email.to}`);
            })
            .catch((err) => {
                Logger.error(err.message);
            });
    }
}
