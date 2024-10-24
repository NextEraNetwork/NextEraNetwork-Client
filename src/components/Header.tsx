'use client';

import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosApps } from "react-icons/io";
import Link from 'next/link';
import images from '@/utils/images';
import Image from 'next/image';

// Define the types for the nav links
interface SubMenuLink {
    _id: number;
    label: string;
    path?: string;
    subMenu?: SubMenuLink[];
}

interface NavLink {
    _id: number;
    label: string;
    path?: string;
    subMenu?: SubMenuLink[];
}

// Nav links array
// Nav links array
const navLinks: NavLink[] = [
    
    { _id: 1, label: 'Features', path: "/about" },
    { _id: 2, label: 'Pricing', path: '/services' },
    { _id: 3, label: 'Customers', path: "/blog" },
    {
        _id: 4, label: 'More',
        subMenu: [
            {
                _id: 0, label: 'Research',
                subMenu: [
                    { _id: 0, label: 'Machine Learning', path: '/researches/machine-learning' },
                    { _id: 1, label: 'Computer Vision', path: '/researches/computer-vision' },
                    { _id: 2, label: 'Natural Language Processing', path: '/researches/natural-language-processing' },
                    { _id: 3, label: 'AI Application', path: '/researches/ai-application' },
                ],
            },
            {
                _id: 1, label: 'Courses',
                subMenu: [
                    { _id: 0, label: 'Machine Learning', path: '/courses/machine-learning' },
                    { _id: 1, label: 'Computer Vision', path: '/courses/computer-vision' },
                    { _id: 2, label: 'Deep Learning', path: '/courses/deep-learning' },
                    { _id: 3, label: 'Natural Language Processing', path: '/courses/natural-language-processing' },
                    { _id: 4, label: 'Quantum Computing', path: '/courses/quantum-computing' },
                ],
            },
            { _id: 2, label: 'Newsletter', path: "/newsletter" },
        ],
    },
    { _id: 5, label: '', path: '#contact' },
];




