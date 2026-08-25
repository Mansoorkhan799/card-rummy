/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  // Dev-only: allow HMR when the page is opened as 127.0.0.1 instead of localhost
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  
  // Target modern browsers - no legacy polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'slotspk.com.pk',
      },
    ],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 90, 100], // Configure allowed image quality values
  },

  async redirects() {
    return [
      // /about was indexed by Google but the real page is /about-us
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      // Malformed URLs Google crawled — send them home
      {
        source: '/\\$',
        destination: '/',
        permanent: true,
      },
      {
        source: '/\\&',
        destination: '/',
        permanent: true,
      },
      {
        source: '/og-image.webp',
        destination: '/feature/og-image.webp',
        permanent: true,
      },
      {
        source: '/og-image-square.webp',
        destination: '/feature/og-image-square.webp',
        permanent: true,
      },
      {
        source: '/twitter-card.webp',
        destination: '/feature/twitter-card.webp',
        permanent: true,
      },
      {
        source: '/card-rummy-logo.webp',
        destination: '/card-rummy.webp',
        permanent: true,
      },
    ];
  },

  // Optimize static file serving
  async rewrites() {
    return [
      {
        source: '/.well-known/:path*',
        destination: '/public/.well-known/:path*',
      },
      // Redirect old 3Patti Blue logo to Card Rummy logo
      {
        source: '/3-patti-blue-logo.webp',
        destination: '/card-rummy.webp',
      },
    ];
  },

  // Next.js 16 uses Turbopack by default. An explicit (even empty) turbopack
  // config tells Next this project is not relying on a leftover webpack() hook.
  turbopack: {},

  // Optimize headers
  async headers() {
    return [
      // HTML pages: always revalidate so Googlebot gets fresh content.
      // Exclude /_next/static so Next.js can manage hashed-asset caching
      // (custom Cache-Control there breaks HMR in development).
      {
        source: '/((?!_next/static|_next/image).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
      // Public images: long cache but allow revalidation
      {
        source: '/:path*.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'text/css',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Enable experimental features
  experimental: {
    optimizeCss: true, // Critters inlines critical CSS
    inlineCss: true, // Inline CSS in HTML to eliminate render-blocking (improves FCP/LCP)
    scrollRestoration: true,
    optimizePackageImports: ['react-icons'],
  },
  
  // Modern module/nomodule pattern
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
}

module.exports = nextConfig 