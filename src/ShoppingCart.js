import React, { useState } from "react";
import "./ShoppingCart.css";
import ProductCard from "./Components/ProductCard";
import img1 from "./Components/assets/images/img1.jpg";
import img2 from "./Components/assets/images/img2.jpg";
import img3 from "./Components/assets/images/img3.webp";
import img4 from "./Components/assets/images/img4.jpg";
import img5 from "./Components/assets/images/img5.jpeg";
import img6 from "./Components/assets/images/img6.jpg";

import CartItems from "./Components/CartItems";

function ShoppingCart() {
  const Products = [
    {
      id: 1,
      productName: "Redmi note 12 Pro 5g",
      img: img1,
      price: 15000,
      desc: "REDMI Note 12 Pro 5G (Glacier Blue, 128 GB) features and specifications include 6 GB RAM, 128 GB ROM, 5000 mAh battery, 50 MP back camera and 16 MP front camera.",
      isStock: true,
    },
    {
      id: 2,
      productName: "Apple iPhone X",
      img: img4,
      price: 30000,
      desc: "iPhone X (Lavendar, 64GB), 5.8 inch Super Retina HD Display, 64GB ROM, lithium-ion Battery, A11 Bionic Chip, M11 Motion Coprocessor, 12MP+12MP Dual rear camera and 7MP front camera.",
      isStock: false,
    },
    {
      id: 3,
      productName: "Vivo T3 5G",
      img: img3,
      price: 25000,
      desc: "vivo T3 5G (Crystal Flake, 128 GB) features and specifications include 8 GB RAM, 128 GB ROM, 5000 mAh battery, 50 MP back camera and 16 MP front camera.",
      isStock: true,
    },
    {
      id: 4,
      productName: "Samsung S21 FE 5g",
      img: img5,
      price: 20000,
      desc: "Samsung Galaxy S21 FE 5G with Snapdragon 888 (Graphite, 128 GB) features and specifications include 8 GB RAM, 128 GB ROM, 4500 mAh battery, 12 MP back camera and 32 MP front camera.",
      isStock: true,
    },
    {
      id: 5,
      productName: "Xiomi 13 pro",
      img: img2,
      price: 10000,
      desc: "13 pro (Ceramic black, 256 GB) features and specifications include 12 GB RAM, 256 GB ROM, 4820 mAh battery, 50 MP back camera.",
      isStock: false,
    },
    {
      id: 6,
      productName: "OnePlus Nord CE 2 5G",
      img: img6,
      price: 25000,
      desc: "OnePlus Nord CE 2 5G (Gray Mirror, 128 GB) features and specifications include 8 GB RAM, 128 GB ROM, 4500 mAh battery, 64 MP back camera and MP front camera.",
      isStock: true,
    },
  ];


let [cartItems,setcartItems] = useState([]);
let[Total, setTotal]=useState(0);

let AddToCart=(data)=>{
    setcartItems([...cartItems,data]);
setTotal(Total+data.price)
};

let removeCartItem=(item)=>{
    let index=cartItems.findIndex((cItem)=>cItem.id==item.id);
    cartItems.splice(index,1);
    setcartItems([...cartItems])
    setTotal(Total-item.price)
}

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 p-3 left">
          <div className="row">
            {Products.map((prod) => {
              return (
              <ProductCard prod={prod} AddToCart={AddToCart}/>

              );
            })}
          </div>
        </div>
        <div className="col-2 right">
            <ol class="list-group list-group-numbered">
            <h3> Count: {cartItems.length} </h3>
            {cartItems.map((item)=>{return <CartItems item={item} removeCartItem={removeCartItem}/>;})}
</ol>
<h5>Price:{Total}</h5>
</div>
      </div>
    </div>
  );
}

export default ShoppingCart;