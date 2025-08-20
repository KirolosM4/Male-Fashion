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
import { BsFillCartDashFill } from "react-icons/bs";

const Shop = ({products,dataIsGet,addToCart}) => {
    const [hover,setHover] = useState("");
    return(
        <div className={`container mx-auto g my-7 grid  ${dataIsGet ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" : "h-screen grid-cols-1 justify-items-center items-center w-screen"}`}>
            {

                dataIsGet
                ?
                products.map(({image,title,rating,price,id})=>(
                    <Card key={id} className={`text-center md:text-left transition ease-in-out duration-700  ${hover == id && "shadow-2xl"}`} onMouseOver={()=>setHover(id)} onMouseLeave={()=>setHover("")}>
                        <CardHeader floated={false} className="h-80 flex justify-center items-center">
                            <img src={image} alt="profile-picture" className="w-1/2" />
                        </CardHeader>
                        <CardBody className="px-6 py-0">
                            <Typography variant="h4" color="blue-gray" className="mb-2 text-xl cursor-pointer">
                                <div className={`flex justify-between relative z-20 text-green-700 transition ease-in-out duration-700 translate-y-[-50%] opacity-0 ${hover == id && "translate-y-[90%] opacity-100"}`}>
                                    <button className="cursor-pointer" onClick={()=>addToCart(id)}> + add product</button>
                                    <BsFillCartDashFill color="red" className="cursor-pointer" />
                                </div>
                                <p className={`transition ease-in-out duration-700 relative z-10 ${hover == id && "opacity-0 text-green-500"}`}>{title.slice(0,title.lastIndexOf (" "))}</p>
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


                                    // (id == hover) 
                                    // ?
                                    // <div className="flex justify-between">
                                    //     <p className="cursor-pointer text-green-500">add product</p>
                                    //     <BsFillCartDashFill color="red" className="cursor-pointer" />
                                    // </div>
                                    // : 
