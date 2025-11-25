import { factories } from "@strapi/strapi";
import nodemailer from "nodemailer";

export default factories.createCoreController("api::contact.contact", ({ strapi }) => ({
  async submit(ctx) {
    try {
      const { fullName, email, phone, zipcode, projectDetails } = ctx.request.body;

      if (!fullName || !email || !phone || !zipcode || !projectDetails !) {
        return ctx.badRequest("All fields are required.");
      }

<<<<<<< HEAD
      console.log("SMTP_TO:", process.env.SMTP_TO);

=======
>>>>>>> f13899e1aa7c520c6044678b2c3268d514aa6b3e
      // ✅ create Nodemailer transport (Ethereal for dev)
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.ethereal.email",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // ✅ send message to company
      const info = await transporter.sendMail({
        from: process.env.SMTP_DEFAULT_FROM || "no-reply@ledilluminationtech.com",
        to: process.env.SMTP_TO.split(','),
        subject: `New Quote Request from ${fullName}`,
        text: `
          Name: ${fullName}
          Email: ${email}
          Phone: ${phone}
          Zipcode: ${zipcode}
          Project Details: ${projectDetails}
        `,
      });

      console.log("✅ Email sent:", info.messageId);
      const preview = nodemailer.getTestMessageUrl(info);
      if (preview) console.log("Preview URL:", preview);

      ctx.body = { success: true, message: "Quote request sent successfully." };
    } catch (err) {
      console.error("❌ Email send error:", err);
      ctx.internalServerError("Failed to send quote request.");
    }
  },
}));
