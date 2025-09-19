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
const EditProfile = () => {
    // start context store 
    const {loggUser,setLoggUser,getAllUsers} = useContext(Store);
    // end context store 
    // start state 
    const [errForm,setErrForm] = useState({});
    const [loading,setLoading] = useState(false);
    // end state 
    // start var 
    const navigate = useNavigate();
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // end var 

    // validate form 
    const handlForm = (e) => {
        e.preventDefault();
        const newErr = {};
        if(loggUser.firstName == "") newErr.firstName = true;
        if(loggUser.lastName == "") newErr.lastName = true;
        if(loggUser.email == "" || !reg.test(loggUser.email)) newErr.email = true;
        if(loggUser.password == "" || loggUser.length < 6) newErr.password = true;
        if(loggUser.gender == "") newErr.gender = true;
        setErrForm(newErr);
        if(Object.keys(newErr).length == 0) {
            editProfile()
        }
    }
    
    // edit profile data 
    const editProfile = () => {
        setLoading(true);
        setTimeout(()=>{
            axios({
                method:"put",
                url:`${import.meta.env.VITE_API_USERS}/${loggUser.id}`,
                data:loggUser
            }).then(()=>{
                getAllUsers()
                Swal.fire({
                    title: "Your Profile Is Change",
                    icon: "success",
                    draggable: true
                });
                setLoading(false);
            }).catch(()=>{
                Swal.fire({
                    title: "something error",
                    icon: "error",
                    draggable: true
                });
                setLoading(false);
            })
            navigate("/profile");
        },3000)
    }

    return(
        <div className="container mx-auto">
            <div className="flex items-center justify-center py-7 gap-5 border-b-2 border-gray-500 md:justify-start">
                <img src={loggUser.image} alt="" className="w-[20%] rounded-full md:w-[5%]" />
                <p className="text-sm md:text-2xl">My Profile Ready To Changed ...</p>
            </div>
            <Card color="transparent" shadow={false} className="p-7">
                <form onSubmit={(e)=>handlForm(e)} className="mt-8 flex flex-col gap-4">
                    <div>
                        <Input label="First Name" value={loggUser.firstName} onChange={(e)=>setLoggUser({...loggUser,firstName:e.target.value})} error={errForm.firstName}/>
                        <p className="text-xs md:text-sm opacity-50 py-2">Enough to just write your first name only.</p>
                    </div>
                    <div>
                        <Input label="Last Name" value={loggUser.lastName} onChange={(e)=>setLoggUser({...loggUser,lastName:e.target.value})} error={errForm.lastName}/>
                        <p className="text-xs md:text-sm opacity-50 py-2">Enough to just write your last name only.</p>
                    </div>
                    <div>
                        <Input label="Email" value={loggUser.email} onChange={(e)=>setLoggUser({...loggUser,email:e.target.value})} error={errForm.email}/>
                        <p className="text-xs md:text-sm opacity-50 py-2">once you change your mail you have to re-confirm it form your mail box.</p>
                    </div>
                    <div>
                        <Input label="Password" value={loggUser.password} onChange={(e)=>setLoggUser({...loggUser,password:e.target.value})} error={errForm.password}/>
                        <p className="text-xs md:text-sm opacity-50 py-2">your new password shall be more than 6 characters </p>
                    </div>
                    <div>
                        <Select value={loggUser.gender} label="gender" onChange={(e)=>setLoggUser({...loggUser,gender:e})}>
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                        </Select> 
                        <p className="text-xs md:text-sm opacity-50 py-2">Please note that we do not support homosexual.</p>
                    </div>
                    <Button variant="outlined" color="green" loading={loading} type="submit" className="w-fit self-center md:self-start" >
                        Edit Profile
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default EditProfile;