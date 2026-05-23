
// this compenent used for to show the list of product's which we added into cart page.

'use client'
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react";
import {FaShoppingCart} from 'react-icons/fa'
import axios from "axios";

export default function Cart(){

    const router = useRouter();
    const [itemNum, setGetItem] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
          let response = await axios.get("http://localhost:8000/getProduct");
          console.log(response)
          setGetItem(response.data);
        };
        fetchProduct();
        
      }, []);

    const goToCart = (name) => {
        router.push(name)
    }

    return (
        <button className='cart' onClick={() => goToCart('/CartPage/[addproduct]')}><FaShoppingCart />  {itemNum.length}</button>
    )
}