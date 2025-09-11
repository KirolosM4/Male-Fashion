import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import BoardAdmin from "../component/BoardAdmin";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Store from "../Context/Store";
const ViewProduct = () => {
    // start context 
    const {products} = useContext(Store)
    // end context 
    // start param 
    const {productId} = useParams();
    // end param 
    const [product,setProduct] = useState({});
    const getProduct = () => {
        const proSelect = products.find((product)=>{
            return product.id == productId;
        })
        setProduct(proSelect);
    }
    useEffect(()=>{
        getProduct();
    },[])
    return(
        <div className="flex flex-col justify-evenly px-5 h-[70vh] md:grid md:grid-cols-12 md:grid-rows-12 md:h-screen md:gap-7 md:px-0">
            <BoardAdmin/>
            <Card className="col-start-5 col-span-5 row-start-2 row-span-10 bg-[#475569] p-2 text-xl flex flex-col items-center justify-center">
                <CardHeader floated={false} color="blue-gray" className="w-1/3 rounded-full">
                    <img
                    src={product.image}
                    />
                </CardHeader>
                <CardBody className="text-white text-center">
                    <p>Title : {product.title}</p>
                    <p>Price :{product.price}</p>
                    <p>category : {product.category}</p>
                    <p>Count : {product?.rating?.count}</p>
                    <p>Rate : {product?.rating?.rate}</p>
                </CardBody>
                <CardFooter className="p-3 w-fit">
                    <Button color="green">
                        <Link to="/admin/products">Back To Products</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ViewProduct;