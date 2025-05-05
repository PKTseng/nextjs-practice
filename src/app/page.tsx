import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">歡迎來到 MyApp</h1>
      <p className="mb-4">這是使用 Next.js App Router 與平行路由實現的示例應用。</p>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-2">功能說明</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            左側側邊欄使用 <code>@sidebar</code> 平行路由
          </li>
          <li>
            模態視窗使用 <code>@modal</code> 平行路由
          </li>
          <li>點擊下方按鈕可打開登入模態視窗</li>
        </ul>

        <div className="mt-6">
          <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            打開登入模態視窗
          </Link>
        </div>
      </div>
    </div>
  )
}
