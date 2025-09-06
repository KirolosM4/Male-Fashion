import React from "react"
import { Route, Routes } from "react-router-dom";
import HeaderClient from "../component/HeaderClient";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";
import SignIn from "../Pages/SignIn";
import CreateNewAccount from "../Pages/CreateAccount";
import PageNotFound from "../Pages/PageNotFound";
import CheckOut from "../Pages/CheckOut";
import Profile from "../Pages/Profile";
import EditProfile from "../Pages/EditProfile";

const ClientSide = () => {
  return(
    <div>
        <HeaderClient/>
        <Routes>
            <Route path="/*" element={<Home />}/>
            <Route path="/shop" element={<Shop/> }/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/createnewaccount" element={<CreateNewAccount />}/>
            <Route path="/checkout" element={<CheckOut />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/profile/editprofile" element={<EditProfile />}/>
            <Route path="/pagenotfound" element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

export default ClientSide