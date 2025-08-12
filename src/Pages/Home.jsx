import React from "react"
import { FaArrowRightLong } from "react-icons/fa6";
import bgHome from "../../public/hero/hero-2.jpg";
import banner_1 from "../../public/banner/banner-1.jpg"
import banner_2 from "../../public/banner/banner-2.jpg"
import banner_3 from "../../public/banner/banner-3.jpg"
const Home = () => {
  return(
    <div>
      {/* start main content */}
        <div className="h-screen bg-no-repeat mb-11" style={{backgroundImage:`url(${bgHome})`}}>
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
        {/* end main content */}
        <div className="container mx-auto h-[120vh] mt-11 flex flex-col md:grid md:grid-cols-12 md:grid-rows-12">

          <div className="col-start-8 col-end-12 justify-items-center">
            <img src={banner_1} alt="" />
          </div>

          <p className="text-3xl md:text-5xl flex flex-col gap-3 text-[#475569] col-start-5 col-end-10 md:text-left text-center"><span>Clothing</span><span>Collection 2025</span><span className="text-sm underline">SHOP NOW</span></p>

          <div className="row-start-7 col-start-2 col-end-6 md:text-left text-center justify-items-center" >
            <img src={banner_2} alt="" />
            <p className="text-3xl md:text-5xl flex flex-col gap-3 text-[#475569] ">Accessories<span className="text-sm underline">SHOP NOW</span></p>
          </div>

          <div className="row-start-9 col-start-8 col-end-12 justify-items-center" >
            <img src={banner_3} alt="" />
          </div>

            <p className="text-3xl md:text-5xl flex flex-col gap-3 text-[#475569] row-start-10 col-start-7 col-end-10 md:text-left text-center">Shoes Spring <span>2025</span> <span className="text-sm underline">SHOP NOW</span></p>
        </div>
    </div>
  )
}

export default Home