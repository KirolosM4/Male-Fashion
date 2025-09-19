import React, { useContext, useState } from "react"
import BoardAdmin from "../component/BoardAdmin";
import { Button, Card, Typography } from "@material-tailwind/react";
import Store from "../Context/Store";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const AllUsers = () => {
    // start state 
    const [loading,setLoading] = useState(false);
    const [loadingChangeRole,setLoadingChangeRole] = useState(false);
    // end state 
    // start var 
    const TABLE_HEAD = ["User", "Role", "Operation"];
    // end var 
    // start context 
    const {users,getAllUsers} = useContext(Store);
    // end contxt 
    // change role user 
    const changeRole = (id,role) => {
        role == "admin" ? role = "member" : role = "admin";
        setLoadingChangeRole(id)
        setTimeout(()=>{
            axios({
                method:"put",
                url: `${import.meta.env.VITE_API_USERS}/${id}`,
                data:{role}
            }).then(()=>{
                getAllUsers();
                setLoadingChangeRole(null);
            })
        },2000)
    }
        
    // del user 
    const delUser = (id,userName,image) => {
        Swal.fire({
            title: `${userName} Will Be Deleted !`,
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
                    url:`${import.meta.env.VITE_API_USERS}/${id}`,
                }).then(()=>{
                    getAllUsers();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${userName} has been deleted.`,
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
        <div className="flex flex-col justify-evenly px-5 h-[70vh] md:grid md:grid-cols-12 md:grid-rows-12 md:h-screen md:gap-7 md:px-0">
            <BoardAdmin/>
            <div className="col-start-4 col-span-7 row-start-0 row-span-3 flex flex-col gap-3 py-4 items-center text-[#475569] font-bold">
                <p className="text-3xl">Users</p>
                <Button color="green" className="w-fit">
                    <Link to="/admin/users/addnewuser">Add New User</Link>
                </Button>
            </div>
             <Card className="col-start-4 col-span-8 row-start-4 row-span-8 overflow-y-scroll bg-[#475569] text-white h-[50%] md:h-full md:max-h-fit">
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
                    {users.map(({userName,role,id,image},index) => {
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
                                <Button color="blue"><Link to={`/admin/users/viewuser/${id}`}>View</Link></Button>
                                <Button color="yellow"><Link to={`/admin/users/edituser/${id}`}>EDIT</Link></Button>
                                <Button loading={loading} color="red" onClick={()=>delUser(id,userName,image)}>Del</Button>
                                <Button loading={loadingChangeRole === id} color={role == "admin" ? "gray" : "green"} onClick={()=>changeRole(id,role)}>
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