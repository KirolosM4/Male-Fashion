import React from "react"
import { Route, Routes } from "react-router-dom";
import HeaderClient from "../component/HeaderClient";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
const ClientSide = () => {
  return(
    <div>
        <HeaderClient/>
        <Routes>
            <Route path="/*" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
        </Routes>
    </div>
  )
}

export default ClientSide