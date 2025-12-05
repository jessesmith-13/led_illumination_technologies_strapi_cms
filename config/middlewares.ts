export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000',
        'https://led-illumination-technologies-38wizlmo3.vercel.app',
        'https://ledilluminationtech.com',
        'https://www.ledilluminationtech.com'
      ], // allow frontend dev URL
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
