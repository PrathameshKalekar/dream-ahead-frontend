import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Link,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faPhone, faBook, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import DreamAhead from "../../assets/svg/dream-ahead.svg"; // Ensure the path is correct

const navItems = [
    { label: "Home", to: "/", icon: faHome },
    { label: "About", to: "/about", icon: faInfoCircle },
    { label: "Contact", to: "/contact", icon: faPhone },
];

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar shouldHideOnScroll className="bg-white border-b border-orange-200">
            <NavbarBrand className="flex items-center">
                <div className="p-2">
                    <img src={DreamAhead} width={40} height={40} alt="Dream Ahead Logo" />
                </div>
                <p className="font-bold text-orange-600 ml-2">Dream Ahead</p>
            </NavbarBrand>

            {/* Hamburger Menu Button */}
            <Button
                auto
                light
                icon={<FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />}
                className="sm:hidden ml-auto p-1 text-xl"
                onClick={() => setMenuOpen(!menuOpen)}
            />

            {/* Navbar Content */}
            <NavbarContent
                className={`${menuOpen ? "block" : "hidden"
                    } sm:flex flex-col sm:flex-row gap-2 sm:gap-4 absolute sm:static top-full left-0 w-full sm:w-auto bg-white border-b sm:border-0 border-orange-200`}
                justify="center"
            >
                {navItems.map((item) => (
                    <NavbarItem key={item.to}>
                        <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-600 font-semibold border-b-2 border-orange-600 flex items-center py-2"
                                    : "text-orange-600 hover:text-yellow-500 flex items-center py-2"
                            }
                        >
                            <FontAwesomeIcon icon={item.icon} className="text-xl mr-2" />
                            <span>{item.label}</span>
                        </NavLink>
                    </NavbarItem>
                ))}
                <NavbarItem>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-2 bg-transparent font-semibold text-orange-600 flex items-center"
                                endContent={<ChevronDown fill="currentColor" size={16} />}
                                radius="sm"
                                variant="light"
                            >
                                <FontAwesomeIcon icon={faBook} className="text-xl mr-2" />
                                <span>Courses</span>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Courses" className="w-[240px]">
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

            {/* Right side links */}
            <NavbarContent justify="end" className="hidden sm:flex">
                <NavbarItem>
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
