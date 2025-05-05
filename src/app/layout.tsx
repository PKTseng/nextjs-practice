import { Roboto } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import React from 'react'

const roboto = Roboto({
  weight: ['400', '700'], // 載入多個字重
  subsets: ['latin'], // 指定字符子集
  display: 'swap', // 字體顯示策略
})

const navItems = [
  { href: '/', label: '首頁' },
  { href: '/dashboard/', label: '儀表板' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
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

        {/* 主要內容區 */}
        <main className="flex-grow">{children}</main>

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
