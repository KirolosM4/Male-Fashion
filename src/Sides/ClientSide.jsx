import React from "react"
import { Route, Routes } from "react-router-dom";
import HeaderClient from "../component/HeaderClient";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";
import SignIn from "../Pages/SignIn";
import CreateNewAccount from "../Pages/CreateAccount";

const ClientSide = ({products,dataIsGet,addToCart,cartProduct,increseProduct,decreseProduct,deleteItem,users,logged,setLogged,loggUser,setLoggUser}) => {
  return(
    <div>
        <HeaderClient cartProduct={cartProduct} logged={logged} setLogged={setLogged} loggUser={loggUser}/>
        <Routes>
            <Route path="/*" element={<Home />}/>
            <Route path="/shop" element={<Shop products={products} dataIsGet={dataIsGet} addToCart={addToCart} deleteItem={deleteItem}/>}/>
            <Route path="/cart" element={<Cart cartProduct={cartProduct} increseProduct={increseProduct} decreseProduct={decreseProduct} deleteItem={deleteItem}/>}/>
            <Route path="/signin" element={<SignIn users={users} setLogged = {setLogged} setLoggUser={setLoggUser}/>}/>
            <Route path="/createnewaccount" element={<CreateNewAccount users={users}/>}/>
        </Routes>
    </div>
  )
}

export default ClientSide