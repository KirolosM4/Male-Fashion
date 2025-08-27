import React from "react";
import {
  Card,
  Input,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
const SignIn = () => {
    return(
        <div className="h-[70vh] flex justify-center items-center">
            <Card color="transparent" className="p-7 shadow-2xl" shadow={false}>
                <p className="text-center text-3xl font-bold">Sign In</p>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Input label="Username" className="bg-white" />
                        <Input label="Email" className="bg-white" />
                        <Input label="Password" className="bg-white" />
                    </div>
                    <div className="flex gap-7">
                        <Button className="mt-6">
                        Sign In
                        </Button>
                        <Button className="mt-6 grow" >
                            <Link to="/createnewaccount">Create New Account</Link>
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default SignIn;