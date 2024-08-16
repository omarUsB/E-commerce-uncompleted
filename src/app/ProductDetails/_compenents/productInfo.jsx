import { AlertOctagon, BadgeCheck, ShoppingBagIcon } from 'lucide-react'
import React from 'react'
import SkeletonProduct from '@/app/ProductDetails/_compenents/SkeletonProduct'
import { useRouter } from 'next/navigation'
import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs'
// import cartApis from '../../_Utils/cartApis'

function ProductInfo({product}) {
  const router = useRouter()
  const { isAuthenticated, user } = useKindeAuth()

  // const handleAddToCart = async () => {
  //   console.log("Authenticated:", isAuthenticated);
  //   console.log("User Data:", user);

  //   if (isAuthenticated) {
  //     try {
  //       if (user) {
  //         const data = {
  //           userName: user.fullName,
  //           email: user.primaryEmailAdress.emailAddress,
  //           products: [product?.id]
  //         };

  //         await cartApis.addToCart(data); // Pass data to your API
  //         console.log("Added to cart successfully.");
  //         // Optionally show a success message or handle UI changes
  //       } else {
  //         console.error("User data is not available.");
  //       }
  //     } catch (error) {
  //       console.error("Error adding to cart:", error);
  //     }
  //   } else {
  //     console.log("Redirecting to Kinde signup page.");
  //     router.push('https://omarmd.kinde.com/auth/cx/_:nav&m:login&psid:115441bcfbac4dc3bd666594ddfe95aa');
  //   }
  // }

  return (
    <div>
      {product?.id ? (
        <div>
          <h2 className='text-[20px]'>{product?.attributes?.title}</h2>
          <h2 className='text-[15px] text-gray-400'>{product?.attributes?.category}</h2>
          <h2 className='text-[20px] text-black'>{product?.attributes?.Description[0]?.children[0].text}</h2>
          <h2 className='text-[13px] text-gray-400 flex gap-2 mt-2'>
            {product?.attributes?.IntantDelivery ? <BadgeCheck className='text-green-500 w-5 h-5 '/> : <AlertOctagon/>}
            Eligible for instant delivery
          </h2>
          <h2 className='text-[32px] text-primary mt-3'>{product?.attributes?.price} $</h2>

          <button 
            onClick={handleAddToCart}
            className='flex gap-2 rounded-lg bg-primary hover:bg-red-700 p-2 mt-2 text-white'
          >
            Add To Cart<ShoppingBagIcon/>
          </button>
        </div>
      ) : (
        <SkeletonProduct/>
      )}
    </div>
  )
}

export default ProductInfo
