import { factories } from "@strapi/strapi";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default factories.createCoreController("api::contact.contact", ({ strapi }) => ({
  async submit(ctx) {
    try {
      const { fullName, email, phone, zipcode, projectDetails } = ctx.request.body;

      // Validation
      if (!fullName || !email || !phone || !zipcode || !projectDetails) {
        return ctx.badRequest("All fields are required.");
      }

      console.log("Sending email to:", process.env.EMAIL_TO);

      // ✅ Send email via Resend
      const { data, error } = await resend.emails.send({
        from: process.env.EMAIL_DEFAULT_FROM || "noreply@ledillumination.com",
        to: process.env.EMAIL_TO?.split(',') || ["info@ledillumination.com"],
        replyTo: email, // Customer's email for easy replies
        subject: `New Quote Request from ${fullName}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Zipcode:</strong> ${zipcode}</p>
          <p><strong>Project Details:</strong></p>
          <p style="white-space: pre-wrap;">${projectDetails}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Submitted at ${new Date().toLocaleString()}</p>
        `,
        text: `
          Name: ${fullName}
          Email: ${email}
          Phone: ${phone}
          Zipcode: ${zipcode}
          Project Details:
          ${projectDetails}
          
          Submitted at ${new Date().toLocaleString()}
        `,
      });

      if (error) {
        console.error("❌ Resend error:", error);
        return ctx.internalServerError("Failed to send email.");
      }

      console.log("✅ Email sent via Resend:", data?.id);

      ctx.body = { 
        success: true, 
        message: "Quote request sent successfully.",
        emailId: data?.id 
      };
      
    } catch (err) {
      console.error("❌ Email send error:", err);
      ctx.internalServerError("Failed to send quote request.");
    }
  },
}));