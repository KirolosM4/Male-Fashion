import React from "react"
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return(
    <div>
        <div className="h-screen bg-no-repeat" style={{backgroundImage:"url(../../public/hero/hero-2.jpg)"}}>
            <div className="container mx-auto flex items-end h-[60%] md:h-1/2 2xl:h-[70%]">
                    <div className="py-5 w-full lg:w-1/2 px-4 lg:p-0 text-center lg:text-left">
                    <p className="text-red-500 py-3">SUMMER COLLECTION</p>
                    <p className="text-3xl md:text-5xl text-[#475569] py-1">Fall - Winter</p>
                    <p className="text-3xl md:text-5xl  text-[#475569] py-1">Collections 2023</p>
                    <p className="text-[#475569] py-3">A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to execeptional quality</p>
                    <span className="bg-red-500 p-3 text-white">SHOP NOW  <FaArrowRightLong className="inline" /> </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home