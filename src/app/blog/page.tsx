// app/blog/page.tsx
import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
}

export default function BlogIndexPage() {
  // 這裡可以是靜態數據或從 API 獲取的數據
  const blogPosts = [
    { id: '1', title: '第一篇部落格文章' },
    { id: '2', title: '第二篇部落格文章' },
    { id: '3', title: '第三篇部落格文章' },
  ]

  return (
    <div>
      <h1>部落格文章列表</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
