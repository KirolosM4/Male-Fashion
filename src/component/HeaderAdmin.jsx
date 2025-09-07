import React, { useContext } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";
import logo from "../../public/logo.png";
function NavList() {
    return (
        <ul className="my-5 lg:mb-0 lg:mt-0">
            <Typography
                as="li"
                variant="small"
                color="white"
                className="font-medium text-center md:text-end font-bold"
            >
                <Link to="/" className="block my-2 hover:text-black transition-colors">
                    Home
                </Link>
            </Typography>
        </ul>
    );
}


const HeaderAdmin = () => {
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
        <Navbar className="max-w-screen-3xl px-6 py-3 bg-[#475569] rounded-none">
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

export default HeaderAdmin;