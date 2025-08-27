import React from "react"
import { Route, Routes } from "react-router-dom";
import HeaderClient from "../component/HeaderClient";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";
import SignIn from "../Pages/SignIn";
import CreateNewAccount from "../Pages/CreateAccount";

const ClientSide = ({products,dataIsGet,addToCart,cartProduct,increseProduct,decreseProduct,deleteItem}) => {
  return(
    <div>
        <HeaderClient cartProduct={cartProduct}/>
        <Routes>
            <Route path="/*" element={<Home />}/>
            <Route path="/shop" element={<Shop products={products} dataIsGet={dataIsGet} addToCart={addToCart} deleteItem={deleteItem}/>}/>
            <Route path="/cart" element={<Cart cartProduct={cartProduct} increseProduct={increseProduct} decreseProduct={decreseProduct} deleteItem={deleteItem}/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/createnewaccount" element={<CreateNewAccount/>}/>
        </Routes>
    </div>
  )
}

export default ClientSide