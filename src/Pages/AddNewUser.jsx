import React, {useContext, useState } from "react";
import {
  Card,
  Input,
  Button,
  Select, 
  Option
} from "@material-tailwind/react";
import Swal from 'sweetalert2'
import axios from "axios";
import {useNavigate } from "react-router-dom";
import Store from "../Context/Store";
import BoardAdmin from "../component/BoardAdmin";
const AddNewUser = () => {
    // start state 
    const [dataUser,setDataUser] = useState({
        firstName:"",
        lastName:"",
        userName:"",
        email:"",
        password:"",
        image:"",
        city:"",
        gender:"",
        phoneNumber:"",
        role:""
    });
    const [errForm,setErrForm] = useState({});
    const [loading,setLoading] = useState(false);
    // end state 
    // start var 
    const navigate = useNavigate();
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // end var 
    // start context store 
    const {getAllUsers,users} = useContext(Store);
    // end context store 
    // validate form 
    const handlForm = (e) => {
        const newErr = {};
        e.preventDefault();
        if(dataUser.firstName == "") newErr.firstName = true;
        if(dataUser.lastName == "") newErr.lastName = true;
        if(dataUser.userName == "") newErr.userName = true;
        if(dataUser.email == "" || !reg.test(dataUser.email)) newErr.email = true;
        if(dataUser.password == "" || dataUser.password < 6) newErr.password = true;
        if(dataUser.image == "" || !dataUser.image.startsWith("https://")) newErr.image = true;
        if(dataUser.city == "") newErr.city = true;
        if(dataUser.gender == "") newErr.gender = true;
        if(dataUser.phoneNumber == "") newErr.phoneNumber = true;
        if(dataUser.role == "") newErr.role = true;
        setErrForm(newErr);
        if(Object.keys(newErr).length == 0){
            createUser()
        }
    }
    // create new user 
    const createUser = () => {
        const testFindUser = users.find((user)=>{
            return user.email == dataUser.email
        })
        setLoading(true);
        setTimeout(()=>{
            if(!testFindUser){
                axios({
                    method:"post",
                    url:`${import.meta.env.VITE_API_USERS}`,
                    data:dataUser
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
                    setLoading(false);
                    Swal.fire({
                        title: "something error",
                        icon: "error",
                        draggable: true
                    });
                })
            } else {
                Swal.fire({
                    title: "this email is exist",
                    icon: "error",
                    draggable: true
                });
            }

        },3000)
    }
    return(
        <div className="flex flex-col justify-evenly px-5 md:grid md:grid-cols-12 md:grid-rows-12 md:h-fit md:gap-7 md:px-0">
            <BoardAdmin/>
            <Card color="transparent" className="py-3 px-3 shadow-2xl text-center col-start-5 col-span-6 row-start-1 row-span-11 bg-[#475569] text-white my-4" shadow={false}>
                <form onSubmit={(e)=>handlForm(e)} className="mt-8 mb-2 w-full flex flex-col gap-7">
                    <div className="flex gap-7 flex-col md:flex-row">
                        <Input name="firstName" value={dataUser.firstName} label="First Name" className="bg-white" onChange={(e)=>setDataUser({...dataUser,[e.target.name]:e.target.value})} error={errForm.firstName} />
                        <Input name="lastName" value={dataUser.lastName} label="Last Name" className="bg-white" onChange={(e)=>setDataUser({...dataUser,[e.target.name]:e.target.value})} error={errForm.lastName} />
                    </div>
                    <div className="mb-1 flex flex-col gap-6">
                        <Input name="userName" value={dataUser.userName} label="User Name" className="bg-white" onChange={(e)=>setDataUser({...dataUser,[e.target.name]:e.target.value})} error={errForm.userName} />
                        <Input name="email" value={dataUser.email} label="Email" className="bg-white" onChange={(e)=>setDataUser({...dataUser,[e.target.name]:e.target.value})} error={errForm.email} />
                        <Input name="password" value={dataUser.password} label="Password" className="bg-white" onChange={(e)=>setDataUser({...dataUser,[e.target.name]:e.target.value})} error={errForm.password} />
                    </div>
                    <div className="flex flex-col gap-2 text-left text-yellow-500">
                        <Input name="image" value={dataUser.image} label="image" className="bg-white" onChange={(e)=>setDataUser({...dataUser,[e.target.name]:e.target.value})} error={errForm.image} />
                        <p>Image Shall Be Like : https://image.png</p>
                    </div>
                    <div className="flex gap-7 flex-col md:flex-row">
                        <Input name="city" value={dataUser.city} label="city" className="bg-white" onChange={(e)=>setDataUser({...dataUser,[e.target.name]:e.target.value})} error={errForm.city} />
                        <Select name="gender" value={dataUser.gender} label="gender" onChange={(e)=>{setDataUser({...dataUser,"gender":e});console.log(dataUser)}} className="bg-white" error={errForm.gender}>
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                        </Select>   
                    </div>
                    <div className="flex gap-7 flex-col md:flex-row">
                        <Input name="phoneNumber" value={dataUser.phoneNumber} label="Phone Number" className="bg-white" onChange={(e)=>setDataUser({...dataUser,[e.target.name]:e.target.value})} error={errForm.phoneNumber} />                 
                        <Select name="role" value={dataUser.role} label="role" onChange={(e)=>setDataUser({...dataUser,"role":e})} className="bg-white" error={errForm.role}>
                            <Option value="admin">admin</Option>
                            <Option value="member">member</Option>
                        </Select>   
                    </div>
                    <Button color="green" loading={loading} type="submit" className="mt-2 flex justify-center" >
                        Add User
                    </Button>
                </form>
            </Card>
        </div>
    )
}


export default AddNewUser;
