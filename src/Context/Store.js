import { createContext } from "react";

const Store = createContext({
    products:[],
    dataIsGet:false,
    cartProduct:[],
    users:[],
    logged:false,
    loggUser:{},
    errDataUser:false,
    errDataPro:false,
    setErrDataPro:()=>{},
    setErrDataUser:()=>{},
    setProducts:()=>{},
    setDataIsGet:()=>{},
    setCartProduct:()=>{},
    setUsers:()=>{},
    setLogged:()=>{},
    setLoggUser:()=>{},
    getCartTotal:()=>{},
    getAllProducts:()=>{},
    addToCart:()=>{},
    increseProduct:()=>{},
    decreseProduct:()=>{},
    deleteItem:()=>{},
    getAllUsers:()=>{},
    
})

export default Store;