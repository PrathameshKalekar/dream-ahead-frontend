import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import DreamAhead from "../../assets/svg/dream-ahead.svg"; // Update this path to your logo's actual path

const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Courses', to: '/courses' },
];

export default function NavBar() {
    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <div className="p-2">
                    <img src={DreamAhead} width={40} height={40} alt="Dream Ahead Logo"></img>
                </div>
                <p className="font-bold text-orange-600">Dream Ahead</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {navItems.map((item) => (
                    <NavbarItem key={item.to}>
                        <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-yellow-600 font-bold'
                                    : 'text-orange-600 hover:text-yellow-600'
                            }
                        >
                            {item.label}
                        </NavLink>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#" className="text-orange-600 hover:text-yellow-600">
                        Login
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="warning" href="#" variant="flat" className="text-white bg-gradient-to-r from-orange-500 to-yellow-500">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
