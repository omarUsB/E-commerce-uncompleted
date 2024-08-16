'use client'
import React, { useEffect, useState } from 'react'
import ProductApis from '@/app/_Utils/ProductApis'
import ProductInfo from '@/app/ProductDetails/_compenents/productInfo'
import ProductBanner from '@/app/ProductDetails/_compenents/productBanner'
import BreadCrumps from '@/app/_components/BreadCrumps'
import ProductList from '@/app/_components/ProductList'
import { usePathname } from 'next/navigation'


function ProductDetails({ params }) {
  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    if (params?.productId) {
      getProductById_()
    }
  }, [params?.productId])

  const getProductById_ = () => {
    ProductApis.getProductById(params?.productId)
      .then(res => {
        setProduct(res.data.data)
        getProductListByCategory(res.data.data)
      })
      .catch(error => {
        console.error('Error fetching product:', error)
      })
  }

  const getProductListByCategory = (product) => {
    ProductApis.getProductsByCategory(product?.attributes.category)
      .then(res => {
        
        setRelatedProducts(res?.data?.data)
      })
      .catch(error => {
        console.error('Error fetching related products:', error)
      })
  }
  const path=usePathname()
  
  

  return (
    <div>
      <div className='p-x-10 md:px-28 py-6 flex-col mt-10 md:flex-row mx-4 sm:mx-6 md:mx-0'>
        <BreadCrumps  path={path} />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0 mt-10 justify-around'>
          <ProductBanner product={product} />
          <ProductInfo product={product} />
        </div>
        <div>

          <h2 className='mt-24 text-xl mb-4'> Semilar Products</h2> 
          <ProductList productList={relatedProducts}/> 
        </div>
      </div>
    </div>
  )
}

export default ProductDetails