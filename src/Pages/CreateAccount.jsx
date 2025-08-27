import React from "react";
import {
  Card,
  Input,
  Button,
  Select, 
  Option
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
const CreateNewAccount = () => {
    return(
        <div className="flex justify-center items-center my-7">
            <Card color="transparent" className="p-7 shadow-2xl h-[80%] w-full text-center items-center md:w-[50%]" shadow={false}>
                <p className="text-center text-3xl font-bold">Create New Account</p>
                <form className="mt-8 mb-2 w-full flex flex-col gap-7">
                    <div className="flex gap-7 flex-col md:flex-row">
                        <Input label="First Name" className="bg-white" />
                        <Input label="Last Name" className="bg-white" />
                    </div>
                    <div className="mb-1 flex flex-col gap-6">
                        <Input label="User Name" className="bg-white" />
                        <Input label="Email" className="bg-white" />
                        <Input label="Password" className="bg-white" />
                    </div>
                    <div className="flex gap-7 flex-col md:flex-col">
                        <Input label="First Name" className="bg-white" />
                        <Select size="md" label="City">
                            <Option>male</Option>
                            <Option>female</Option>
                        </Select>   
                        <Input label="Phone Number" className="bg-white" />                 
                    </div>
                    <Button className="mt-6 grow" >
                        Create Account
                    </Button>
                </form>
            </Card>
        </div>
    )
}


export default CreateNewAccount;