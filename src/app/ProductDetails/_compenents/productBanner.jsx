import React from 'react'
import Image from 'next/image'
function ProductBanner({product}) {
  return (
    <div>
      { product?.attributes?.Banner?.data?.attributes?.url ? 
<Image className='rounded-lg' src={product?.attributes?.Banner?.data?.attributes?.url} alt='hdra zayda' width={400} height={400}/>
      
      : 
      
      <div className='w-[400px] h-[225px] bg-slate-200 rounded-lg animate-pulse'>

</div>}

    </div>
  )
}

export default ProductBanner