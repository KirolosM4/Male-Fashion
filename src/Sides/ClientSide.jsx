import React from "react"
import { Route, Routes } from "react-router-dom";
import HeaderClient from "../component/HeaderClient";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";

const ClientSide = ({products,dataIsGet,addToCart,cartProduct}) => {
  return(
    <div>
        <HeaderClient cartProduct={cartProduct}/>
        <Routes>
            <Route path="/*" element={<Home/>}/>
            <Route path="/shop" element={<Shop products={products} dataIsGet={dataIsGet} addToCart={addToCart}/>}/>
            <Route path="/cart" element={<Cart cartProduct={cartProduct}/>}/>
        </Routes>
    </div>
  )
}

export default ClientSide