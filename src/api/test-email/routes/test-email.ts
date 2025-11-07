export default {
  routes: [
    {
      method: 'GET',
      path: '/test-email',
      handler: 'test-email.send',
      config: {
        auth: false, // public access for now (just for testing)
      },
    },
  ],
};
