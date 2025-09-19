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
import { useNavigate } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Store from "../Context/Store";
const CreateNewAccount = () => {
    // start state
    const [dataUser,setDataUser] = useState({
        firstName:"",
        lastName:"",
        userName:"",
        email:"",
        password:"",
        city:"",
        gender:"",
        phoneNumber:"",
        image:""
    })
    const [errForm,setErrForm] = useState({});
    const [loading,setLoading] = useState(false);
    // end state 
    // start var 
    const navigate = useNavigate();
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // end var 
    // start context store 
    const {users,getAllUsers} = useContext(Store);
    // end context store 
    // validate form 
    const handlForm = (e) => {
        e.preventDefault();
        const newErr = {};
        if(dataUser.firstName == "") newErr.firstName = true;
        if(dataUser.lastName == "") newErr.lastName = true;
        if(dataUser.userName == "") newErr.userName = true;
        if(dataUser.email == "" || !reg.test(dataUser.email)) newErr.email = true;
        if(dataUser.password == "" || dataUser.length < 6) newErr.password = true;
        if(dataUser.city == "") newErr.city = true;
        if(dataUser.gender == "") newErr.gender = true;
        if(dataUser.phoneNumber == "" || isNaN(dataUser.phoneNumber)) newErr.phoneNumber = true;
        setErrForm(newErr);
        if(Object.keys(newErr).length == 0) {
            createAccount()
        }
    }
    
    // create account from user 
    const createAccount = () => {
        const testFindUser = users.find((user)=>{
            return user.email == dataUser.email
        })
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            if(!testFindUser){
                axios({
                    method:"post",
                    url:`${import.meta.env.VITE_API_USERS}`,
                    data:{...dataUser,image:dataUser.gender == "male" ? "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80":"https://www.ramstarab.com/wp-content/uploads/2020/03/%D8%A7%D8%AD%D8%AF%D8%AB-%D8%B5%D9%88%D8%B1-%D8%A8%D9%86%D8%A7%D8%AA-22-1.jpg"}
                }).then(()=>{
                    getAllUsers();
                    Swal.fire({
                        title: "Done",
                        icon: "success",
                        draggable: true
                    });
                }).catch(()=>{
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
            navigate("/signin")
            
        },3000)
    }
    return(
        users.length
        ?
        <div className="flex justify-center items-center my-7">
            <Card color="transparent" className="p-7 shadow-2xl h-[80%] w-full text-center items-center md:w-[50%]" shadow={false}>
                <p className="text-center text-3xl font-bold">Create New Account</p>
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
                    <div className="flex gap-7 flex-col md:flex-row">
                        <Input name="city" value={dataUser.city} label="city" className="bg-white" onChange={(e)=>setDataUser({...dataUser,[e.target.name]:e.target.value})} error={errForm.city} />
                        <Select value={dataUser.gender} label="gender" onChange={(e)=>setDataUser({...dataUser,gender:e})} error={errForm.gender}>
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                        </Select>   
                        <Input name="phoneNumber" value={dataUser.phoneNumber} label="Phone Number" className="bg-white" onChange={(e)=>setDataUser({...dataUser,[e.target.name]:e.target.value})} error={errForm.phoneNumber} />                 
                    </div>
                    <Button loading={loading} type="submit" className="mt-6 flex justify-center" >
                        Create Account
                    </Button>
                </form>
            </Card>
        </div>
        :
        <PageNotFound/>
    )
}


export default CreateNewAccount;