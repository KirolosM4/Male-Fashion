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
function NavList({cartProduct}) {
    return (
        <ul className="my-5 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-between">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="font-medium lg:flex lg:gap-7 text-center"
            >
                <Link to="/" className="block my-2 hover:text-blue-500 transition-colors">
                    Home
                </Link>

                <Link to="/shop" className="block my-2 hover:text-blue-500 transition-colors">
                    Shop
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="font-medium lg:flex lg:gap-7 text-center"
            >
                <Link to="/cart" className="block my-2 hover:text-blue-500 transition-colors relative">
                    <span className={`text-white ${cartProduct.length > 0 ? "bg-green-500" : "bg-red-500"} rounded-full absolute left-[50%] top-[-30%] md:right-[-30%] md:top-[-30%] px-1 w-fit`}>{cartProduct.length ? cartProduct.length : 0}</span>
                    <IoBagOutline className="text-xl inline" />
                </Link>
                <Link to="/signin" className="block my-2 hover:text-blue-500 transition-colors">
                    <TbLogout className="text-xl inline" />
                </Link>
            </Typography>
        </ul>
    );
}


const HeaderClient = ({cartProduct}) => {
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
                    <NavList cartProduct={cartProduct} />
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
                <NavList cartProduct={cartProduct}/>
            </Collapse>
        </Navbar>
    );
}

export default HeaderClient;