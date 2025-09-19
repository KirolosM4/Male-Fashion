import React, { useContext, useState } from "react";
import {
  Card,
  Input,
  Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import PageNotFound from "./PageNotFound";
import Store from "../Context/Store";

const SignIn = () => {
    // start state 
    const [dataUser,setDataUser] = useState({
        email:"",
        password:""
    });
    const [errForm,setErrForm] = useState({});
    const [load,setLoad] = useState(false);
    // end state 
    // start var 
    const navigate = useNavigate();
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // end var 
    // start context store 
    const {users,setLogged,setLoggUser,errDataUser} = useContext(Store);
    // end context store 
    // validate form 
    const handlForm = (e) => {
        const newErr = {};
        e.preventDefault();
        if(dataUser.email == "" || !reg.test(dataUser.email)) newErr.email = true;
        if(dataUser.password == "" || dataUser.password < 6) newErr.password = true;
        setErrForm(newErr);
        if(Object.keys(newErr).length == 0){
            signIn();
        }
        
    }

    // sign in for user 
    const signIn = () => {
        const testDataUser = users.find((user)=>{
            return user.email == dataUser.email && user.password == dataUser.password;
        })
        setLoad(!load);
        setTimeout(()=>{
            if(testDataUser){
            Swal.fire({
            title: "welcome to our website",
            icon: "success",
            draggable: true
            });
            setLogged(true);
            setLoggUser(testDataUser)
            navigate("/home");
        } else {
            Swal.fire({
            title: "email or password is faild",
            icon: "error",
            draggable: true
            });
            setLoad(false);
        }
        },3000)
    }
    return(
        !errDataUser
        ?
        <div className="h-[70vh] flex justify-center items-center">
            <Card color="transparent" className="p-7 shadow-2xl" shadow={false}>
                <p className="text-center text-3xl font-bold">Sign In</p>
                <form onSubmit={(e)=>handlForm(e)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Input name="email" value={dataUser.email} label="Email" className="bg-white" onChange={(e)=>setDataUser({...dataUser,[e.target.name]:e.target.value})} error={errForm.email} />
                        <Input name="password" value={dataUser.password} label="Password" className="bg-white" onChange={(e)=>setDataUser({...dataUser,[e.target.name]:e.target.value})} error={errForm.password} />
                    </div>
                    <div className="flex gap-7">
                        <Button type="submit" loading={load}  className="mt-6">
                        Sign In
                        </Button>
                        <Button className="mt-6 grow" >
                            <Link to="/createnewaccount">Create New Account</Link>
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
        :
        <PageNotFound/>
    )
}

export default SignIn;