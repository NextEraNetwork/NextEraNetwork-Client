'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoIosArrowDown, IoIosApps } from "react-icons/io";
// import useDarkMode from '@/hooks/useDarkMode';

interface Link {
    _id: number;
    label: string;
    path: string;
    subMenu?: Link[];
}

const Links: Link[] = [
    { _id: 1, label: 'About', path: "#about" },
    { _id: 2, label: 'Achievement', path: "#acheivement" },
    { _id: 3, label: 'Projects', path: '#project' },
    { _id: 4, label: 'Education', path: '#education' },
    { _id: 5, label: 'Certificate', path: "#certificate" },
    { _id: 6, label: 'Experience', path: '#experience' },
];

const ProfileHeader: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredDropdown, setHoveredDropdown] = useState<number | null>(null);
    const [hoveredSubDropdown, setHoveredSubDropdown] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState<string>("/");
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    
    // const router = useRouter();

    const handleNavClick = (path: string) => {
        if (path.startsWith("#")) {
            const sectionId = path.substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            } else {
                // router.push('/');
                setTimeout(() => {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100);
            }
            setActiveSection(path);
        } else {
            // router.push(path);
            setActiveSection(path);
        }
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = Links
                .filter(link => link.path.startsWith("#"))
                .map(link => document.getElementById(link.path.substring(1)));

            let currentSection = "/";
            sections.forEach(section => {
                if (section) {
                    const sectionTop = section.offsetTop - 100; 
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
        <header className={`sticky top-0 flex items-center bg-black dark:bg-gray-950 shadow-sm lg:shadow-none dark:shadow-md shadow-white text-white px-3 p-2 transition-all duration-500 z-[997] ${isMobileMenuOpen ? 'shadow-md' : ''}`}>
            <div className="container lg:mx-20 flex items-center justify-between relative">
                <div className='flex items-center justify-between w-full'>
                    <Link href="/" className="flex items-center justify-center gap-2">
                        <div className="flex items-center text-xl lg:text-3xl">Jinesh Prajapat</div>
                    </Link>
                    <div className='lg:hidden'>
                        {/* <DarkModeToggle /> */}
                    </div>
                </div>

                {windowWidth < 1024 && isMobileMenuOpen ? (
                    // <HeaderMobile
                    //     isMobileMenuOpen={isMobileMenuOpen}
                    //     setIsMobileMenuOpen={setIsMobileMenuOpen}
                    // />
                    <p>Mobile Header</p>
                ) : (
                    <nav className={`lg:flex lg:items-center lg:relative lg:shadow-none flex gap-8 ${!isMobileMenuOpen ? "hidden" : ""}`}>
                        <ul className={`text-left list-none py-4 lg:flex lg:space-x-10 ${isMobileMenuOpen ? 'flex flex-col space-y-4 p-4 bg-white mx-6 my-10 h-[90vh] text-black rounded-md overflow-x-auto overflow-y-scroll' : 'lg:flex-row'}`}>
                            {Links.map((link, index) => (
                                <li
                                    key={link._id}
                                    className="relative"
                                    onMouseEnter={() => setHoveredDropdown(index)}
                                    onMouseLeave={() => setHoveredDropdown(null)}
                                >
                                    <span
                                        onClick={() => handleNavClick(link.path)}
                                        className={`cursor-pointer relative font-medium transition-all duration-500 flex items-center justify-between gap-1
                                            before:content-[''] before:absolute before:w-full before:h-[2px] before:bottom-[-5px] before:left-0 lg:before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:ease-in-out
                                            hover:before:scale-x-100 ${activeSection === link.path ? "lg:before:scale-x-100 text-blue-600 lg:text-white" : ""}`}
                                    >
                                        {link.label}
                                        {link.subMenu && <IoIosArrowDown />}
                                    </span>

                                    {link.subMenu && (
                                        <ul
                                            className={`${!isMobileMenuOpen ? "absolute left-0 mt-4 w-max bg-white dark:bg-gray-800 dark:text-gray-300 text-black rounded-md shadow-lg" : "bg-gray-100 rounded-md"} transition-all duration-300 ease-in ${hoveredDropdown === index ? 'lg:translate-y-0 lg:opacity-100 visible' : 'lg:translate-y-4 lg:opacity-0 lg:invisible'}`}
                                            onMouseEnter={() => setHoveredDropdown(index)}
                                            onMouseLeave={() => setHoveredDropdown(null)}
                                        >
                                            {link.subMenu.map((subLink, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    className="relative"
                                                    onMouseEnter={() => setHoveredSubDropdown(subIndex)}
                                                    onMouseLeave={() => setHoveredSubDropdown(null)}
                                                >
                                                    <span
                                                        onClick={() => handleNavClick(subLink.path)}
                                                        className={`cursor-pointer flex items-center justify-between gap-2 px-4 py-2 hover:text-blue-700 transition-all duration-500 ${isMobileMenuOpen ? "font-normal" : ""}`}
                                                    >
                                                        {subLink.label}
                                                        {subLink.subMenu && <IoIosArrowDown />}
                                                    </span>
                                                    {subLink.subMenu && (
                                                        <ul
                                                            className={`${!isMobileMenuOpen ? "absolute right-full top-0 mt-0 w-max bg-white dark:bg-gray-800 dark:text-gray-300 text-black rounded-md shadow-lg" : ""} transition-all duration-300 ease-in ${hoveredSubDropdown === subIndex ? 'translate-x-2 lg:translate-x-0 lg:opacity-100 lg:visible block' : 'lg:translate-x-4 lg:opacity-0 lg:invisible hidden'}`}
                                                            onMouseEnter={() => setHoveredSubDropdown(subIndex)}
                                                            onMouseLeave={() => setHoveredSubDropdown(null)}
                                                        >
                                                            {subLink.subMenu.map((deepLink, deepIndex) => (
                                                                <li key={deepIndex}>
                                                                    <span
                                                                        onClick={() => handleNavClick(deepLink.path)}
                                                                        className={`cursor-pointer block px-4 py-2 hover:text-blue-700 transition-all duration-300 ${isMobileMenuOpen ? "font-light" : ""}`}
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
                        </ul>
                        {/* <DarkModeToggle /> */}
                    </nav>
                )}
                <IoIosApps className='lg:hidden text-3xl' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>
        </header>
    );
};

export default ProfileHeader;