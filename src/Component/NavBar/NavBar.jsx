import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import DreamAhead from "../../assets/svg/dream-ahead.svg"; // Ensure the path is correct

const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
];

export default function NavBar() {
    return (
        <Navbar shouldHideOnScroll className="bg-white/50 backdrop-blur-md border-b border-orange-200">
            <NavbarBrand>
                <div className="p-2">
                    <img src={DreamAhead} width={40} height={40} alt="Dream Ahead Logo" />
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
                                    ? 'text-orange-600 font-semibold border-b-2 border-orange-600'
                                    : 'text-orange-600 hover:text-yellow-500'
                            }
                        >
                            {item.label}
                        </NavLink>
                    </NavbarItem>
                ))}
                <NavbarItem>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent font-semibold text-orange-600 "
                                endContent={<ChevronDown fill="currentColor" size={16} />}
                                radius="sm"
                                variant="light"
                            >
                                Courses
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Courses"
                            className="w-[240px]"
                        >
                            <DropdownItem>
                                <NavLink
                                    to="/courses/course1"
                                    className="text-orange-600 hover:text-yellow-500"
                                >
                                    Course 1
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink
                                    to="/courses/course2"
                                    className="text-orange-600 hover:text-yellow-500"
                                >
                                    Course 2
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#" className="text-orange-600 hover:text-yellow-500">
                        Login
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        as={Link}
                        color="warning"
                        href="#"
                        variant="flat"
                        className="text-white bg-gradient-to-r from-orange-500 to-yellow-500"
                    >
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

function ChevronDown(props) {
    return (
        <svg width={props.size} height={props.size} fill={props.fill} viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5H7z" />
        </svg>
    );
}
