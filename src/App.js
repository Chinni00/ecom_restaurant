
import "./App.css";


import Home from "./Components/Home";
import About from "./Components/About";
import Store from "./Components/Store";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import ProductDetail from "./Components/ProductDetail";
import Login from "./Components/Login";
import AuthContext from "./auth-context";
import { useContext } from "react";


function App() {
 const authCtx = useContext(AuthContext)
  return (
   <Routes>
    <Route path="/" element={ <Home /> }/>
    <Route path="/about"  element={<About />} />
   <Route path={authCtx.isLogedIn ? '/store': '/'}  element={<Store />} />
    <Route path="/productDetails/:productName"  element={<ProductDetail />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<p>Page not found</p>}/>
   </Routes>
  );
}

export default App;
