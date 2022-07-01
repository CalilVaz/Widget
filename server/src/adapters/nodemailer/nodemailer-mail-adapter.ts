import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "525fe52c31e2b3",
      pass: "ac76ff696be037"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {    
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Calil Vaz <calilvazdev@gmail.com>',
        subject,
        html: body,
    });
  }
}