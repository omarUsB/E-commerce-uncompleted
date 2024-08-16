import React from 'react'
import ProductItem from './ProductItem'



function ProductList({productList}) {

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
      { productList.map(elm => (
        <div key={elm.id}>
          <ProductItem productItem={elm}/>
        </div>
      )) 

      }
    </div>
  )
}

export default ProductList