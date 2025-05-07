import Link from 'next/link'
import Image from 'next/image'
import { generateProducts } from '@/app/data'

export default function ProductList({ count = 30 }) {
  const products = generateProducts(count)

  return (
    <div className="bg-white py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition"
                  priority
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
