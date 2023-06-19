/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Array of security header objects
  {
    source: '/(.*)',
    headers: [
      // Content-Security-Policy header
      {
        key: 'Content-Security-Policy',
        value: "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      },
      // X-Content-Type-Options header
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      // X-Frame-Options header
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
      },
      // X-XSS-Protection header
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
      },
      // Strict-Transport-Security header
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=15552000; includeSubDomains',
      },
      // Referrer-Policy header
      {
        key: 'Referrer-Policy',
        value: 'no-referrer',
      },
      // Permissions-Policy header
      {
        key: 'Permissions-Policy',
        value: 'geolocation=(self)',
      },
    ],
  },
];

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts"
);
const nextConfig = withNextIntl({
  // Other Next.js configuration ...
  experimental: { appDir: true },
  publicRuntimeConfig: {
    // Configuration options here
    staticFolder: '/static',
  },
  // i18n: {
  //   locales: ['en', 'th'],
  //   defaultLocale: 'th',
  // },
  headers: () => securityHeaders,
  env: {
    BACKEND_API_ENDPOINT: process.env.BACKEND_API_ENDPOINT,
  },
});

module.exports = nextConfig;