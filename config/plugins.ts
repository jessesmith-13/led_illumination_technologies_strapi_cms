export default ({ env }) => ({
  email: {
    provider: 'nodemailer', // Strapi 5 uses 'provider' directly, not provider.init
    config: {
      host: env('SMTP_HOST'),
      port: env.int('SMTP_PORT', 465),
      auth: {
        user: env('SMTP_USER'),
        pass: env('SMTP_PASS'),
      },
      secure: false,
      defaultFrom: env('SMTP_DEFAULT_FROM', 'no-reply@ledilluminationtech.com'),
      defaultReplyTo: env('SMTP_DEFAULT_REPLY_TO', 'ocortez@ledilluminationtech.com'),
    },
  },
});
