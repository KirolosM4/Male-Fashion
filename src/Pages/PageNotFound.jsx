import React from "react";

const PageNotFound = () => {
    return(
        <div className="h-screen w-full flex flex-col justify-center items-center gap-5">
            <p className="text-red-500 text-xl md:text-4xl">Please Try Again Later</p>
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Frowning%20Face.png" alt="Frowning Face" className="w-[10%] md:w-[5%]"/>
        </div>
    )
}

export default PageNotFound;