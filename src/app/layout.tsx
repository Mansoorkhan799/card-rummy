import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cardrummyapp.com.pk'),
  title: {
    default: "Card Rummy Pakistan v1.225 Free Download Official APK",
    template: "%s | Card Rummy"
  },
  description: "Card Rummy 2026 - Pakistan's #1 card game platform. Download Card Rummy APK, play Teen Patti, Rummy, Dragon vs Tiger & win real cash. Fast withdrawals via JazzCash & EasyPaisa. Join 500K+ players!",
  keywords: [
    "Card Rummy",
    "card rummy game",
    "card rummy download",
    "card rummy app",
    "card rummy apk",
    "card rummy pakistan",
    "card rummy online",
    "download card rummy",
    "card rummy real money",
    "3 Patti Card Rummy",
    "how to play card rummy",
    "card rummy 2026",
    "Pakistan card games",
    "Teen Patti game",
    "online rummy game",
    "earn money playing cards",
    "Android gaming app 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "mobile card games",
    "real money games Pakistan",
    "card game earning app",
    "Teen Patti online",
    "Dragon vs Tiger",
    "best earning app Pakistan",
    "rummy card game",
    "play rummy online",
    "rummy game download"
  ],
  authors: [{ name: "Card Rummy Team" }],
  creator: "Card Rummy",
  publisher: "Card Rummy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/card-rummy-logo.webp', type: 'image/webp', sizes: '192x192' },
      { url: '/card-rummy.webp', type: 'image/webp', sizes: '512x512' }
    ],
    apple: [
      { url: '/card-rummy-logo.webp', sizes: '180x180' }
    ],
    shortcut: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ]
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://cardrummyapp.com.pk",
  },
  openGraph: {
    title: "Card Rummy Pakistan v1.225 Free Download Official APK",
    description: "Card Rummy 2026 - Pakistan's #1 card game platform. Join 500K+ players. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    url: "https://cardrummyapp.com.pk",
    siteName: "Card Rummy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://cardrummyapp.com.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Card Rummy - Premier Card Gaming Platform",
      },
      {
        url: "https://cardrummyapp.com.pk/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "Card Rummy - Premier Card Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Card Rummy Pakistan v1.225 Free Download Official APK",
    description: "Card Rummy 2026 - Pakistan's #1 card game platform. Join 500K+ players. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    creator: "@cardrummy",
    images: [
      {
        url: "https://cardrummyapp.com.pk/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "Card Rummy - Premier Card Gaming Platform",
      }
    ],
  },
  applicationName: "Card Rummy",
  category: "Gaming",
  classification: "Card Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16 32x32" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/card-rummy-logo.webp" type="image/webp" sizes="192x192" />
        <link rel="icon" href="/card-rummy.webp" type="image/webp" sizes="512x512" />
        <link rel="apple-touch-icon" href="/card-rummy-logo.webp" sizes="180x180" />
        <meta property="og:image" content="https://cardrummyapp.com.pk/card-rummy-logo.webp" />
        
        {/* Preload LCP image (hero) for faster Largest Contentful Paint */}
        <link rel="preload" href="/card-rummy.webp" as="image" type="image/webp" />
        
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Defer manifest to avoid critical path (374ms latency) - load after page interactive */}
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {/* Google Analytics - only load if GA ID is set in env (use NEXT_PUBLIC_GA_MEASUREMENT_ID) */}
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' &&
         process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
         !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className="antialiased bg-primary text-white min-h-screen flex flex-col"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <Header />
        <main className="flex-grow relative z-10">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTopWrapper />
        <WebVitalsTracker />
        
        {/* Structured data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Card Rummy",
              "url": "https://cardrummyapp.com.pk",
              "logo": "https://cardrummyapp.com.pk/card-rummy-logo.webp",
              "description": "Card Rummy is Pakistan's premier card gaming platform, offering Teen Patti, Rummy, and many other card games with real cash rewards.",
              "sameAs": [
                "https://facebook.com/cardrummy",
                "https://twitter.com/cardrummy"
              ]
            })
          }}
        />
        
        {/* Structured data for SoftwareApplication */}
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Card Rummy",
              "operatingSystem": "Android",
              "applicationCategory": "GameApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "PKR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "ratingCount": "500000"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