const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [hoveredDropdown, setHoveredDropdown] = useState<number | null>(null);
    const [hoveredSubDropdown, setHoveredSubDropdown] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState<string>("/");
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const handleNavClick = (path: string) => {
        if (path && path.startsWith("#")) {
            const sectionId = path.substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
            setActiveSection(path);
        } else {
            // For internal paths
            window.location.href = path; // Replace with your routing logic
            setActiveSection(path);
        }
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks
                .filter(link => link.path && link.path.startsWith("#"))
                .map(link => document.getElementById(link?.path?.substring(1) || ""));

            let currentSection = "/";
            sections.forEach(section => {
                if (section) {
                    const sectionTop = section.offsetTop - 100; // Adjust as needed
                    if (window.scrollY >= sectionTop) {
                        currentSection = `#${section.id}`;
                    }
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className={`sticky top-0 flex items-center bg-white dark:bg-gray-950 shadow-md shadow-slate-200  dark:shadow-md dark:shadow-gray-800  text-black p-4 transition-all duration-500 z-[997] ${isMobileMenuOpen ? 'shadow-md' : ''}`}>
            <div className="container lg:mx-20 flex items-center justify-between relative">
                <div className='flex items-center justify-between w-full'>
                    <Link href="/" className="flex items-center gap-2">
                        {/* Replace with your logo and brand name */}
                        <div className="h-8 lg:h-14"><Image src={images?.garudblack} alt='logo' className='h-full w-full' /></div>
                        <div className="text-2xl">NextEraNetwork</div>
                    </Link>
                </div>

                {windowWidth < 1024 && isMobileMenuOpen ? (
                    <nav className="absolute top-16 left-0 right-0 bg-black text-white rounded-md shadow-lg p-4 z-50">
                        <ul className="flex flex-col space-y-4">
                            {navLinks.map((link, index) => (
                                <li key={link._id} className="relative">
                                    <span
                                        onClick={() => handleNavClick(link?.path || "")}
                                        className={`cursor-pointer flex justify-between items-center p-2 transition-all duration-300 ${hoveredDropdown === index ? 'bg-gray-800' : ''}`}
                                        onMouseEnter={() => setHoveredDropdown(index)}
                                        onMouseLeave={() => setHoveredDropdown(null)}
                                    >
                                        {link.label}
                                        {link.subMenu && <IoIosArrowDown />}
                                    </span>
                                    {link.subMenu && hoveredDropdown === index && (
                                        <ul className="ml-4 mt-2 flex flex-col space-y-2 bg-gray-900 rounded-md p-2">
                                            {link.subMenu.map((subLink) => (
                                                <li key={subLink._id}>
                                                    <span
                                                        onClick={() => handleNavClick(subLink.path || "")}
                                                        className="cursor-pointer hover:text-blue-500 transition-all duration-300"
                                                    >
                                                        {subLink.label}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                            <button className='bg-blue-500 py-2 rounded-full'>Request Demo</button>
                        </ul>
                    </nav>
                ) : (
                    <nav className={`lg:flex lg:items-center lg:relative lg:shadow-none flex gap-8 ${!isMobileMenuOpen ? "hidden" : ""}`}>
                        <ul className={`text-left list-none py-4 lg:flex lg:space-x-10 ${isMobileMenuOpen ? 'flex flex-col space-y-4 p-4 bg-black mx-6 my-10 h-[90vh] text-black rounded-md overflow-x-auto overflow-y-scroll' : 'lg:flex-row'}`}>
                            {navLinks.map((link, index) => (
                                <li
                                    key={link._id}
                                    className="relative"
                                    onMouseEnter={() => setHoveredDropdown(index)}
                                    onMouseLeave={() => setHoveredDropdown(null)}
                                >
                                    <span
                                        onClick={() => handleNavClick(link?.path || "")}
                                        className={`cursor-pointer relative font-medium transition-all duration-500 flex items-center justify-between gap-1
                                            before:content-[''] before:absolute before:w-full before:h-[2px] before:bottom-[-5px] before:left-0 lg:before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:ease-in-out
                                            hover:before:scale-x-100 whitespace-nowrap ${activeSection === link.path ? "lg:before:scale-x-100 text-blue-600 lg:text-black" : ""}`}
                                    >
                                        {link.label}
                                        {link.subMenu && <IoIosArrowDown />}
                                    </span>

                                    {link.subMenu && (
                                        <ul
                                            className={`${!isMobileMenuOpen ? "absolute left-0 mt-4 w-max bg-wite dark:bg-gray-800 dark:text-gray-300 text-black rounded-md shadow-lg" : "bg-gray-100 rounded-md"} transition-all duration-300 ease-in ${hoveredDropdown === index ? 'lg:translate-y-0 lg:opacity-100 visible' : 'lg:translate-y-4 lg:opacity-0 lg:invisible'}`}
                                        >
                                            {link.subMenu.map((subLink, subIndex) => (
                                                <li
                                                    key={subLink._id}
                                                    className="relative"
                                                    onMouseEnter={() => setHoveredSubDropdown(subIndex)}
                                                    onMouseLeave={() => setHoveredSubDropdown(null)}
                                                >
                                                    <span
                                                        // onClick={() => handleNavClick(subLink.path)}
                                                        className={`cursor-pointer flex items-center justify-between gap-2 px-4 py-2 hover:text-blue-700 transition-all duration-500`}
                                                    >
                                                        {subLink.label}
                                                        {subLink.subMenu && <IoIosArrowDown />}
                                                    </span>
                                                    {subLink.subMenu && (
                                                        <ul
                                                            className={`${!isMobileMenuOpen ? "absolute right-full top-0 mt-0 w-max bg-white dark:bg-gray-800 dark:text-gray-300 text-black rounded-md shadow-lg" : ""} transition-all duration-300 ease-in ${hoveredSubDropdown === subIndex ? 'translate-x-2 lg:translate-x-0 lg:opacity-100 lg:visible block' : 'lg:translate-x-4 lg:opacity-0 lg:invisible hidden'}`}
                                                        >
                                                            {subLink.subMenu.map((deepLink) => (
                                                                <li key={deepLink._id}>
                                                                    <span
                                                                        // onClick={() => handleNavClick(deepLink.path)}
                                                                        className={`cursor-pointer block px-4 py-2 hover:text-blue-700 transition-all duration-300`}
                                                                    >
                                                                        {deepLink.label}
                                                                    </span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}

                            <button className='bg-blue-500 py-2 px-4 rounded-full whitespace-nowrap'>Request Demo</button>
                            <Link href={"/login"}>LogIn</Link>
                            <Link href={"/signup"}>SignUp</Link>
                        </ul>


                    </nav>
                )}
                <IoIosApps className='lg:hidden text-3xl' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>
        </header>
    );
};

export default Header;
