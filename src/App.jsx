import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ClientSide from "./Sides/ClientSide";
import AdminSide from "./Sides/AdminSide";
import Footer from "./component/Footer";
import axios from "axios";
import Store from "./Context/Store";
const App = () => {
    const [products,setProducts] = useState([]);
    const [dataIsGet,setDataIsGet] = useState(false);
    const [cartProduct,setCartProduct] = useState([]);
    const [users,setUsers] = useState([]);
    const [logged,setLogged] = useState(false);
    const [loggUser,setLoggUser] = useState({});
    const [errDataUser,setErrDataUser] = useState(false);
    const [errDataPro,setErrDataPro] = useState(false);

// start functions product 
    // get all product 
    const getAllProducts = () => {
        axios({
            method : "get",
            url : `${import.meta.env.VITE_API_PRO}`,
        }).then((res)=>{
            setProducts(res.data);
            setDataIsGet(true);
            setErrDataPro(false);
        }).catch(()=>{
          setErrDataPro(true);
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
    // start get cart total 
    const getCartTotal = () => {
        const totalPrice = cartProduct.reduce((totalP,product)=>{
            return totalP + (product.price * product.count)
        },0)
        return parseFloat(totalPrice.toFixed(2));
    }

// end get cart total 
// end functions product 
// start functions users 
    const getAllUsers = () => {
      axios({
          method:"get",
          url:`${import.meta.env.VITE_API_USERS}`,
        }).then((res)=>{
          setUsers(res.data);
          setErrDataUser(false);
        }).catch(()=>{
          setErrDataUser(true);
        })
    }

// end functions users 

    useEffect(()=>{
        getAllProducts()
        getAllUsers()
    },[])
    
    useEffect(()=>{
        getCartTotal();
    },[cartProduct])

  return(
    <Store.Provider value={{products,dataIsGet,cartProduct,users,logged,loggUser,errDataUser,errDataPro,setProducts,setDataIsGet,setCartProduct,setUsers,setLogged,setLoggUser,getCartTotal,getAllProducts,addToCart,increseProduct,decreseProduct,deleteItem,getAllUsers,setErrDataUser,setErrDataPro}}>
      <Routes>
          <Route path="/*" element={<ClientSide />}/>
          <Route path="/admin" element={<AdminSide/>}/>
      </Routes>
      <Footer/>
    </Store.Provider> 
  )
}

export default App;