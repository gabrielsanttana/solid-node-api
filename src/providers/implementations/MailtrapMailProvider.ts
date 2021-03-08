import {EmailProvider, Message} from '../EmailProvider';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import dotenv from 'dotenv';

dotenv.config();

export class MailtrapMailProvider implements EmailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.PORT,
      auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS,
      },
    } as any);
  }

  async sendEmail(message: Message): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
