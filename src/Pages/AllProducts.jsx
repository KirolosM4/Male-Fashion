import React, { useContext, useState } from "react"
import BoardAdmin from "../component/BoardAdmin";
import { Button, Card, Typography } from "@material-tailwind/react";
import Store from "../Context/Store";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const AllProducts = () => {
    const [loading,setLoading] = useState(false);
    const TABLE_HEAD = ["Product", "Price", "Operation"];
    const {products} = useContext(Store);
    const {getAllProducts} = useContext(Store);
        const delProduct = (id,title,image) => {
        Swal.fire({
            title: `${title.slice(0,title.indexOf(" "))} Will Be Deleted !`,
            icon: "warning",
            imageUrl: `${image}`,
            imageHeight: 200,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);
                axios({
                    method:"delete",
                    url:`${import.meta.env.VITE_API_PRO}/${id}`,
                }).then(()=>{
                    getAllProducts();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${title.slice(0,title.indexOf(" "))} has been deleted.`,
                        icon: "success"
                    });
                }).catch(()=>{
                    Swal.fire({
                        text: "something error",
                        icon: "error"
                    });
                })
                setLoading(false);
            }
        });


    }
    return(
        <div className="mb-3 flex flex-col justify-evenly px-5 h-[70vh] md:grid md:grid-cols-12 md:grid-rows-12 md:h-screen md:gap-7 md:px-0 md:mb-0">
            <BoardAdmin/>
            <div className="col-start-4 col-span-7 row-start-0 row-span-3 flex flex-col gap-3 py-4 items-center text-[#475569] font-bold">
                <p className="text-3xl">Products</p>
                <Button color="green" className="w-fit">
                    <Link to="/admin/products/addnewproduct">Add New Products</Link>
                </Button>
            </div>
             <Card className="col-start-4 col-span-8 row-start-4 row-span-8 overflow-y-scroll bg-[#475569] text-white">
                <table className="w-full min-w-max table-auto text-center">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-[#94a3b8] p-4"
                            >
                                <Typography
                                variant="small"
                                className="font-normal leading-none opacity-70"
                                >
                                {head}
                                </Typography>
                            </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                    {products.map(({image,price,id,title},index) => {
                        return (
                        <tr key={index}>
                            <td className="p-4 border border-[#94a3b8] w-[10em]">
                            <Typography
                                variant="small"
                                className="font-normal flex justify-center"
                            >
                                <img src={image} alt="" className="w-1/2" />
                            </Typography>
                            </td>
                            <td className="p-4 border border-[#94a3b8]">
                            <Typography
                                variant="small"
                                className="font-normal"
                            >
                                {price}
                            </Typography>
                            </td>
                            <td className="p-4 border border-[#94a3b8]">
                            <Typography
                                variant="small"
                                className="font-medium  flex justify-around"
                            >
                                <Button color="blue"><Link to={`/admin/products/viewproduct/${id}`}>View</Link></Button>
                                <Button color="yellow"><Link to={`/admin/products/editproduct/${id}`}>EDIT</Link></Button>
                                <Button loading={loading} color="red" onClick={()=>delProduct(id,title,image)}>Del</Button>
                            </Typography>
                            </td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
            </Card>
        </div>
    )
}

export default AllProducts;