import React from "react";
import footer_logo from "../../public/footer-logo.png"
import footer_pay from "../../public/payment.png"
import client_1 from "../../public/clients/client-1.png"
import client_2 from "../../public/clients/client-3.png"
import client_3 from "../../public/clients/client-4.png"
import client_4 from "../../public/clients/client-5.png"
import { Input } from "@material-tailwind/react";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
    return(
        <div className="bg-black text-white mt-5 h-fit flex items-center py-3 text-center md:text-left md:h-[50vh]">
            <div className="container mx-auto flex flex-col md:grid md:grid-cols-4 ">
                <div className="flex flex-col gap-7 items-center md:items-start">
                    <img src={footer_logo} alt="" className="w-[70%]" />
                    <p>The customer is at the heart of our unique business model, which includes design.</p>
                    <img src={footer_pay} alt=""  className="w-[70%]" />
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-bold text-2xl">SHOPPING</p>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>About Us</p>
                </div>
                <div className="flex flex-col gap-3 items-center md:items-start">
                    <p className="font-bold text-2xl">PARTNER</p>
                    <div className="grid grid-cols-2 w-[80%] items-center justify-items-center md:justify-items-start ">
                        <img src={client_1} alt="" className="w-[40%]" />
                        <img src={client_2} alt="" className="w-[40%]" />
                        <img src={client_3} alt="" className="w-[40%]" />
                        <img src={client_4} alt="" className="w-[40%]" />
                    </div>
                </div>

                <div className="flex flex-col gap-7">
                    <p className="font-bold text-2xl">NEWLETTER</p>
                    <p>Be the first to know about new aarivals, look books, sales & promos!</p>
                    <Input className="text-white" label="your email" icon={<MdOutlineMail />} />
                </div>
            </div>
        </div>
    )
}

export default Footer;