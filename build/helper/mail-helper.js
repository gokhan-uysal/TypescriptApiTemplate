"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailHelper = void 0;
const nodemailer_1 = require("nodemailer");
const logger_1 = require("../library/logger");
class MailHelper {
    sender;
    transporter;
    constructor(sender, gmailAuth) {
        this.transporter = this.createTransporter(sender, gmailAuth);
        this.sender = sender;
    }
    createTransporter(gmailUser, gmailAuth) {
        const transporter = (0, nodemailer_1.createTransport)({
            service: 'gmail',
            auth: {
                user: gmailUser,
                pass: gmailAuth
            }
        });
        return transporter;
    }
    createEmail = (sendTo, subjetct, text = '', html = '') => {
        const email = {
            from: this.sender,
            to: sendTo,
            subject: subjetct,
            text: text,
            html: html
        };
        return email;
    };
    sendMail(email) {
        this.transporter
            .sendMail(email)
            .then(() => {
            logger_1.Logger.info(`Email sent to ${email.to}`);
        })
            .catch((err) => {
            logger_1.Logger.error(err.message);
        });
    }
}
exports.MailHelper = MailHelper;
//# sourceMappingURL=mail-helper.js.map