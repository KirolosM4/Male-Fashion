import React from "react"
import { Route, Routes } from "react-router-dom";
import HeaderAdmin from "../component/HeaderAdmin";
import DashBoard from "../Pages/DashBoard";
import AllUsers from "../Pages/AllUsers";
import AddNewUser from "../Pages/AddNewUser";
const AdminSide = () => {
  return(
      <div>
          <HeaderAdmin/>
          <Routes>
            <Route path="/*" element={<DashBoard/>}/>
            <Route path="/users" element={<AllUsers/>}/>
            <Route path="/users/addnewuser" element={<AddNewUser/>}/>
          </Routes>
      </div>
  )
}

export default AdminSide;