import React, { useContext, useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import './Store.css'
import Footer from "./Footer";
import Cart from "./Cart";
import { createContext } from "react";
import AuthContext from "../auth-context";


export const Context = createContext();

const Store = () => {

  const authCtx = useContext(AuthContext);
  const [isCartShow, setIsCartShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isAuthContextLoaded, setIsAuthContextLoaded] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      const storedCartItems = await localStorage.getItem(authCtx.email);
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
      setIsAuthContextLoaded(true);
    };

    if (authCtx.email) {
      fetchCartItems();
    }
  }, [authCtx.email]);

  useEffect(() => {
    const updateLocalStorage = async () => {
      await localStorage.setItem(authCtx.email, JSON.stringify(cartItems));
    };

    if (authCtx.email && isAuthContextLoaded) {
      updateLocalStorage();
    }
  }, [authCtx.email, cartItems, isAuthContextLoaded]);

  const cartHandler = () => {
    setIsCartShow((prevIsCartShow) => !prevIsCartShow);
  };

  const onPurchase = () => {
    alert("Thanks for purchasing! Visit again!!");
    setCartItems([]);
    setIsCartShow(false);
  };

  const removeFromCart = (item) => {
    const filteredItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(filteredItems);
  };

  const addToCartHandler = (item) => {
    const existItem = cartItems.some((cartItem) => cartItem.id === item.id);

    if (existItem) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  console.log(cartItems);

console.log(cartItems)
  const  productsArr = [
    {
      id:1,
      title: "Colors",
      price: 100,
      quantity:1,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id:2,
      title: "Black and white Colors",
      price: 50,
      quantity:1,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id:3,
      title: "Yellow and Black Colors",
      price: 70,
      quantity:1,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id:4,
      title: "Blue Color",
      price: 100,
      quantity:1,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  
 
  return (
    <Context.Provider value={[cartItems,onPurchase,removeFromCart]}>
    <div className="" >
     {isCartShow && <Cart />}
      <Navbar />
      <Header />
      <div id="card-btn">
        <button className="btn text-white " onClick={cartHandler}>Cart({cartItems.length})</button>
      </div>

      <div className="shop-container">
                <h1 className="text-center">COLORS</h1>
                <div id="card-container">
                  {productsArr.map(product=>
                  
                 
                    <div id="card" className="card" >
                      <Link to={`/productDetails/${product.title}`} style={{textDecoration:'none',color:'black'}} >
                       <h5 className="text-center card-title p-2">{product.title}</h5>
                       
                       <img src={product.imageUrl} className="card-img-top" alt=" not found"/>
                       </Link>
                       <div className=" card-footer d-flex justify-content-between" >
                         <p className=" card-text pt-1">Price:${product.price}</p>
                         <button className="btn btn-success" onClick={()=>{addToCartHandler(product)}}>Add to cart</button>
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
    </Context.Provider>
  );
};



export default Store;
