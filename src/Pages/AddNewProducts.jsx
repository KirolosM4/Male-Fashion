import React, {useContext, useState } from "react";
import {
  Card,
  Input,
  Button,
  Select, 
  Option,
} from "@material-tailwind/react";
import Swal from 'sweetalert2'
import axios from "axios";
import {useNavigate } from "react-router-dom";
import Store from "../Context/Store";
import BoardAdmin from "../component/BoardAdmin";
const AddNewProduct = () => {
    // start state 
    const [dataProduct,setDataProduct] = useState({
        title:"",
        price:"",
        description:"",
        image:"",
        category:"men's clothing",
        rating:{
            rate:"",
            count:"",
        }
    });
    const [errForm,setErrForm] = useState({});
    const [loading,setLoading] = useState(false);
    // end state 
    // start context store 
    const {getAllProducts} = useContext(Store);
    // end context store 
    // start var 
    const navigate = useNavigate();
    const newErr = {}
    // end var 
    // validate form 
    const handlForm = (e) => {
        e.preventDefault();
        if(dataProduct.title == "") newErr.title = true;
        if(dataProduct.price == "" || isNaN(dataProduct.price)) newErr.price = true;
        if(dataProduct.description == "") newErr.description = true
        if(dataProduct.image == "" || !dataProduct.image.startsWith("https://")) newErr.image = true
        if(dataProduct.category == "") newErr.category = true
        if(dataProduct.rating.rate == "" || isNaN(dataProduct.rating.rate)) newErr.rate = true
        if(dataProduct.rating.count == "" || isNaN(dataProduct.rating.count))  newErr.count = true
        setErrForm(newErr);
        if(Object.keys(newErr).length == 0) {
            createProduct();
        }
    }
    
    // create product for create new 
    const createProduct = () => {
            setLoading(true);
            setTimeout(()=>{
                    axios({
                        method:"post",
                        url:`${import.meta.env.VITE_API_PRO}`,
                        data:dataProduct
                    }).then(()=>{
                        getAllProducts();
                        Swal.fire({
                            title: "Done",
                            icon: "success",
                            draggable: true
                        });
                        setLoading(false);
                        navigate("/admin/products")
                    }).catch(()=>{
                        Swal.fire({
                            title: "something error",
                            icon: "error",
                            draggable: true
                        });
                        setLoading(false);
                    })
            },3000)

    }
    return(
        <div className="flex flex-col justify-evenly px-5 md:grid md:grid-cols-12 md:grid-rows-12 md:max-h-fit md:gap-7 md:px-0">
            <BoardAdmin/>
                <Card color="transparent" className="py-3 px-3 shadow-2xl text-center col-start-5 col-span-6 row-start-2 row-span-9 bg-[#475569] text-white my-4" shadow={false}>
                <form onSubmit={(e)=>handlForm(e)} className="mt-8 mb-2 w-full flex flex-col gap-7">
                    <div className="flex gap-7 flex-col md:flex-row">
                        <Input name="title" label="Title" className="bg-white" value={dataProduct.title} onChange={(e)=>setDataProduct({...dataProduct,[e.target.name]:e.target.value})} error={errForm.title} />
                        <Input name="price" label="Price" className="bg-white" value={dataProduct.price} onChange={(e)=>setDataProduct({...dataProduct,[e.target.name]:e.target.value})} error={errForm.price} />
                    </div>
                    <Input name="description" label="Description" className="bg-white" value={dataProduct.description} onChange={(e)=>setDataProduct({...dataProduct,[e.target.name]:e.target.value})} error={errForm.description} />
                    <div className="flex flex-col gap-2 text-left text-yellow-500">
                        <Input name="image" label="image" className="bg-white" value={dataProduct.image} onChange={(e)=>setDataProduct({...dataProduct,[e.target.name]:e.target.value})} error={errForm.image} />
                        <p>Image Shall Be Like : https://image.png</p>
                    </div>
                    <Select value={dataProduct.category} label="Category" onChange={(e)=>setDataProduct({...dataProduct,"category":e})} error={errForm.category} className="bg-white" >
                        <Option value="men's clothing">men's clothing</Option>
                        <Option value="jewelery">jewelery</Option>
                        <Option value="electronics">electronics</Option>
                        <Option value="women's clothing">women's clothing</Option>
                    </Select>   
                    <div className="flex gap-7 flex-col md:flex-row">
                        <Input name="rate" type="number" value={dataProduct.rating.rate} label="Rate" className="bg-white" onChange={(e)=>setDataProduct({...dataProduct,rating:{...dataProduct.rating,rate:e.target.value}})} error={errForm.rate} />                 
                        <Input name="count" type="number" value={dataProduct.rating.count} label="Count" className="bg-white" onChange={(e)=>setDataProduct({...dataProduct,rating:{...dataProduct.rating,count:e.target.value}})} error={errForm.count} />                 
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
