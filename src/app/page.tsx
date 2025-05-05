// app/page.tsx (首頁)
import React from 'react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">歡迎來到 MyApp</h1>
      <p className="text-lg text-gray-600 mb-8">這是一個使用 Next.js 和 Tailwind CSS 建立的示例應用。</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 卡片 1 */}
        <div className="bg-white p-6 rounded shadow hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">特色一</h2>
          <p className="text-gray-600">探索我們應用的核心功能。</p>
        </div>

        {/* 卡片 2 */}
        <div className="bg-white p-6 rounded shadow hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">特色二</h2>
          <p className="text-gray-600">提升您的生產力的工具。</p>
        </div>

        {/* 卡片 3 */}
        <div className="bg-white p-6 rounded shadow hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">特色三</h2>
          <p className="text-gray-600">簡化您的工作流程。</p>
        </div>
      </div>
    </div>
  )
}
