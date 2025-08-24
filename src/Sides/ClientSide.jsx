import React from "react"
import { Route, Routes } from "react-router-dom";
import HeaderClient from "../component/HeaderClient";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";

const ClientSide = ({products,dataIsGet,addToCart,cartProduct,increseProduct,decreseProduct,deleteItem}) => {
  return(
    <div>
        <HeaderClient cartProduct={cartProduct}/>
        <Routes>
            <Route path="/*" element={<Home />}/>
            <Route path="/shop" element={<Shop products={products} dataIsGet={dataIsGet} addToCart={addToCart} deleteItem={deleteItem}/>}/>
            <Route path="/cart" element={<Cart cartProduct={cartProduct} increseProduct={increseProduct} decreseProduct={decreseProduct} deleteItem={deleteItem}/>}/>
        </Routes>
    </div>
  )
}

export default ClientSide