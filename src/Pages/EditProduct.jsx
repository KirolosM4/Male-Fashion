import React, {useContext, useEffect, useState } from "react";
import {
  Card,
  Input,
  Button,
  Select, 
  Option
} from "@material-tailwind/react";
import Swal from 'sweetalert2'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Store from "../Context/Store";
import BoardAdmin from "../component/BoardAdmin";
const EditProduct = () => {
    // start state 
    const [stateTitle,setStateTitle] = useState(false);
    const [statePrice,setStatePrice] = useState(false);
    const [statedescription,setStateDescription] = useState(false);
    const [stateImage,setStateImage] = useState(false);
    const [stateRate,setStateRate] = useState(false);
    const [stateCount,setStateCount] = useState(false);
    const [loading,setLoading] = useState(false);
    const [product,setProduct] = useState({});
    // end state 
    // start context store 
    const {getAllProducts} = useContext(Store);
    const {products} = useContext(Store);
    // end context store 
    // start var 
    const navigate = useNavigate();
    // end var 
    // start param 
    const {productId} = useParams();
    // end param
    const getProduct = () => {
        const proSelect = products.find((product)=>{
            return product.id == productId;
        })
        setProduct(proSelect);
    }
    useEffect(()=>{
        getProduct();
    },[])

    const handlForm = (e) => {
        e.preventDefault();
        if(product.title == ""){
            setStateTitle(true);
        } else if(product.price == "") {
            setStateTitle(false);
            setStatePrice(true);
        } else if(product.description == "") {
            setStatePrice(false);
            setStateDescription(true);
        } else if(product.image.length == " " || !product.image.includes("https://")){
            setStateDescription(false);
            setStateImage(true);
        } else if(product.rate == " " || product.rate < 0 || product.rate > 5){
            setStateImage(false);
            setStateRate(true);
        } else if(product.count == " ") {
            setStateRate(false);
            setStateCount(true);
        }  else {
            setStateCount(false);
            editProduct();
        }
    }

    const editProduct = () => {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
                axios({
                    method:"put",
                    url:`${import.meta.env.VITE_API_PRO}/${productId}`,
                    data:product
                }).then(()=>{
                    getAllProducts();
                    Swal.fire({
                        title: "Done",
                        icon: "success",
                        draggable: true
                    });
                    navigate("/admin/products")
                }).catch(()=>{
                    Swal.fire({
                        title: "something error",
                        icon: "error",
                        draggable: true
                    });
                })
        },3000)
    }
    return(
        <div className="flex flex-col justify-evenly px-5 md:grid md:grid-cols-12 md:grid-rows-12 md:h-screen md:gap-7 md:px-0">
            <BoardAdmin/>
            <Card color="transparent" className="py-3 px-7 shadow-2xl text-center col-start-5 col-span-6 row-start-2 row-span-9 bg-[#475569] text-white my-4" shadow={false}>
                <form onSubmit={(e)=>handlForm(e)} className="mt-8 mb-2 w-full flex flex-col gap-7">
                    <div className="flex gap-7 flex-col md:flex-row">
                        <Input value={product.title} label="Title" className="bg-white" onChange={(e)=>setProduct({...product,title:e.target.value})} error={stateTitle} />
                        <Input value={product.price} label="Price" className="bg-white" onChange={(e)=>setProduct({...product,price:e.target.value})} error={statePrice} />
                    </div>
                    <Input value={product.description} label="Description" className="bg-white" onChange={(e)=>setProduct({...product,description:e.target.value})} error={statedescription} />
                    <div className="flex flex-col gap-2 text-left text-yellow-500">
                        <Input value={product.image} label="image" className="bg-white" onChange={(e)=>setProduct({...product,image:e.target.value})} error={stateImage} />
                        <p>Image Shall Be Like : https://image.png</p>
                    </div>
                    <Select value={product.category} label="Category" onChange={(e)=>setProduct({...product,category:e})} className="bg-white">
                        <Option value="men's clothing">men's clothing</Option>
                        <Option value="jewelery">jewelery</Option>
                        <Option value="electronics">electronics</Option>
                        <Option value="women's clothing">women's clothing</Option>
                    </Select>   
                    <div className="flex gap-7 flex-col md:flex-row">
                        <Input value={product?.rating?.rate} type="number" label="Rate" className="bg-white" onChange={(e)=>setProduct({...product,rate:e.target.value})} error={stateRate} />                 
                        <Input value={product?.rating?.rate} type="number" label="Count" className="bg-white" onChange={(e)=>setProduct({...product,count:e.target.value})} error={stateCount} />                 
                    </div>
                    <Button color="green" loading={loading} type="submit" className="mt-2 flex justify-center" >
                        Edit Product
                    </Button>
                </form>
            </Card>
        </div>
    )
}


export default EditProduct ;
