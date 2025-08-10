import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import logo from "../../public/logo.png";
function NavList() {
    return (
        <ul className="my-5 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-between">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="font-medium lg:flex lg:gap-7 text-center"
            >
                <Link to="" className="block my-2 hover:text-blue-500 transition-colors">
                    Home
                </Link>

                <Link to="" className="block my-2 hover:text-blue-500 transition-colors">
                    Shop
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="font-medium lg:flex lg:gap-7 text-center"
            >
                <Link to="" className="block my-2 hover:text-blue-500 transition-colors">
                    <IoBagOutline className="text-xl inline" />

                </Link>
                <Link to="" className="block my-2 hover:text-blue-500 transition-colors">
                    <TbLogout className="text-xl inline" />
                </Link>
            </Typography>
        </ul>
    );
}


const HeaderClient = () => {
    const [openNav, setOpenNav] = React.useState(false);
    
    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);
    
    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
    
        return () => {
        window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    
    return (
        <Navbar className="max-w-screen-3xl px-6 py-3">
            <div className="container mx-auto flex items-center justify-between items-center text-blue-gray-900">
                <Typography
                as="a"
                href="#"
                variant="h6"
                className="mr-4 cursor-pointer py-1.5"
                >
                    <img src={logo} alt="" />
                </Typography>
                <div className="hidden lg:block lg:w-1/2">
                    <NavList />
                </div>
                <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}

export default HeaderClient;