import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PlaylistPlus+ | Spotify Ads for Global Brands',
  description: 'Reach millions of listeners on Spotify with targeted advertising campaigns',
  generator: 'v0.app',
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
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
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
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
