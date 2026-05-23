

// this component used for to add any product in cart Page.

'use client'
import './target.css'
import axios from "axios"
import { useEffect, useState } from "react"
export default function TargetProduct ({id}) {

    const [item, setItem] = useState({
        id : '',
        title : '',
        picture : '',
        price : ''
    })
    const [cond, setCond] = useState(false)
    const [recive, setRecive] = useState('')

    // this targetPro function used for to pick a product which we want to add in to cart.

    const targetPro = async (proId) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${proId}`)
        let targetItem = response.data
        setItem({
            id : targetItem.id,
            title  :targetItem.title,
            picture : targetItem.image,
            price : targetItem.price
        })
    }

    //  this useEffect use to to add a product into database. for show it into cart Page.

    useEffect(() => {
        if (item.id) {
            const sendData = async () => {
            try {
                let response = await axios.post('http://localhost:8000/addItem', item);
                if(response.data.response === 'ok' || response.data.response === 'error'){
                    setCond(true)
                    setRecive(response.data.msg)
                    setTimeout(() => {
                        setCond(false)
                        setRecive('')
                    }, 2000);
                }
            } catch (error) {
                console.error(error);
            }
        };
    sendData();
    
  }
},[item])

    return (
        <div>
        <button className='addToCart' onClick={() => targetPro(id)}>Add to cart</button>
        {
            cond ? (
                <div className='result'>
                    <h3>{recive}</h3>
                </div>
            ): null
        }
        </div>
    )
}