import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

// 定義頁面的元數據
export const metadata: Metadata = {
  title: '404 - 頁面未找到',
  description: '很抱歉，您訪問的頁面不存在。',
  // 可以在這裡添加自定義的 OG 圖片設置
  openGraph: {
    title: '404 - 頁面未找到',
    description: '很抱歉，您訪問的頁面不存在。',
    // 如果您想為404頁面設置特殊的 OG 圖片，可以在這裡指定
    images: [
      {
        url: '/images/404-og-image.png', // 這個路徑指向您的公共文件夾中的圖片
        width: 1200,
        height: 630,
        alt: '404頁面未找到',
      },
    ],
  },
}

function NotFound() {
  return (
    <div className="error-container">
      <h1>頁面未找到</h1>
      <p>很抱歉，您訪問的頁面不存在。</p>
      <Link href="/">返回首頁</Link>
    </div>
  )
}

export default NotFound
