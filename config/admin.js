module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1e04a19c5b225ef7be78d41057c4bf45'),
  },
});
