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
    const {loggUser} = useContext(Store);
    const {setLoggUser} = useContext(Store);
    const {getAllUsers} = useContext(Store);
    // end context store 
    // start state 
    const [firstName,setFirstName] = useState(loggUser.firstName);
    const [stateFirstName,setStateFirstName] = useState(false);
    const [lastName,setLastName] = useState(loggUser.lastName);
    const [stateLastName,setStateLastName] = useState(false);
    const [email,setEmail] = useState(loggUser.email);
    const [stateEmail,setStateEmail] = useState(false);
    const [password,setPassword] = useState(loggUser.password);
    const [statePassword,setStatePassword] = useState(false);
    const [gender,setGender] = useState(loggUser.gender);
    const [loading,setLoading] = useState(false);
    // end state 
    // start var 
    const navigate = useNavigate();
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // end var 
    const handlForm = (e) => {
        e.preventDefault();
        if(firstName == ""){
            setStateFirstName(true);
        } else if(lastName == "") {
            setStateFirstName(false);
            setStateLastName(true);
        } else if(!reg.test(email)){
            setStateLastName(false);
            setStateEmail(true);
        } else if(password == "" || password < 5 || password.charAt(0) !== password.charAt(0).toUpperCase()) {
            setStateEmail(false);
            setStatePassword(true);
        } else {
            setStatePassword(false);
            editProfile();
        }
    }

    const editProfile = () => {
        const data = {firstName,lastName,email,password,gender};
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            axios({
                method:"put",
                url:`https://68a39589c123272fb9affd0c.mockapi.io/shop/users/${loggUser.id}`,
                data:data
            }).then((e)=>{
                setLoggUser(e.data);
                getAllUsers()
                Swal.fire({
                    title: "Your Profile Is Change",
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
                        <Input label="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} error={stateFirstName}/>
                        <p className="text-xs md:text-sm opacity-50 py-2">Enough to just write your first name only.</p>
                    </div>
                    <div>
                        <Input label="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} error={stateLastName}/>
                        <p className="text-xs md:text-sm opacity-50 py-2">Enough to just write your last name only.</p>
                    </div>
                    <div>
                        <Input label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} error={stateEmail}/>
                        <p className="text-xs md:text-sm opacity-50 py-2">once you change your mail you have to re-confirm it form your mail box.</p>
                    </div>
                    <div>
                        <Input label="Password" value={password} onChange={(e)=>setPassword(e.target.value)} error={statePassword}/>
                        <p className="text-xs md:text-sm opacity-50 py-2">your new password shall be more than 6 characters </p>
                    </div>
                    <div>
                        <Select value={gender} label="gender" onChange={(e)=>setGender(e)}>
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