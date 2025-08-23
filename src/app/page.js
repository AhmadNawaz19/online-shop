// this is home page of product.

import axios from "axios";
import Cart from "../../component/OpenCartPage";
import "./page.css";
import TargetProduct from "../../component/TargetProduct";

export default async function Page() {
  //  here we call third party api for to fetch products.
  let response = await axios.get("https://fakestoreapi.com/products");
  response = response.data;

  return (
    <div className="main">
      <h1>Page..</h1>
      <Cart />
      {response.map((item) => {
        return (
          <div className="product" key={item.id}>
            <div className="img">
              <img src={item.image}></img>
            </div>
            <div className="title">
              <h3>{item.title}</h3>
              <a className="buyBtn" href={`/BuyPage/${item.id}`}>
                Buy Now
              </a>
              <TargetProduct id={item.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
