import nodemailer from "nodemailer";
import {MailAdaptor, SendMailData} from "../mail-adaptor";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6c249d888af3f1",
    pass: "bf0f47dfec5c4a",
  },
});

export class NodemailerMailAdaptor implements MailAdaptor {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <feedback@feedback.com>",
      to: "André Souza <rammpk@gmail.com>",
      subject,
      html: body,
    });
  }
}
