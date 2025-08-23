
//  this router used for to show the product detail's. and when anyone buy a product it come here in this page.

"use client";
import { useEffect, useState } from "react";
import TargetProduct from "../../../../component/TargetProduct";
import OpenCartPage from "../../../../component/OpenCartPage";
import "./style.css";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

export default function BuyPage() {

  // when a anyone click on buy product we fetch here the product id. for show the detail's of product to buy it.

  let id = useParams();
  id = id.buy;
  const router = useRouter();
  const goToHome = () => {
    router.push("/");
  };

  // this state used for to show the product detail's on screen.
  const [item, setItem] = useState({
    id: "",
    title: "",
    picture: "",
    price: "",
    description: "",
  });

  // this is a form data which we filled by customer. for there order placed.
  const [formData, setData] = useState({
    amount: "",
    fullName: "",
    email: "",
    city: "",
  });

  // this targetPro function used for to fetch a product.
  const targetPro = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    let targetItem = response.data;
    setItem({
      id: targetItem.id,
      title: targetItem.title,
      picture: targetItem.image,
      price: targetItem.price,
      description: targetItem.description,
    });
  };
  
  useEffect(() => {
    targetPro()
  },[])

  // here we update the form data filled by customer.
  const setFormData = (e) => {
    setData((prev) => ({
      ...prev,
      productDetails: { ...item },
      [e.target.name]: e.target.value,
    }));
  };
  
  // in this we call api to send the all data of customer and product at on shop.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xkgzzlry", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Send as JSON
    });

    setData({
      amount: "",
      fullName: "",
      email: "",
      city: "",
    })
    
    if (response.ok) {
      alert("Message sent!");
      e.target.reset();
    } else {
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <div className="BuyMain">
      <button className="homeBtn" onClick={() => goToHome()}>
        Home
      </button>
      <OpenCartPage />
      <div className="prodcutDetail">
        {/* here is the product Img, title and price */}
        <div className="item">
          <div className="productImg">
            <img className="buyImg" src={item?.picture} />
          </div>
          <h2 className="title">{item.title}</h2>
          <h3 className="price">Rs: ${item.price}</h3>
        </div>

      {/* here the product description */}
        <div className="description">
          <h2>Description</h2>
          <p>{item.description}</p>
        </div>

      {/* here is the amount of product and client data */}
        <div className="amount">
          <h2>Add Details</h2>
          <div className="totalAmount">
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                name="amount"
                placeholder="product Amount"
                value={formData.amount}
                onChange={setFormData}
                min="1"
              ></input>
              <input
                type="text"
                name="fullName"
                placeholder="full name"
                value={formData.fullName}
                onChange={setFormData}
              ></input>
              <input
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={setFormData}
              ></input>
              <input
                type="text"
                name="city"
                placeholder="city"
                value={formData.city}
                onChange={setFormData}
              ></input>
              <button className="buyBtn" type="submite">
                Buy Now
              </button>
            </form>
          </div>
          <div className="conform">
            <h3>Total Amount: ${item.price * formData.amount}</h3>
            <TargetProduct id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
