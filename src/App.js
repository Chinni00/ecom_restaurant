import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";

import Home from "./Components/Home";
import About from "./Components/About";
import Store from "./Components/Store";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
   <Routes>
    <Route path="/" element={ <Home /> }/>
    <Route path="/about"  element={<About />} />
    <Route path="/store"  element={<Store />} />
   </Routes>
  );
}

export default App;
