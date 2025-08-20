import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ClientSide from "./Sides/ClientSide";
import AdminSide from "./Sides/AdminSide";
import Footer from "./component/Footer";
import axios from "axios";
const App = () => {
    const [products,setProducts] = useState([]);
    const [dataIsGet,setDataIsGet] = useState(false);
    const [cartProduct,setCartProduct] = useState([]);

    const getAllProducts = () => {
        axios({
            method : "get",
            url : "https://68a39589c123272fb9affd0c.mockapi.io/shop/products",
        }).then((res)=>{
            setProducts(res.data);
            setDataIsGet(true);
        })

    }

    const addToCart = (id) => {
        const addPro = products.find((product)=>{
          return product.id == id;
        })

        if(!testFindInCart(id)){
          addPro.count = 1;
          setCartProduct([...cartProduct,addPro]);
        } else {
          
          const newCountPro = cartProduct.map((product)=>{
            if(product.id == id){
              product.count += 1;
            }
            return product;
          })
          setCartProduct(newCountPro);
        }
        
    }

    const testFindInCart = (id) => {
        const test = cartProduct.find((product)=>{
          return product.id == id
        })

        return test;
    }

    useEffect(()=>{
        getAllProducts()
    },[])

  return(
    <div>
      <Routes>
          <Route path="/*" element={<ClientSide products={products} dataIsGet={dataIsGet} addToCart={addToCart} cartProduct={cartProduct}/>}/>
          <Route path="/admin" element={<AdminSide/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;