'use client'
import React, { useEffect, useState } from 'react'
import ProductList from '@/app/_components/ProductList'
import ProductApis from '@/app/_Utils/ProductApis'


function ProductSection() {

     const [productList,setproductList]=useState([])

          useEffect(()=>{
            getLatestProducts_();
          },[])


  const getLatestProducts_=()=>{
    ProductApis.getLatestProducts().then(res=>{
       
       setproductList(res.data.data)
    })
  }

  return (
    <div className='px-10 md:px-20'>
      <h2 className='my-4 text-xl '>Our Latest Product</h2>
      <ProductList productList={productList}/></div>
  )
}

export default ProductSection