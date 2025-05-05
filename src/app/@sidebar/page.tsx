import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-4">側邊選單</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/dashboard" className="block p-2 hover:bg-blue-50 rounded">
            儀表板概覽
          </Link>
        </li>
        <li>
          <Link href="/dashboard/stats" className="block p-2 hover:bg-blue-50 rounded">
            統計數據
          </Link>
        </li>
        <li>
          <Link href="/dashboard/users" className="block p-2 hover:bg-blue-50 rounded">
            用戶管理
          </Link>
        </li>
        <li>
          <Link href="/login" className="block p-2 hover:bg-blue-50 rounded text-blue-600">
            登入
          </Link>
        </li>
      </ul>
    </div>
  )
}
