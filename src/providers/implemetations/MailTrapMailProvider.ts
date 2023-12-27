import nodemailer from 'nodemailer';
import { IMailProvider, IMessage } from "../IMailProvider";
import Mail from 'nodemailer/lib/mailer';

export class MailTrapMailProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: "8f13415aae40ff",
        pass: "e2ce48481c2b1f"
      }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    console.log({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    });
    
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}