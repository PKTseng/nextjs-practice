'use client'

import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
// import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/dashboard', label: '概覽' },
  { href: '/dashboard/analytics', label: '分析' },
  { href: '/dashboard/setting', label: '設置' },
  { href: '/dashboard/profile', label: '個人資料' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // const pathName = usePathname()
  const [count, setCount] = useState(0)
  const [layoutTime, setLayoutTime] = useState('')

  // 只在組件掛載時記錄時間
  useEffect(() => {
    setLayoutTime(new Date().toLocaleTimeString())
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      {/* 側邊欄導航 */}
      <aside className="w-full md:w-64 bg-white p-4 shadow rounded mb-4 md:mb-0 md:mr-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">儀表板導航 </h2>
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Layout 狀態展示 */}
        <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
          <h3 className="font-semibold text-blue-800">Layout 狀態</h3>
          <p className="text-sm text-blue-600 mb-2">頁面導航時保持不變</p>
          <p className="mb-1">
            計數: <span className="font-medium  text-black">{count}</span>
          </p>
          <p className="mb-3">
            創建時間: <span className="font-medium text-black">{layoutTime}</span>
          </p>
          <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm" onClick={() => setCount(count + 1)}>
            增加 Layout 計數
          </button>
        </div>
      </aside>

      {/* 儀表板內容區 */}
      <div className="flex-1">{children}</div>
    </div>
  )
}
