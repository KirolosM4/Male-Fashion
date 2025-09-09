import React from "react"
import { Route, Routes } from "react-router-dom";
import HeaderAdmin from "../component/HeaderAdmin";
import DashBoard from "../Pages/DashBoard";
import AllUsers from "../Pages/AllUsers";
const AdminSide = () => {
  return(
      <div>
          <HeaderAdmin/>
          <Routes>
            <Route path="/*" element={<DashBoard/>}/>
            <Route path="/users" element={<AllUsers/>}/>
          </Routes>
      </div>
  )
}

export default AdminSide;