import React from "react"
import { Route, Routes } from "react-router-dom";
import HeaderAdmin from "../component/HeaderAdmin";
import DashBoard from "../Pages/DashBoard";
import AllUsers from "../Pages/AllUsers";
import AddNewUser from "../Pages/AddNewUser";
import AllProducts from "../Pages/AllProducts";
import AddNewProduct from "../Pages/AddNewProducts";
import ViewUser from "../Pages/ViewUser";
import ViewProduct from "../Pages/ViewProduct";
import EditUser from "../Pages/EditeUser";
import EditProduct from "../Pages/EditProduct";
const AdminSide = () => {
  return(
      <div>
          <HeaderAdmin/>
          <Routes>
            <Route path="/*" element={<DashBoard/>}/>
            <Route path="/users" element={<AllUsers/>}/>
            <Route path="/users/addnewuser" element={<AddNewUser/>}/>
            <Route path="/products" element={<AllProducts/>}/>
            <Route path="/products/addnewproduct" element={<AddNewProduct/>}/>
            <Route path="/users/viewuser/:userId" element={<ViewUser/>}/>
            <Route path="/products/viewproduct/:productId" element={<ViewProduct/>}/>
            <Route path="/users/edituser/:userId" element={<EditUser/>}/>
            <Route path="/products/editproduct/:productId" element={<EditProduct/>}/>
          </Routes>
      </div>
  )
}

export default AdminSide;