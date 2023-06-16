import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import './Store.css'
import Footer from "./Footer";
import Cart from "./Cart";

const Store = () => {
 const [isCartShow,setIsCartShow] = useState(false);

 const cartHandler=()=>{
  setIsCartShow(!isCartShow);
 }

  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <div className="" >
     {isCartShow && <Cart />}
      <Navbar />
      <Header />
      <div id="card-btn">
        <button className="btn text-white " onClick={cartHandler}>Cart(0)</button>
      </div>

      <div className="shop-container">
                <h1 className="text-center">COLORS</h1>
                <div id="card-container">
                  {productsArr.map(product=>
                    <div id="card" className="card" >
                       <h5 className="text-center card-title p-2">{product.title}</h5>
                       <img src={product.imageUrl} className="card-img-top" alt=" not found"/>
                       <div className=" card-footer d-flex justify-content-between" >
                         <p className=" card-text pt-1">Price:${product.price}</p>
                         <button className="btn btn-success">Add to cart</button>
                       </div>
                    </div>
                    )}
                </div>
      </div>
      <div className=" d-flex justify-content-center " style={{marginTop:'20px'}}>
        <button className="btn btn-primary text-center text-white" onClick={cartHandler}>SEE THE CART</button>
      </div>
      <Footer />
    </div>
  );
};

export default Store;
