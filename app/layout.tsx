import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from 'next/script'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PlaylistPlus+ | Spotify Ads for Global Brands',
  description: 'Reach millions of listeners on Spotify with targeted advertising campaigns',
  generator: 'v0.app',
  verification: {
    google: '2211i-0tGIe-Xurwy-vT8Fa_C7aqnNbnljdRN-De960',
  },
  keywords: [
    'Spotify Promotions',
    'Spotify advertising',
    'Spotify premium',
    'Song promotions',
    'Spotify campaign',
    'Spotify streaming',
    'Spotify playlists',
    'Spotify streams',
    'Music marketing',
    'Music distribution',
  ],
  openGraph: {
    title: 'PlaylistPlus+ | Spotify Ads for Global Brands',
    description: 'Reach millions of listeners on Spotify with targeted advertising campaigns',
    url: 'https://www.playlistplus.com', // Replace with your actual website URL
    siteName: 'PlaylistPlus+',
    images: [
      {
        url: 'https://www.playlistplus.com/placeholder-logo.png', // Replace with your actual image URL if different
        width: 800,
        height: 600,
        alt: 'PlaylistPlus+ Logo',
      },
      {
        url: 'https://www.playlistplus.com/placeholder-logo.png', // Replace with your actual image URL if different
        width: 1800,
        height: 1600,
        alt: 'PlaylistPlus+ Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PlaylistPlus+ | Spotify Ads for Global Brands',
    description: 'Reach millions of listeners on Spotify with targeted advertising campaigns',
    creator: '@playlistplus', // Replace with your Twitter handle
    images: ['https://www.playlistplus.com/placeholder-logo.png'], // Replace with your actual image URL if different
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon', // Standard MIME type for .ico files
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P2NV42PX');
        `}
      </Script>
      <body className={`font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2NV42PX"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Analytics />
        <Script id="crisp-chat-script" strategy="lazyOnload">
          {`
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="02a4596c-e2b9-45d2-a323-32ad67ad4b4e";
            (function(){
              d=document;s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        </Script>
        <Script id="meta-pixel-script" strategy="afterInteractive">
            {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '885065353987481');
            fbq('track', 'PageView');
            `}
        </Script>
        <noscript>
            <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=885065353987481&ev=PageView&noscript=1"
            />
        </noscript>
      </body>
    </html>
  )
}

