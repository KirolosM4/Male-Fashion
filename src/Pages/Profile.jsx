import React, { useContext } from "react";
import Store from "../Context/Store";
import {
  Card,
  Input,
  Button,
} from "@material-tailwind/react";
import {Link} from "react-router-dom";
const Profile = () => {
    // start context store 
    const {loggUser} = useContext(Store)


    // end context store 
    return(
        <div className="container mx-auto flex flex-col gap-2">
            <p className="p-7 text-2xl font-bold border-b-2 border-gray-500 text-center md:text-left">My Profile</p>
            <div className="h-[50vh] md:h-[80vh] w-full flex justify-center items-center">
                <img src={loggUser.image} className="h-[80%] md:h-1/2 md:h-full rounded-full py-5" alt="" />
            </div>
            <div className="py-5 border-b-2 border-gray-500 flex flex-col gap-2 text-center md:text-left">
                <p className="text-green-500 font-bold">{loggUser.firstName}</p>
                <p className="opacity-50">Username: {loggUser.userName}</p>
                <p>My First Name is {loggUser.firstName} and My Last Name is {loggUser.lastName}</p>
                <p>I'm {loggUser.gender} and I'm {loggUser.role} in this site.</p>
            </div>
            <Card color="transparent" shadow={false} className="p-7">
                <form className="mt-8 flex flex-col gap-4">
                        <div>
                            <Input label="Full Name" readOnly="true" value={loggUser.firstName}/>
                            <p className="text-xs md:text-sm opacity-50 py-2"><span>Better to have real name to give to others that they are dealing with a real peersonality.</span> <span className="block">Note:Enough to just have your first name and last name</span></p>
                        </div>
                        <div>
                            <Input label="Email" readOnly="ture" value={loggUser.email}/>
                            <p className="text-xs md:text-sm opacity-50 py-2">Better to have readable email to giva a good impression to others that they are dealing with a real peersonality.</p>
                        </div>
                        <div>
                            <Input label="Gender" readOnly="true" value={loggUser.gender}/>
                            <p className="text-xs md:text-sm opacity-50 py-2">Please note that we do not support homosexuality</p>

                        </div>
                        <div>
                            <Input label="UserName" disabled="true" value={loggUser.userName}/>
                            <p className="text-xs md:text-sm opacity-50 py-2">The username is used for the login process and you can never change it.</p>
                        </div>
                    <Button color="green" variant="outlined" className="w-fit">
                        <Link to="/profile/editprofile">Edit Profile</Link>
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default Profile;