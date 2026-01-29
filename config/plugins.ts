export default ({ env }) => ({
  email: {
    config: {
      provider: 'resend',
      providerOptions: {
        apiKey: env('RESEND_API_KEY'),
      },
      settings: {
        defaultFrom: env('EMAIL_DEFAULT_FROM', 'noreply@ledillumination.com'),
        defaultReplyTo: env('EMAIL_DEFAULT_REPLY_TO', 'info@ledillumination.com'),
      },
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
});