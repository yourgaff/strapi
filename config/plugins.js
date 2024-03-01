module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'google-cloud-storage',
      providerOptions: {
        // cloud_name: env('CLOUDINARY_NAME'),
        // api_key: env('CLOUDINARY_KEY'),
        // api_secret: env('CLOUDINARY_SECRET'),


        "bucketName": "strapi-togetha",
        "publicFiles": true,
        "uniform": false,
        "baseUrl": ""

      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});