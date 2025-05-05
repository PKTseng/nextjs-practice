import { Roboto } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import React from 'react'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const navItems = [
  { href: '/', label: '首頁' },
  { href: '/dashboard/', label: '儀表板' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function RootLayout({
  children,
  sidebar,
  modal,
}: {
  children: React.ReactNode
  sidebar: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={`min-h-screen bg-gray-50 flex flex-col ${roboto.className}`}>
        {/* 頂部導航 */}
        <header className="bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="font-bold text-xl text-blue-600">
              MyApp
            </Link>
            <div className="flex gap-4">
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  className="px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        {/* 主要內容區 - 使用平行路由 */}
        <div className="flex flex-grow">
          {/* 側邊欄插槽 */}
          <div className="w-64 bg-white shadow-sm">{sidebar}</div>

          {/* 主內容區 */}
          <main className="flex-grow p-4">{children}</main>
        </div>

        {/* 模態視窗插槽 */}
        {modal}

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
