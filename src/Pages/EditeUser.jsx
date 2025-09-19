import React, { useContext, useEffect, useState } from "react";
import BoardAdmin from "../component/BoardAdmin";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Store from "../Context/Store";
import {
  Card,
  Input,
  Button,
  Select, 
  Option
} from "@material-tailwind/react";
import Swal from 'sweetalert2'
const EditUser = () => {
    // start state 
    const [errForm,setErrForm] = useState({});
    const [loading,setLoading] = useState(false);
    const [user,setUser] = useState({});
    // end state 
    // start params 
    const {userId} = useParams();
    // end params 
    // start var 
    const navigate = useNavigate();
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // end var 
    // start context store 
    const {getAllUsers} = useContext(Store);
    // end context store 
    const getUser = () => {
        axios({
            method:"get",
            url:`${import.meta.env.VITE_API_USERS}/${userId}`
        }).then((res)=>{
            setUser(res.data);
        })
    }
    useEffect(()=>{
        getUser();
    },[])
    
    // validate form for edit 
    const handlForm = (e) => {
        e.preventDefault();
        const newErr = {};
        if(user.firstName == "") newErr.firstName = true;
        if(user.lastName == "") newErr.lastName = true;
        if(user.userName == "") newErr.userName = true;
        if(user.email == "" || !reg.test(user.email)) newErr.email = true;
        if(user.password == "" || user.length < 6) newErr.password = true;
        if(user.city == "") newErr.city = true;
        if(user.image == "") newErr.image = true;
        if(user.phoneNumber == "" || isNaN(user.phoneNumber)) newErr.phoneNumber = true;
        setErrForm(newErr);
        if(Object.keys(newErr).length == 0) {
            editUser()
        }
    }
    
    // edit data for user 
    const editUser = () => {
        setLoading(true);
        setTimeout(()=>{
                axios({
                    method:"put",
                    url:`${import.meta.env.VITE_API_USERS}/${userId}`,
                    data:user
                }).then(()=>{
                    getAllUsers();
                    Swal.fire({
                        title: "Done",
                        icon: "success",
                        draggable: true
                    });
                    setLoading(false);
                    navigate("/admin/users")
                }).catch(()=>{
                    Swal.fire({
                        title: "something error",
                        icon: "error",
                        draggable: true
                    });
                    setLoading(false);
                })
        },3000)
    }
    return(
        <div className="flex flex-col justify-evenly px-5 h-fit md:h-full md:grid md:grid-cols-12 md:grid-rows-12 md:h-screen md:gap-7 md:px-0">
            <BoardAdmin/>
            <Card color="transparent" className="py-3 px-7 shadow-2xl text-center col-start-5 col-span-6 row-start-1 row-span-11 bg-[#475569] text-white my-4" shadow={false}>
                <form onSubmit={(e)=>handlForm(e)} className="mt-8 mb-2 w-full flex flex-col gap-7">
                    <div className="flex gap-7 flex-col md:flex-row">
                        <Input value={user.firstName} label="First Name" className="bg-white" onChange={(e)=>setUser({...user,firstName:e.target.value})} error={errForm.firstName} />
                        <Input value={user.lastName} label="Last Name" className="bg-white" onChange={(e)=>setUser({...user,lastName:e.target.value})} error={errForm.lastName} />
                    </div>
                    <div className="mb-1 flex flex-col gap-6">
                        <Input value={user.userName} label="User Name" className="bg-white" onChange={(e)=>setUser({...user,userName:e.target.value})} error={errForm.userName} />
                        <Input value={user.email} label="Email" className="bg-white" onChange={(e)=>setUser({...user,email:e.target.value})} error={errForm.email} />
                        <Input value={user.password} label="Password" className="bg-white" onChange={(e)=>setUser({...user,password:e.target.value})} error={errForm.password} />
                    </div>
                    <div className="flex flex-col gap-2 text-left text-yellow-500">
                        <Input value={user.image} label="image" className="bg-white" onChange={(e)=>setUser({...user,image:e.target.value})} error={errForm.image} />
                        <p>Image Shall Be Like : https://image.png</p>
                    </div>
                    <div className="flex gap-7 flex-col md:flex-row">
                        <Input value={user.city} label="city" className="bg-white" onChange={(e)=>setUser({...user,city:e.target.value})} error={errForm.city} />
                        <Select value={user.gender} label="gender" onChange={(e)=>setUser({...user,gender:e})} className="bg-white">
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                        </Select>   
                    </div>
                    <div className="flex gap-7 flex-col md:flex-row">
                        <Input value={user.phoneNumber} label="Phone Number" className="bg-white" onChange={(e)=>setUser({...user,phoneNumber:e.target.value})} error={errForm.phoneNumber} />                 
                        <Select value={user.role} label="role" onChange={(e)=>setUser({...user,role:e})} className="bg-white">
                            <Option value="admin">admin</Option>
                            <Option value="member">member</Option>
                        </Select>   
                    </div>
                    <Button color="green" loading={loading} type="submit" className="mt-2 flex justify-center" >
                        Edit User
                    </Button>
                </form>
            </Card>

        </div>
    )
}

export default EditUser;