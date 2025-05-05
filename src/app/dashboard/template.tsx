'use client'

import React from 'react'
import { useState, useEffect } from 'react'

export default function DashboardTemplate({ children }: { children: React.ReactNode }) {
  const [templateCount, setTemplateCount] = useState(0)
  const [templateTime, setTemplateTime] = useState('')

  // 在每次頁面導航時重新記錄時間
  useEffect(() => {
    setTemplateTime(new Date().toLocaleTimeString())
  }, [])

  return (
    <div className="bg-white p-6 shadow rounded">
      {/* Template 狀態展示 */}
      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <h3 className="font-semibold text-yellow-800">Template 狀態</h3>
        <p className="text-sm text-yellow-600 mb-2">頁面導航時會重置</p>
        <p className="mb-1">
          計數: <span className="font-medium text-black">{templateCount}</span>
        </p>
        <p className="mb-3">
          創建時間: <span className="font-medium text-black">{templateTime}</span>
        </p>
        <button
          className="px-3 py-1 bg-yellow-600 text-white rounded text-sm"
          onClick={() => setTemplateCount(templateCount + 1)}
        >
          增加 Template 計數
        </button>
      </div>

      {/* 頁面內容 */}
      <div className="border-t pt-4">{children}</div>
    </div>
  )
}
