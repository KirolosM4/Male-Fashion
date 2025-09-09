import React, { useContext } from "react"
import BoardAdmin from "../component/BoardAdmin";
import { Button, Card, Typography } from "@material-tailwind/react";
import Store from "../Context/Store";
import axios from "axios";
const AllUsers = () => {
    const TABLE_HEAD = ["User", "Role", "Operation"];
    const {users} = useContext(Store);
    const {getAllUsers} = useContext(Store);
    const makeAndRemAdmin = (id,role) => {
        role == "admin" ? role = "member" : role = "admin";
        axios({
            method:"put",
            url: `${import.meta.env.VITE_API_USERS}/${id}`,
            data:{role}
        }).then(()=>{
            getAllUsers()
        })
    }
    return(
        <div className="flex flex-col justify-evenly px-5 h-[70vh] md:grid md:grid-cols-12 md:grid-rows-12 md:h-screen md:gap-7 md:px-0">
            <BoardAdmin/>
            <div className="col-start-4 col-span-7 row-start-0 row-span-3 flex flex-col gap-3 py-4 items-center text-[#475569] font-bold">
                <p className="text-3xl">Users</p>
                <Button color="green" className="w-fit">Add New User</Button>
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
                    {users.map(({userName,role,id},index) => {
                        return (
                        <tr key={index}>
                            <td className="p-4 border border-[#94a3b8]">
                            <Typography
                                variant="small"
                                className="font-normal"
                            >
                                {userName}
                            </Typography>
                            </td>
                            <td className="p-4 border border-[#94a3b8]">
                            <Typography
                                variant="small"
                                className="font-normal"
                            >
                                {role}
                            </Typography>
                            </td>
                            <td className="p-4 border border-[#94a3b8]">
                            <Typography
                                variant="small"
                                className="font-medium  flex justify-between"
                            >
                                <Button color="blue">View</Button>
                                <Button color="yellow">Edit</Button>
                                <Button color="red">Del</Button>
                                <Button color={role == "admin" ? "gray" : "green"} onClick={()=>makeAndRemAdmin(id,role)}>
                                    {role == "admin" ? "Remove Admin" : "Make Admin"}
                                </Button>
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

export default AllUsers;