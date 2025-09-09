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
import Store from "../Context/Store";
import BoardAdmin from "../component/BoardAdmin";
const AddNewUser = () => {
    // start state 
    const [firstName,setFirstName] = useState("");
    const [stateFirstName,setStateFirstName] = useState(false);
    const [lastName,setLastName] = useState("");
    const [stateLastName,setStateLastName] = useState(false);
    const [userName,setUserName] = useState("");
    const [stateUserName,setStateUserName] = useState(false);
    const [email,setEmail] = useState("");
    const [stateEmail,setStateEmail] = useState(false);
    const [password,setPassword] = useState("");
    const [statePassword,setStatePassword] = useState(false);
    const [city,setCity] = useState("");
    const [stateCity,setStateCity] = useState(false);
    const [gender,setGender] = useState("male");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [statePhoneNumber,setStatePhoneNumber] = useState(false);
    const [loading,setLoading] = useState(false);
    // end state 
    // start var 
    const navigate = useNavigate();
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // end var 
    // start context store 
    const {users} = useContext(Store);
    const {getAllUsers} = useContext(Store);
    // end context store 
    const handlForm = (e) => {
        e.preventDefault();
        if(firstName == ""){
            setStateFirstName(true);
        } else if(lastName == "") {
            setStateFirstName(false);
            setStateLastName(true);
        } else if(userName == "") {
            setStateLastName(false);
            setStateUserName(true);
        } else if(!reg.test(email)){
            setStateUserName(false);
            setStateEmail(true);
        } else if(password == "" || password < 5 || password.charAt(0) !== password.charAt(0).toUpperCase()) {
            setStateEmail(false);
            setStatePassword(true);
        } else if(city == ""){
            setStatePassword(false);
            setStateCity(true);
        } else if(phoneNumber == "" || phoneNumber < 11) {
            setStateCity(false);
            setStatePhoneNumber(true);
        } else {
            setStatePhoneNumber(false);
            createAccount();
        }


    }

    const createAccount = () => {
        const data = {firstName,lastName,userName,email,password,city,gender,phoneNumber,image:gender == "male" ? "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" : "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",role:"member"};
        const testFindUser = users.find((user)=>{
            return user.email == email
        })
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            if(!testFindUser){
                axios({
                    method:"post",
                    url:`${import.meta.env.VITE_API_USERS}`,
                    data:data
                }).then(()=>{
                    getAllUsers();
                })
                Swal.fire({
                title: "Done",
                icon: "success",
                draggable: true
                });
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
        <div className="flex flex-col justify-evenly px-5 md:grid md:grid-cols-12 md:grid-rows-12 md:h-screen md:gap-7 md:px-0">
            <BoardAdmin/>
            <Card color="transparent" className="py-3 px-7 shadow-2xl text-center col-start-5 col-span-6 row-start-1 row-span-11 bg-[#475569] text-white my-4" shadow={false}>
                <form onSubmit={(e)=>handlForm(e)} className="mt-8 mb-2 w-full flex flex-col gap-7">
                    <div className="flex gap-7 flex-col md:flex-row">
                        <Input label="First Name" className="bg-white" onChange={(e)=>setFirstName(e.target.value)} error={stateFirstName} />
                        <Input label="Last Name" className="bg-white" onChange={(e)=>setLastName(e.target.value)} error={stateLastName} />
                    </div>
                    <div className="mb-1 flex flex-col gap-6">
                        <Input label="User Name" className="bg-white" onChange={(e)=>setUserName(e.target.value)} error={stateUserName} />
                        <Input label="Email" className="bg-white" onChange={(e)=>setEmail(e.target.value)} error={stateEmail} />
                        <Input label="Password" className="bg-white" onChange={(e)=>setPassword(e.target.value)} error={statePassword} />
                    </div>
                    <div className="flex flex-col gap-2 text-left text-yellow-500">
                        <Input label="image" className="bg-white" onChange={(e)=>setPassword(e.target.value)} error={statePassword} />
                        <p>Image Shall Be Like : https://image.png</p>
                    </div>
                    <div className="flex gap-7 flex-col md:flex-row">
                        <Input label="city" className="bg-white" onChange={(e)=>setCity(e.target.value)} error={stateCity} />
                        <Select value={gender} label="gender" onChange={(e)=>setGender(e)} className="bg-white">
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                        </Select>   
                    </div>
                    <div className="flex gap-7 flex-col md:flex-row">
                        <Input label="Phone Number" className="bg-white" onChange={(e)=>setPhoneNumber(e.target.value)} error={statePhoneNumber} />                 
                        <Select value={gender} label="role" onChange={(e)=>setGender(e)} className="bg-white">
                            <Option value="admin">admin</Option>
                            <Option value="member">member</Option>
                        </Select>   
                    </div>
                    <Button loading={loading} type="submit" className="mt-2 flex justify-center" >
                        Add User
                    </Button>
                </form>
            </Card>
        </div>
    )
}


export default AddNewUser;

            // <Card color="transparent" className="p-7 shadow-2xl h-[80%] w-full text-center items-center md:w-[50%]" shadow={false}>
