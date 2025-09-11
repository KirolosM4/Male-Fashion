import React, {useContext, useState } from "react";
import {
  Card,
  Input,
  Button,
  Select, 
  Option
} from "@material-tailwind/react";
import Swal from 'sweetalert2'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Store from "../Context/Store";
import BoardAdmin from "../component/BoardAdmin";
const AddNewProduct = () => {
    // start state 
    const [title,setTitle] = useState("");
    const [stateTitle,setStateTitle] = useState(false);
    const [price,setPrice] = useState(0);
    const [statePrice,setStatePrice] = useState(false);
    const [description,setDescription] = useState("");
    const [statedescription,setStateDescription] = useState(false);
    const [category,setCategory] = useState("men's clothing");
    const [image,setImage] = useState("");
    const [stateImage,setStateImage] = useState(false);
    const [rate,setRate] = useState("");
    const [stateRate,setStateRate] = useState(false);
    const [count,setCount] = useState("");
    const [stateCount,setStateCount] = useState(false);
    const [loading,setLoading] = useState(false);
    // end state 
    // start context store 
    const {getAllProducts} = useContext(Store);
    // end context store 
    // start var 
    const navigate = useNavigate();
    // end var 
    const handlForm = (e) => {
        e.preventDefault();
        if(title == ""){
            setStateTitle(true);
        } else if(price == "") {
            setStateTitle(false);
            setStatePrice(true);
        } else if(description == "") {
            setStatePrice(false);
            setStateDescription(true);
        } else if(rate == " " || rate < 0 || rate > 5){
            setStateDescription(false);
            setStateRate(true);
        } else if(count == " ") {
            setStateRate(false);
            setStateCount(true);
        }  else {
            setStateCount(false);
            createProduct();
        }
    }

    const createProduct = () => {
        const data = {title,price,description,image,category,"rating" : {rate,count}};
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
                axios({
                    method:"post",
                    url:`${import.meta.env.VITE_API_PRO}`,
                    data:data
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
                        <Input label="Title" className="bg-white" onChange={(e)=>setTitle(e.target.value)} error={stateTitle} />
                        <Input label="Price" className="bg-white" onChange={(e)=>setPrice(e.target.value)} error={statePrice} />
                    </div>
                    <Input label="Description" className="bg-white" onChange={(e)=>setDescription(e.target.value)} error={statedescription} />
                    <div className="flex flex-col gap-2 text-left text-yellow-500">
                        <Input label="image" className="bg-white" onChange={(e)=>setImage(e.target.value)} error={stateImage} />
                        <p>Image Shall Be Like : https://image.png</p>
                    </div>
                    <Select value={category} label="Category" onChange={(e)=>setCategory(e)} className="bg-white">
                        <Option value="men's clothing">men's clothing</Option>
                        <Option value="jewelery">jewelery</Option>
                        <Option value="electronics">electronics</Option>
                        <Option value="women's clothing">women's clothing</Option>
                    </Select>   
                    <div className="flex gap-7 flex-col md:flex-row">
                        <Input type="number" label="Rate" className="bg-white" onChange={(e)=>setRate(e.target.value)} error={stateRate} />                 
                        <Input type="number" label="Count" className="bg-white" onChange={(e)=>setCount(e.target.value)} error={stateCount} />                 
                    </div>
                    <Button color="green" loading={loading} type="submit" className="mt-2 flex justify-center" >
                        Add Product
                    </Button>
                </form>
            </Card>
        </div>
    )
}


export default AddNewProduct ;
