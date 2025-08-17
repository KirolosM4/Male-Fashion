import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import axios from "axios"
import { FaStar } from "react-icons/fa6";

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [dataIsget,setDataIsGet] = useState(false);
    const getAllProducts = () => {
        axios({
            method : "get",
            url : "http://localhost:3000/products"
        }).then((res)=>{
            setProducts(res.data);
            setDataIsGet(true);
        })

    }

    useEffect(()=>{
        getAllProducts()
        console.log(products)
    },[])

    return(
        <div className={`container mx-auto g my-7 grid  ${dataIsget ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" : "h-screen grid-cols-1 justify-items-center items-center w-screen"}`}>
            {

                dataIsget
                ?
                products.map(({image,title,rating,price,id})=>(
                    <Card key={id}>
                        <CardHeader floated={false} className="h-80 flex justify-center items-center">
                            <img src={image} alt="profile-picture" className="w-1/2" />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h4" color="blue-gray" className="mb-2 text-xl">
                                {title.slice(0,title.lastIndexOf (" "))}
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                                {Array.from(Array(Math.floor(rating.rate)), (e, i) => {
                                    return <FaStar className="inline text-yellow-500" key={i} />
                                })}
                                {Array.from(Array(Math.floor(5 - Math.floor(rating.rate))) ,(e ,i)=>{
                                    return <FaStar className="inline text-gray-500" key={i} />
                                })}
                            </Typography>
                        </CardBody>
                        <CardFooter className="px-6 py-1">
                            <Typography color="blue-gray" className="font-medium" textGradient>
                                {price} $
                            </Typography>
                        </CardFooter>
                    </Card>
                ))
                :
                <div className="loader"></div>

            }
        </div>
    )
}

export default Shop;
