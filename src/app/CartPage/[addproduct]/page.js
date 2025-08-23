// this is cart page. where we list all the product which added into cart.

"use client";
import { useEffect, useState } from "react";
import "./page.css";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Page() {
  const [getItem, setGetItem] = useState([]);
  const [itemRem, setItemRem] = useState("");
  const router = useRouter();

  //  this state used for to fetch all products from dataBase which added into cart.
  useEffect(() => {
    const fetchProduct = async () => {
      let response = await axios.get("http://localhost:8000/getProduct");
      setGetItem(response.data);
    };
    fetchProduct();
  }, []);


  // this function used for to remove the product from cart page.
  const RemoveProduct = async (id) => {
    let response = await axios.post("http://localhost:8000/RemovePro", {
      id,
    });
    setItemRem(response.data.msg);

    // this update the array of product. fetched from database.
    setGetItem((prev) => prev.filter((product) => product.id !== id));
  };

  const goToHome = () => {
    router.push("/");
  };

  return (
    <div className="CartPage">
      <h1>Cart Page..</h1>
      <button onClick={() => goToHome()}>Home</button>
      {getItem.map((item) => {
        return (
          <div className="Product" key={item.id}>
            <div className="Img">
              <img
                className="cartImg"
                src={item.picture ? item.picture : <h2>loading..</h2>}
              ></img>
            </div>
            <div className="productName">
              <h3>{item.title}</h3>
            </div>
            <div>
              <h3>Rs.{item.price}</h3>
            </div>
            <button onClick={() => RemoveProduct(item.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}
