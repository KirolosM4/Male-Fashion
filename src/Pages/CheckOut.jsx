import React, { useContext, useEffect } from "react"
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Store from "../Context/Store";

const CheckOut = () => {
    // start context stroe 
    const {loggUser} = useContext(Store);
    const {getCartTotal} = useContext(Store);
    // end context store 

    return(
        <div className="container mx-auto py-7">
           <p className="text-4xl text-center text-[#0e7490] pt-5">Checkout</p>
            <div className="flex flex-col items-center md:flex-row my-5 relative">
                <form className="w-[80%] flex flex-col md:w-[50%]">
                    <div className="mb-1 flex flex-col gap-11">
                        <Input label="Email" disabled="true" value={loggUser.email} />
                        <Input label="Card Number" readOnly="true" value="**** **** **** **** ****" />
                        <Input label="Expiry Date" readOnly="true" value="****" />
                    </div>
                    <Button className="mt-6 w-fit self-center">
                        Proceed To Pay
                    </Button>
                </form>
                 <div className="w-[80%] my-7 md:w-[50%]">
                        <div className="w-full h-fit bg-[#0e7490] p-5 flex flex-col gap-3 justify-between rounded text-white text-xl md:absolute top-0 md:right-[10%] md:w-[30%]">
                        <p className="flex justify-between"><span>Total Price</span><span className="text-3xl">{getCartTotal()}</span></p>
                        <p className="flex justify-between"><span>Taxas</span><span className="text-3xl">{(getCartTotal() * 0.15).toFixed(2)}</span></p>
                        <p className="flex justify-between"><span>Promo Code</span><span className="block bg-white w-1/3 rounded"></span></p>
                        <p className="flex justify-between"><span>Total Amount </span><span className="text-3xl">{Math.round(getCartTotal() + getCartTotal() * 0.15)}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut;



        // <div className="container mx-auto flex flex-col items-center  md:flex-row mb-7">
        //     <div className="w-screen flex flex-col items-center md:w-[70%]">
            
        //     </div>
        //     <div className="w-[70%] my-7 md:w-[30%]">
        //         <div className="w-full h-[25%] bg-gray-300 p-5 flex flex-col justify-between text-2xl static md:fixed md:top-[20%] md:w-[20%] lg:h-[20%]">
        //             <p>CART TOTAL</p>
        //             <p className="flex items-center justify-between">{getCartTotal() ? getCartTotal() : "$ 0"}<CiCreditCard1 /></p>
        //         </div>
        //     </div>
        // </div>