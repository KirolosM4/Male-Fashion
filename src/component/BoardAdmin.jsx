import React from "react";
import { Link } from "react-router-dom";

const BoardAdmin = () => {
    return(
        <div className="flex flex-row justify-around items-center text-xl text-white font-bold bg-[#475569] py-3 text-2xl md:grid-row-start-0 md:grid-col-start-0 md:col-span-2 md:row-span-12 md:flex-col md:text-3xl">
            <p><Link to="/admin/">DashBoard</Link></p>
            <p>Users</p>
            <p>Products</p>
        </div>
    )
}

export default BoardAdmin;