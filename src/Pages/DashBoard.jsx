import React, { useContext } from "react";
import BoardAdmin from "../component/BoardAdmin";
import Store from "../Context/Store";
import { Button } from "@material-tailwind/react";

const DashBoard = () => {
    const {users} = useContext(Store)
    const {products} = useContext(Store)
    return(
        <div className="flex flex-col justify-evenly px-5 h-[70vh] md:grid md:grid-cols-12 md:grid-rows-12 md:h-screen md:gap-11 md:px-0">
            <BoardAdmin/>
            <div className="w-full gap-4 p-3 bg-[#083344] rounded text-sm text-white col-start-4 col-span-4 row-start-4 row-span-6 flex flex-col items-center justify-evenly md:p-2 md:text-2xl">
                <p className="text-blue-600 text-2xl md:text-4xl">Users</p>
                <p><span>Number Of Users : </span><span className="text-green-500">{users.length}</span></p>
                <p><span>Last User Registered is  : </span><span className="text-green-500">{users[users.length - 1].firstName}</span></p>
                <Button className="bg-blue-600 p-2 md:p-3">Show Users</Button>
            </div>
            <div className="w-full gap-4 p-3 bg-[#083344] rounded text-sm text-white col-start-8 col-span-4 row-start-4 row-span-6 flex flex-col items-center justify-evenly md:p-2 md:text-2xl">
                <p className="text-blue-600 text-2xl md:text-4xl">Products</p>
                <p><span>Number Of Users : </span><span className="text-green-500">{products.length}</span></p>
                <p><span>Last Product Added is  : </span><span className="text-green-500">{products[products.length - 1].title.slice(0,products[products.length - 1].title.indexOf(" "))}</span></p>
                <Button className="bg-blue-600 p-2 md:p-3">Show Products</Button>
            </div>
        </div>
    )
}

export default DashBoard;