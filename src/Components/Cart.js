import React from "react";
import "./Cart.css";

const Cart = () => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];
  return (
    <div className="" id="cart">
      <h1 className="text-center">CART</h1>
      <div className="card ">
        <div className="sideHeadings">
          <h4 className="sideHeading">ITEMS</h4>
          <h4 className="sideHeading">PRICE</h4>
          <h4 className="sideHeading">QUANTITY</h4>
        </div>
        <div className="cartItems">
          <div>
          {cartElements.map((product) => (
            <>
              <div className="left">
                <img className="img"
                  src={product.imageUrl}
                  alt="not found"
                  style={{ height: "90px", width: "90px" }}
                />
                <p className="title">{product.title}</p>
              </div>
              
            </>
          ))}
          </div>
          <div className="center">
          {cartElements.map(product=>
            <p>${product.price}</p>
            )}
            </div>
            <div className="">
              {cartElements.map(product=>
                <>
                <div className="right">
                <input className="input" type="number" value='1' />
                <button className="btn btn-info text-white">REMOVE</button>
                </div>
                </>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
