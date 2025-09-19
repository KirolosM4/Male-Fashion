import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import BoardAdmin from "../component/BoardAdmin";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Store from "../Context/Store";
const ViewUser = () => {
    // start context 
    const {users} = useContext(Store);
    // end context 
    // start param 
    const {userId} = useParams();
    // end param 
    // start state 
    const [user,setUser] = useState({});
    // end state 
    // get user 
    const getUser = () => {
        const userSelect = users.find((user)=>{
            return user.id == userId;
        })
        setUser(userSelect);
    }
    useEffect(()=>{
        getUser();
    },[])
    return(
        <div className="flex flex-col justify-evenly px-5 h-fit md:grid md:grid-cols-12 md:grid-rows-12 md:h-screen md:gap-7 md:px-0">
            <BoardAdmin/>
            <Card className="col-start-5 col-span-5 row-start-1 row-span-11 bg-[#475569] p-2 text-xl flex flex-col items-center justify-center my-3">
                <CardHeader floated={false} color="blue-gray" className="w-1/3 rounded-full">
                    <img
                    src={user.image}
                    />
                </CardHeader>
                <CardBody className="text-white text-center flex flex-col gap-1 text-xl">
                    <p>UserName : {user.userName}</p>
                    <p>FirstName :{user.firstName}</p>
                    <p>LastName : {user.lastName}</p>
                    <p>Email : {user.email}</p>
                    <p>Gender : {user.gender}</p>
                    <p>City : {user.city}</p>
                    <p>Role : {user.role}</p>
                    <p>PhoneNumber : {user.phoneNumber}</p>
                    <p>Password : {user.password}</p>
                </CardBody>
                <CardFooter className="p-3 w-fit">
                    <Button color="green">
                        <Link to="/admin/users">Back To Users</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ViewUser;