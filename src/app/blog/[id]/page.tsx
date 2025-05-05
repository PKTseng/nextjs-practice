// app/blog/[id]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params

  return {
    title: `Blog ${id}`,
  }
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const { id } = await params

  // 這裡通常會從 API 或數據庫獲取特定 ID 的文章
  // 這只是示例數據
  const post = {
    id,
    title: `部落格文章 ${id}`,
    content: `這是部落格文章 ${id} 的內容。這裡可以是從數據庫或 API 獲取的實際內容。`,
  }

  // 如果找不到文章，返回 404
  if (!post) {
    notFound()
  }

  return (
    <article>
      <Link href="/blog">← 返回部落格首頁</Link>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}

// 可選：用於產生靜態頁面
export async function generateStaticParams() {
  // 在構建時預先渲染這些頁面
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}
