export default function Setting() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">設置</h1>

      <div className="bg-white border border-gray-200 rounded overflow-hidden">
        <div className="border-b border-gray-200">
          <h2 className="p-4 text-lg font-medium">個人設置</h2>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <label className="text-black mb-2">顯示名稱</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="您的顯示名稱" />
          </div>

          <div className="mb-4">
            <label className="text-black mb-2">電子郵件</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="您的電子郵件" />
          </div>

          <div className="mb-4">
            <label className="text-black mb-2">暗色模式</label>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>啟用暗色模式</span>
            </div>
          </div>

          <button className="px-4 py-2 bg-blue-600 text-white rounded">保存設置</button>
        </div>
      </div>
    </div>
  )
}
