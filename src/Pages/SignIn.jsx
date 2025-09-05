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
    const [email,setEmail] = useState("");
    const [stateEmail,setStateEmail] = useState(false);
    const [password,setPassword] = useState("");
    const [statePassword,setStatePassword] = useState(false);
    const [load,setLoad] = useState(false);
    // end state 
    // start var 
    const navigate = useNavigate();
    // end var 
    // start context store 
    const {users} = useContext(Store);
    const {setLogged} = useContext(Store);
    const {setLoggUser} = useContext(Store);
    const {errDataUser} = useContext(Store);
    // end context store 
    const handlForm = (e) => {
        e.preventDefault();
        if(!email.includes("@") || email == " ") {
            setStateEmail(true);
        } else if(password < 6 || password == " "){
            setStateEmail(false);
            setStatePassword(true);
        } else {
            setStatePassword(false);
            signIn();
        }
    }

    const signIn = () => {
        const testDataUser = users.find((user)=>{
            return user.email == email && user.password == password;
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
                        <Input label="Email" className="bg-white" onChange={(e)=>setEmail(e.target.value)} error={stateEmail} />
                        <Input label="Password" className="bg-white" onChange={(e)=>setPassword(e.target.value)} error={statePassword} />
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