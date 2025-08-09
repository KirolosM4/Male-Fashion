import React from "react"
import { Route, Routes } from "react-router-dom";
import ClientSide from "./Sides/ClientSide";
import AdminSide from "./Sides/AdminSide";
const App = () => {
  return(
    <Routes>
      <Route path="/*" element={<ClientSide/>}/>
      <Route path="/admin" element={<AdminSide/>}/>
    </Routes>
  )
}

export default App;