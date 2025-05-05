export default function Analytics() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">數據分析</h1>

      <div className="bg-indigo-50 p-6 rounded border border-indigo-200 mb-6">
        <h2 className="text-lg font-medium text-indigo-800 mb-4">流量趨勢</h2>
        <div className="h-32 bg-white rounded border border-gray-200 flex items-center justify-center">
          [這裡是流量圖表的模擬區域]
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-purple-50 p-4 rounded border border-purple-200">
          <h3 className="font-medium text-purple-800">頁面訪問</h3>
          <p className="text-2xl font-bold">1,234</p>
        </div>

        <div className="bg-pink-50 p-4 rounded border border-pink-200">
          <h3 className="font-medium text-pink-800">平均停留時間</h3>
          <p className="text-2xl font-bold">2.5 分鐘</p>
        </div>

        <div className="bg-orange-50 p-4 rounded border border-orange-200">
          <h3 className="font-medium text-orange-800">跳出率</h3>
          <p className="text-2xl font-bold">23%</p>
        </div>
      </div>
    </div>
  )
}
