import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faPhone, faBook } from "@fortawesome/free-solid-svg-icons";
import DreamAhead from "../../assets/svg/dream-ahead.svg"; // Ensure the path is correct

const navItems = [
    { label: "Home", to: "/dream-ahead-frontend/", icon: faHome },
    { label: "About", to: "/about", icon: faInfoCircle },
    { label: "Contact", to: "/contact", icon: faPhone },
];

export default function NavBar() {
    const [show, setShow] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setShow(false); // Scrolling down
            } else {
                setShow(true); // Scrolling up
            }
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollTop]);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    useEffect(() => {
        // Close mobile menu when navigating or scrolling
        const handleNavigationOrScroll = () => {
            if (mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("scroll", handleNavigationOrScroll);
        return () => window.removeEventListener("scroll", handleNavigationOrScroll);
    }, [mobileMenuOpen]);

    return (
        <nav className={`fixed top-0 w-full bg-white shadow-lg py-2 px-4 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6">
                {/* Logo */}
                <div className="flex items-center mr-4 sm:mr-8">
                    <img src={DreamAhead} width={40} height={40} alt="Dream Ahead Logo" />
                    <p className="font-bold font-[Comic Sans MS] text-orange-600 ml-2 text-lg">Dream Ahead</p>
                </div>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center flex-grow justify-end space-x-6">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-600 font-semibold border-b-2 border-orange-600 flex items-center py-2 px-3"
                                    : "text-orange-600 hover:text-yellow-500 flex items-center py-2 px-3"
                            }
                        >
                            <FontAwesomeIcon icon={item.icon} className="text-xl mr-2" />
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                    <div className="relative group">
                        <button
                            className="text-orange-600 hover:text-yellow-500 flex items-center py-2 px-3"
                            onClick={toggleDropdown}
                        >
                            <FontAwesomeIcon icon={faBook} className="text-xl mr-2" />
                            <span>Courses</span>
                            <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        {dropdownOpen && (
                            <div className="absolute bg-white shadow-lg border mt-1 rounded w-40">
                                <NavLink to="/courses/course1" className="block px-4 py-2 text-orange-600 hover:bg-yellow-100">
                                    Course 1
                                </NavLink>
                                <NavLink to="/courses/course2" className="block px-4 py-2 text-orange-600 hover:bg-yellow-100">
                                    Course 2
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side Links */}
                <div className="hidden sm:flex items-center space-x-4 ml-4">
                    <NavLink to="#" className="text-orange-600 hover:text-yellow-500 py-2 px-3">Login</NavLink>
                    <NavLink to="#" className="text-white bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-md">
                        Sign Up
                    </NavLink>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="sm:hidden">
                    <button
                        type="button"
                        className="text-orange-600 hover:text-yellow-500 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className={`sm:hidden transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} shadow-lg py-4`}>
                    <div className="flex flex-col px-4">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className="block text-orange-600 hover:bg-yellow-100 hover:text-yellow-500 py-2 px-3"
                            >
                                <FontAwesomeIcon icon={item.icon} className="text-xl mr-2" />
                                {item.label}
                            </NavLink>
                        ))}
                        <div className="relative mt-2">
                            <button
                                className="flex items-center py-2 px-3 w-full text-orange-600 hover:bg-yellow-100"
                                onClick={toggleDropdown}
                            >
                                <FontAwesomeIcon icon={faBook} className="text-xl mr-2" />
                                <span>Courses</span>
                            </button>
                            {dropdownOpen && (
                                <div className="absolute bg-white shadow-lg border mt-1 rounded w-full">
                                    <NavLink to="/courses/course1" className="block px-4 py-2 text-orange-600 hover:bg-yellow-100">
                                        Course 1
                                    </NavLink>
                                    <NavLink to="/courses/course2" className="block px-4 py-2 text-orange-600 hover:bg-yellow-100">
                                        Course 2
                                    </NavLink>
                                </div>
                            )}
                        </div>
                        <div className="mt-4">
                            <NavLink to="#" className="block text-orange-600 hover:bg-yellow-100 py-2 px-3">Login</NavLink>
                            <NavLink to="#" className="block text-white bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-md mt-2">
                                Sign Up
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </nav>

    );
}
