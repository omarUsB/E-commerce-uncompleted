import React from 'react'
import { Logs } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

function ProductItem({productItem}) {
  return (
    <Link href={`/ProductDetails/${productItem?.id}`} className='block hover:border p-1 hover:shadow-md rounded-lg border-primary hover:cursor-pointer'>   
      <div className='relative w-full h-[170px]'>
        <Image 
          src={productItem?.attributes?.Banner?.data?.attributes?.url} 
          alt='Product image'
          layout='fill'
          objectFit='cover'
          className='rounded-t-lg'
        />
      </div>
      <div className='flex justify-between p-3 items-center bg-gray-50 rounded-b-lg'>
        <div>
          <h2 className='text-[12px] font-medium line-clamp-1'>{productItem?.attributes?.title}</h2>
          <h2 className='text-[10px] text-gray-400 flex gap-1 items-center'>
            <Logs className='h-4 w-4' />
            {productItem?.attributes?.category}
          </h2>
        </div>
        <h2>{productItem?.attributes?.price}</h2>
      </div>
    </Link>
  )
}

export default ProductItem