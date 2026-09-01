import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import DeferredAnalytics from "@/components/DeferredAnalytics";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";
import { ORGANIZATION_JSON_LD } from "@/lib/appFacts";

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
    default: "Card Rummy Pakistan v1.231 Free Download Official APK",
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
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '256x256' },
      { url: '/card-rummy.webp', type: 'image/webp', sizes: '512x512' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' }
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
    title: "Card Rummy Pakistan v1.231 Free Download Official APK",
    description: "Card Rummy 2026 - Pakistan's #1 card game platform. Join 500K+ players. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    url: "https://cardrummyapp.com.pk",
    siteName: "Card Rummy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://cardrummyapp.com.pk/feature/og-image.webp",
        width: 512,
        height: 512,
        alt: "Card Rummy - Premier Card Gaming Platform",
      },
      {
        url: "https://cardrummyapp.com.pk/feature/og-image-square.webp",
        width: 512,
        height: 512,
        alt: "Card Rummy - Premier Card Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Card Rummy Pakistan v1.231 Free Download Official APK",
    description: "Card Rummy 2026 - Pakistan's #1 card game platform. Join 500K+ players. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    images: [
      {
        url: "https://cardrummyapp.com.pk/feature/twitter-card.webp",
        width: 512,
        height: 512,
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
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="256x256" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/card-rummy.webp" type="image/webp" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        
        {/* Defer manifest to avoid critical path (374ms latency) - load after page interactive */}
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col`}
        style={{
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <MobileMenuProvider>
          <Header />
          <main className="relative z-10">
          {children}
          </main>
          <DeferredStyles />
          <Footer />
          <ScrollToTopWrapper />
        </MobileMenuProvider>
        <WebVitalsTracker />
        <DeferredAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSON_LD),
          }}
        />
      </body>
    </html>
  );
}
