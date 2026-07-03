import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nammahealth - All-In-One Healthcare Ecosystem',
  description: 'Namma Health is a membership-based healthcare coordination ecosystem designed to simplify access to hospitals, diagnostics, insurance, home care, and emergency services.',
  icons: {
    icon: '/8.png',
    apple: '/8.png',
  },
  openGraph: {
    title: 'Nammahealth - All-In-One Healthcare Ecosystem',
    description: 'Your 24x7 Complete Healthcare Coordination Partner. One Membership. Multiple Services. Complete Care.',
    images: [{ url: '/8.png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
