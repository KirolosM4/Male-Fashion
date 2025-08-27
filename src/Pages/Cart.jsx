import React, { useEffect } from "react"
import cartImg from "../../public/empty-shopping.jpg"
import { Button } from "@material-tailwind/react"
import { BsCart4 } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";

const Cart = ({cartProduct,increseProduct,decreseProduct,deleteItem}) => {
    const getCartTotal = () => {
        const totalPrice = cartProduct.reduce((totalP,product)=>{
            return totalP + (product.price * product.count)
        },0)
        return totalPrice.toFixed(2);
    }
    
    useEffect(()=>{
        getCartTotal();
        console.log(getCartTotal())
    },[cartProduct])
    return(
        <div className="flex flex-col items-center  md:flex-row mb-7">
            <div className="w-screen flex flex-col items-center md:w-[70%]">
                {
                    cartProduct.length > 0
                    ?
                    <div>
                        {
                            cartProduct.map(({image,title,price,count,id})=>(
                                <div key={id} className="md:p-7  px-1 py-7 m-3 border-b-2 border-gray-500 flex flex-col gap-7">
                                    <div className="flex text-center items-center md:justify-between ">
                                        <img src={image} alt="" className="w-[15%]" />
                                            <p className="text-sm md:text-xl">{title}</p>
                                        <p>{price}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <Button color="red" disabled={count < 2} onClick={()=>decreseProduct(id)}>Decrese</Button>
                                        <p>{count}</p>
                                        <Button color="green" onClick={()=>increseProduct(id)}>Increse</Button>
                                        <p>{(price*count).toFixed(2)}</p>
                                        <FaTrashCan className="cursor-pointer" onClick={()=>deleteItem(id)}/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <div className="flex flex-col items-center">
                        <img src={cartImg} alt="" className="w-1/2" />
                        <Button className="flex items-center gap-3 bg-green-700">
                            <Link to="/shop">Shop Now</Link>
                            <BsCart4 className="text-lg" />
                        </Button>
                    </div>
                }
            </div>
            <div className="w-[70%] my-7 md:w-[30%]">
                <div className="w-full h-[25%] bg-gray-300 p-5 flex flex-col justify-between text-2xl static md:fixed md:top-[20%] md:w-[20%] lg:h-[20%]">
                    <p>CART TOTAL</p>
                    <p className="flex items-center justify-between">{getCartTotal() ? getCartTotal() : "$ 0"}<CiCreditCard1 /></p>
                    <Button disabled={cartProduct.length < 1}>Check Out</Button>
                </div>
            </div>
        </div>
    )
}

export default Cart;