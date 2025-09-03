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
    const [users,setUsers] = useState([]);
    const [logged,setLogged] = useState(false);
    const [loggUser,setLoggUser] = useState({});
// start functions product 
    // get all product 
    const getAllProducts = () => {
        axios({
            method : "get",
            url : "https://68a39589c123272fb9affd0c.mockapi.io/shop/products",
        }).then((res)=>{
            setProducts(res.data);
            setDataIsGet(true);
        })

    }

    // add product to cart 
    const addToCart = (id) => {
        const addPro = products.find((product)=>{
          return product.id == id;
        })
        // test product find in cart 
        if(!testFindInCart(id)){
          addPro.count = 1;
          setCartProduct([...cartProduct,addPro]);
        } else {
          // if the products find in cart increse the count of product 
          increseProduct(id)
        }
        
    }
    
    // increse product in cart 
    const increseProduct = (id) => {
          const newCountPro = cartProduct.map((product)=>{
            if(product.id == id){
              product.count += 1;
            }
            return product;
          })
          setCartProduct(newCountPro);
    }

    // decrese product in cart 
    const decreseProduct = (id) => {
          const newCountPro = cartProduct.map((product)=>{
            if(product.id == id){
              product.count -= 1
            }
            return product;
          })
          setCartProduct(newCountPro);
    }
    
    // delete product from cart 
    const deleteItem = (id) => {
      const newP = cartProduct.filter((product)=>{
        return product.id != id
      })
      setCartProduct(newP)
    }
    // test find product in cart 
    const testFindInCart = (id) => {
        const test = cartProduct.find((product)=>{
          return product.id == id
        })

        return test;
    }
// end functions product 
// start functions users 
    const getAllUsers = () => {
      axios({
          method:"get",
          url:"https://68a39589c123272fb9affd0c.mockapi.io/shop/users",
        }).then((res)=>{
          setUsers(res.data);
        })
    }

// end functions users 
    useEffect(()=>{
        getAllProducts()
        getAllUsers()
    },[])

  return(
    <div>
      <Routes>
          <Route path="/*" element={<ClientSide products={products} dataIsGet={dataIsGet} addToCart={addToCart} cartProduct={cartProduct} increseProduct={increseProduct} decreseProduct={decreseProduct} deleteItem={deleteItem} users={users} logged={logged} setLogged={setLogged} loggUser={loggUser} setLoggUser={setLoggUser}/>}/>
          <Route path="/admin" element={<AdminSide/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;