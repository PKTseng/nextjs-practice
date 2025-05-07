'use client'
import Image from 'next/image'
import { generateProducts } from '@/app/data'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function PhotoModal({ params }: { params: Promise<{ id: string }> }) {
  // 使用類型保護來處理 params
  const unwrappedParams = React.use(params as Promise<{ id: string }>)
  const products = generateProducts(30)
  const photo = products.find((p) => p.id === unwrappedParams.id)
  const router = useRouter()

  // 添加安全檢查
  if (!photo) {
    return (
      <div className="flex justify-center items-center fixed inset-0 bg-slate-300/[.8] z-50" onClick={router.back}>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p>找不到照片</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={router.back}>
            返回
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-slate-300/[.8] z-50" onClick={router.back}>
      <Image
        className="rounded-lg shadow-lg"
        src={photo.imageSrc}
        alt={photo.imageAlt}
        width={400}
        height={400}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}
