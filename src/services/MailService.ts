import { Transporter, createTransport } from 'nodemailer';
import { Logger } from '../utils/Logger';
import { Mail } from '../types/Types';

export class MailService {
    private mailUser: string;
    private transporter: Transporter;

    public constructor(mailUser: string, mailAuth: string) {
        this.transporter = this.createTransporter(mailUser, mailAuth);
        this.mailUser = mailUser;
    }

    createTransporter(mailUser: string, mailAuth: string): Transporter {
        const transporter = createTransport({
            service: 'gmail',
            auth: {
                user: mailUser,
                pass: mailAuth
            }
        });
        return transporter;
    }

    createEmail = (to: string, subjetct: string, text = '', html = ''): Mail => {
        const mail: Mail = {
            from: this.mailUser,
            to: to,
            subject: subjetct,
            text: text,
            html: html
        };
        return mail;
    };

    sendMail(mail: Mail) {
        this.transporter
            .sendMail(mail)
            .then(() => {
                Logger.info(`Email sent to ${mail.to}`);
            })
            .catch((err) => {
                Logger.error(err.message);
            });
    }
}
