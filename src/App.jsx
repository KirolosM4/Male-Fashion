import React from "react"
import { Route, Routes } from "react-router-dom";
import ClientSide from "./Sides/ClientSide";
import AdminSide from "./Sides/AdminSide";
import Footer from "./component/Footer";
const App = () => {
  return(
    <div>
      <Routes>
          <Route path="/*" element={<ClientSide/>}/>
          <Route path="/admin" element={<AdminSide/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;