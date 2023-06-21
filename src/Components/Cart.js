import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useContext } from "react";
import { Context } from "./Store";
import AuthContext from "../auth-context";

const Cart = () => {
  const [cartItems, onPurchase, removeFromCart] = useContext(Context);
  const authCtx = useContext(AuthContext);
  const email = authCtx.email;
  const [localStorageItems, setLocalStorageItems] = useState([]);

  console.log(authCtx)

  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const storedCartItems = await getCartItemsFromLocalStorage();
        setLocalStorageItems(storedCartItems);
      } catch (error) {
        console.error("Error loading cart items:", error);
      }
    };

    loadCartItems();
  }, []);

  useEffect(() => {
    const updateCartItems = async () => {
      try {
        await saveCartItemsToLocalStorage();
        setLocalStorageItems(cartItems);
      } catch (error) {
        console.error("Error updating cart items:", error);
      }
    };

    updateCartItems();
  }, [cartItems]);

  const getCartItemsFromLocalStorage = async () => {
    try {
      const storedItems = await localStorage.getItem(email);
      return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
      console.error("Error retrieving cart items from localStorage:", error);
      return [];
    }
  };

  const saveCartItemsToLocalStorage = async () => {
    try {
      await localStorage.setItem(email, JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error saving cart items to localStorage:", error);
    }
  };

  
  return (
    
    <div className="" id="cart">
      <h1 className="text-center">CART</h1>
      {localStorageItems.length>0 ? (<div className="card ">
        <div className="sideHeadings">
          <h4 className="sideHeading">ITEMS</h4>
          <h4 className="sideHeading">PRICE</h4>
          <h4 className="sideHeading">QUANTITY</h4>
        </div>
        <div className="cartItems">
          <div>
          {localStorageItems.map((product) => (
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
          {localStorageItems.map(product=>
            <p>${product.price}</p>
            )}
            </div>
            <div className="">
              {cartItems.map(product=>
                <>
                <div className="right">
                <input className="input" type="number" disabled value={product.quantity} />
                <button className="btn btn-info text-white" onClick={()=>{removeFromCart(product)}}>REMOVE</button>
                </div>
                </>
                )}
            </div>
        </div>
        <div className="d-flex justify-content-center">
        <button className="btn btn-danger text-white text-center mt-3" style={{width:'200px'}} onClick={onPurchase} >PURCHASE</button>
        </div>
      </div>):(
        <p className="d-flex justify-content-center align-items-center">No items added in the cart</p>
      )}
      
    </div>
  );
};

export default Cart;
