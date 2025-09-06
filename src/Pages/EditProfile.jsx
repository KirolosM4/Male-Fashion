import React, { useContext } from "react";
import Store from "../Context/Store";

const EditProfile = () => {
    // start context store 
    const {loggUser} = useContext(Store);
    // end context store 
    return(
        <div className="container mx-auto">
            <div>
                <img src={loggUser.image} alt="" />
                <p className="text-2xl">My Profile Ready To Changed ...</p>
            </div>
        </div>
    )
}

export default EditProfile;