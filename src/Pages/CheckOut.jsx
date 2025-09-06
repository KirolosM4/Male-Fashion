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
                    <Button className="mt-6 w-fit self-center" disabled="true">
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