
// this compenent used for to show the list of product's which we added into cart page.

'use client'
import { useRouter } from "next/navigation"
import {FaShoppingCart} from 'react-icons/fa'

export default function Cart(){

    const router = useRouter();

    const goToCart = (name) => {
        router.push(name)
    }

    return (
        <button className='cart' onClick={() => goToCart('/CartPage/[addproduct]')}><FaShoppingCart /></button>
    )
}