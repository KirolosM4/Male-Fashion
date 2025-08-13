import React from "react"
import { FaArrowRightLong } from "react-icons/fa6";
import bgHome from "../../public/hero/hero-2.jpg";
import banner_1 from "../../public/banner/banner-1.jpg"
import banner_2 from "../../public/banner/banner-2.jpg"
import banner_3 from "../../public/banner/banner-3.jpg"
import about_us from "../../public/about-us.jpg"
import first_lastSection from "../../public/last-section/1.jpg"
import second_lastSection from "../../public/last-section/2.jpg"
import third_lastSection from "../../public/last-section/3.jpg"
import fourth_lastSection from "../../public/last-section/4.jpg"
import { FaStar } from "react-icons/fa6";

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
        {/* start shope */}
        <div className="container mx-auto h-fit mt-11 flex flex-col md:grid md:grid-cols-12 md:grid-rows-12 md:h-[120vh]">

          <div className="col-start-8 col-end-12 justify-items-center">
            <img src={banner_1} alt="" className="w-[90%]" />
          </div>

          <p className="col-start-5 col-end-10 text-3xl text-center flex flex-col gap-3 text-[#475569] md:text-left md:text-5xl"><span>Clothing</span><span>Collection 2025</span><span className="text-sm underline">SHOP NOW</span></p>

          <div className="row-start-6 col-start-2 col-end-6 justify-items-center text-center md:text-left md:justify-items-start" >
            <img src={banner_2} alt="" className="w-[90%]" />
            <p className="text-3xl flex flex-col gap-3 text-[#475569] md:text-5xl">Accessories<span className="text-sm underline">SHOP NOW</span></p>
          </div>

          <div className="row-start-8 col-start-8 col-end-12 justify-items-center" >
            <img src={banner_3} alt="" className="w-[90%]"  />
          </div>

            <p className="row-start-9 col-start-7 col-end-10 text-3xl text-center  flex flex-col gap-3 text-[#475569] md:text-left md:text-5xl">Shoes Spring <span>2025</span> <span className="text-sm underline">SHOP NOW</span></p>
        </div>
        {/* end shope  */}
        {/* start shipping */}
        <div className="my-11 h-[10vh] text-white text-sm flex justify-center items-center bg-fixed relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black before:opacity-50 md:text-4xl" style={{backgroundImage:`url(${about_us})`}}>
          <p className="relative">Free Shipping , 30-day return or refund guarantee.</p>
        </div>
        <div className="flex container mx-auto gap-8 flex-col items-center md:flex-row">
          <div className="text-center md:text-left">
            <img src={first_lastSection} alt="" />
            <FaStar className="inline text-yellow-500" /><FaStar className="inline text-yellow-500" /><FaStar className="inline text-yellow-500" /><FaStar className="inline text-gray-500" />
            <p>$50</p>
          </div>
          <div className="text-center md:text-left">
            <img src={second_lastSection} alt="" />
            <FaStar className="inline text-yellow-500" /><FaStar className="inline text-yellow-500" /><FaStar className="inline text-yellow-500" /><FaStar className="inline text-gray-500" />
            <p>$120</p>
          </div>
          <div className="text-center md:text-left">
            <img src={third_lastSection} alt="" />
            <FaStar className="inline text-yellow-500" /><FaStar className="inline text-yellow-500" /><FaStar className="inline text-yellow-500" /><FaStar className="inline text-gray-500" />
            <p>$30</p>
          </div>
          <div className="text-center md:text-left">
            <img src={fourth_lastSection} alt="" />
            <FaStar className="inline text-yellow-500" /><FaStar className="inline text-yellow-500" /><FaStar className="inline text-yellow-500" /><FaStar className="inline text-gray-500" />
            <p>$40</p>
          </div>
        </div>
        {/* end shipping  */}
    </div>
  )
}

export default Home