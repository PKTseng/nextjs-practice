import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">儀表板概覽</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded border border-blue-200">
          <h2 className="text-lg font-medium text-blue-800 mb-2">本週概要</h2>
          <p className="text-blue-600">總訪問量增長了 12%</p>
        </div>

        <div className="bg-green-50 p-4 rounded border border-green-200">
          <h2 className="text-lg font-medium text-green-800 mb-2">新用戶</h2>
          <p className="text-green-600">本月新增 45 位用戶</p>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded">
        <h2 className="text-lg font-medium text-gray-700 mb-2">近期活動</h2>
        <ul className="space-y-2">
          <li className="p-2 bg-white rounded border border-gray-100">用戶 A 完成了任務</li>
          <li className="p-2 bg-white rounded border border-gray-100">系統更新已發布</li>
          <li className="p-2 bg-white rounded border border-gray-100">新功能已添加</li>
        </ul>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded">
        <h2 className="text-lg font-medium text-gray-700 mb-2">導航測試提示</h2>
        <p>請嘗試在儀表板頁面之間導航，觀察 Layout 和 Template 狀態的差異：</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Layout 狀態(藍色區塊)會在頁面之間保持不變</li>
          <li>Template 狀態(黃色區塊)會在每次頁面切換時重置</li>
        </ul>
      </div>
    </div>
  )
}
