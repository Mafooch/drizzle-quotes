import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Random Quote Generator',
  description: 'Generates a random quote',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='mx-auto p-12 bg-black min-h-screen'>
          {children}
        </main>
      </body>
    </html>
  )
}
