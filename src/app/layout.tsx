import { Roboto } from 'next/font/google'
import './globals.css'
import React from 'react'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className={`min-h-screen bg-gray-50 flex flex-col ${roboto.className}`}>
        <div className="flex flex-grow">
          {/* 主內容區 */}
          <main className="flex-grow p-4">
            {children}
            {modal}
          </main>
        </div>

        {/* 頁腳 */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>© 2025 MyApp. 保留所有權利。</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
