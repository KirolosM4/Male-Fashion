import React from "react"
import { Route, Routes } from "react-router-dom";
import HeaderClient from "../component/HeaderClient";
import Home from "../Pages/Home";
const ClientSide = () => {
  return(
    <div>
        <HeaderClient/>
        <Routes>
            <Route path="/*" element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default ClientSide