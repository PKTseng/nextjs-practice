'use client'

import { useRouter } from 'next/navigation'

export default function LoginModal() {
  const router = useRouter()

  // 關閉模態視窗
  const closeModal = () => {
    router.back()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">登入</h2>
          <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">電子郵件</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">密碼</label>
            <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            登入
          </button>
        </form>
      </div>
    </div>
  )
}
