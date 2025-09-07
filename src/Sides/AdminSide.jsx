import React from "react"
import { Route, Routes } from "react-router-dom";
import HeaderAdmin from "../component/HeaderAdmin";
import DashBoard from "../Pages/DashBoard";
const AdminSide = () => {
  return(
      <div>
          <HeaderAdmin/>
          <Routes>
            <Route path="/" element={<DashBoard/>}/>
          </Routes>
      </div>
  )
}

export default AdminSide;