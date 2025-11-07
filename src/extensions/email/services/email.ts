import nodemailer from "nodemailer";

export default () => ({
  async send(options) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const info = await transporter.sendMail({
        from: process.env.SMTP_DEFAULT_FROM || "no-reply@ledilluminationtech.com",
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
      });

      console.log("✅ Email sent:", info.messageId);
      if (nodemailer.getTestMessageUrl(info)) {
        console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
      }

      return { success: true };
    } catch (err) {
      console.error("❌ Direct Nodemailer error:", err);
      throw err;
    }
  },
});
