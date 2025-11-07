import nodemailer from "nodemailer";

export default {
  async send(ctx) {
    try {
      // ✅ use the exact working transport from your Node test
      const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: "ibz3pibrlkonqs7n@ethereal.email",
          pass: "Bsq1myXnuH61wa9zQT",
        },
      });

      const info = await transporter.sendMail({
        from: "no-reply@localhost",
        to: "your-email@example.com",
        subject: "Direct Nodemailer Email (Strapi bypass)",
        text: "✅ This was sent directly from Nodemailer inside Strapi.",
      });

      console.log("✅ Sent:", info.messageId);
      console.log("Preview URL:", nodemailer.getTestMessageUrl(info));

      ctx.body = { message: "Email sent successfully (direct Nodemailer)" };
    } catch (err) {
      console.error("Email error:", err);
      ctx.body = { error: err.message };
    }
  },
};
