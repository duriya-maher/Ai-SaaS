import type { Metadata } from 'next'
import { Outfit, Space_Mono } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
})

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: 'AI SaaS - Build Your Product Front to Back',
  description: 'All-in-one AI-powered platform for designing, building, and launching products with cutting-edge technology.',
  keywords: ['AI', 'SaaS', 'Product Development', 'Automation', 'Technology'],
  authors: [{ name: 'AI SaaS' }],
  openGraph: {
    title: 'AI SaaS - Build Your Product Front to Back',
    description: 'All-in-one AI-powered platform for designing, building, and launching products.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
