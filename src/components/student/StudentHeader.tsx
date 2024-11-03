import React, { useState, useRef } from 'react';
// import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { images } from '@/utils/images';
import Image from 'next/image';
import Link from 'next/link';
import { IonIcon } from "@ionic/react";
import { notificationsSharp, chatbubblesOutline, options, createOutline, personOutline, settingsOutline, helpCircleOutline, moonOutline, logOutOutline } from "ionicons/icons";
import LogOutButton from './LogOutButton';
import SlideIn from './SlideIn';
import useClickOutside from '@/hooks/useClickOutside';


export const StudentHeader: React.FC = () => {
    const [isProfileBar, setIsProfileBar] = useState<boolean>(false);
    const [isSlideInToggle, setIsSildeInToggle] = useState<boolean>(false);


    // profile controls
    const profilePath = ``;
    const ProfileMenufirst = [
        { name: "My Profile", icon: personOutline, path: "/user/username" },
        { name: "Edit Profile", icon: createOutline, path: '/dashboard/edit-profile' },
        { name: "Setting", icon: settingsOutline, path: "/dashboard/setting" },
    ]
    const ProfileMenuSecond = [
        { name: "Help Center", icon: helpCircleOutline, path: "/dashboard/setting/helpCenter" },
    ]

    const profileRef = useRef<HTMLDivElement>(null);
    const slideInRef = useRef<HTMLDivElement>(null);

    const onCloseSlideIn = ()=>{
        setIsSildeInToggle(false);
    }

    const onCloseProfile = ()=>{
        setIsProfileBar(false);
    }

    useClickOutside(slideInRef, isSlideInToggle, onCloseSlideIn);
    useClickOutside(profileRef, isProfileBar, onCloseProfile);


    const handleProfileClick = (isProfileBar: boolean) => {
        setIsProfileBar(!isProfileBar);
    }

    return (
        <header className="flex justify-between items-center border-b  border-[#DBDBDB] md:p-2 md:px-8 bg-white">
            {/* Search bar */}
            <Link href={"/dashboard"} className="flex items-center w-full max-w-lg gap-2 rounded-lg px-4 py-2">
                <Image src={images.ctaelogo} alt="ctae logo" className='w-8 h-8 lg:w-15 lg:h-15' />
                <h1 className='base lg:text-xl md:font-extrabold text-black hidden md:block'>College of Technology and Engineering</h1>
            </Link>

            {/* Right-side container */}
            <div className="flex items-center gap-2 md:gap-8">
                {/* <div className="flex items-center gap-4">
                    <IoNotificationsOutline className="text-gray-500" />
                </div> */}

                <div
                    className={`hamburger chat-option w-6 h-6 sm:hidden   ${isSlideInToggle === true && ""}`}
                    onClick={() => setIsSildeInToggle(!isSlideInToggle)}
                >
                    <IonIcon icon={options} className=' w-full text-gray-500 ' />
                </div>

                {/* User info */}
                <div className="flex items-center gap-4">
                    <div className="flex-col text-right hidden md:flex">
                        <span className="text-sm font-medium whitespace-nowrap">Jinesh Prajapat</span>
                        <span className="text-xs text-grey whitespace-nowrap">Rajasthan, India</span>
                    </div>

                    {/* Profile picture and dropdown */}
                    <div className="flex items-center gap-2 cursor-pointer"
                        onClick={() => setIsProfileBar(!isProfileBar)}
                    >
                        <Image
                            src={images.garudblack}
                            alt="Profile"
                            className=" w-6 h-6 md:w-10 md:h-10 rounded-full"
                        />
                        <IoIosArrowDown className="text-grey " />
                    </div>
                </div>
            </div>

            {isSlideInToggle && (
                <div ref={slideInRef}>
                    <SlideIn
                        isSlideInToggle={isSlideInToggle}
                        setIsSlideInToggle={setIsSildeInToggle}
                    />
                </div>
            )}


            {isProfileBar && (
                <div ref={profileRef} className={`flex flex-col fixed shadow-md w-[254px] sm:w-[295px] top-12 right-4 sm:top-20 sm:right-6 z-50 `}>
                    <div className=' pt-3 pb-4 w-[254px] sm:w-[295px] absolute bg-white rounded-lg shadow-2xl shadow-black '>
                        <div className=' px-4 pb-3 text-left font-sans'>
                            <div className='text-[16px] sm:text-2xl '>{"fullName"}</div>
                            <div className=' text-xs  sm:text-[16px] '>{"email"}</div>
                        </div>
                        <hr className=' m-0' />
                        <ul className='px-3 sm:py-4  '>
                            {ProfileMenufirst.map((menu, index) => (
                                <li className='links'>
                                    <Link
                                        className={`flex items-center gap-2 py-3 rounded-full hover:bg-blue-400 hover:text-white`}
                                        href={menu.path}
                                        onClick={() => handleProfileClick(isProfileBar)}
                                    >
                                        <span className={`text-xl sm:text-2xl pl-2 flex items-center `}>
                                            <IonIcon icon={menu.icon} />
                                        </span>
                                        <span className={``}>
                                            {menu.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <hr className='m-0' />
                        <ul className='px-3 sm:py-4'>
                            {ProfileMenuSecond.map((menu, index) => (
                                <li className='links'>
                                    <Link
                                        className={`flex items-center gap-2 py-3 rounded-full hover:bg-blue-400 hover:text-white`}
                                        href={menu.path}
                                        // activeClassName="bg-blue-400 text-white"
                                        onClick={() => handleProfileClick(isProfileBar)}
                                    >
                                        <span className={`text-xl sm:text-2xl pl-2 flex items-center`}>
                                            <IonIcon icon={menu.icon} />
                                        </span>
                                        <span className={`flex`}>
                                            {menu.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <hr className=' m-0' />
                        <ul className='px-3 sm:pt-4'>
                            <li className='links'>
                                <li
                                    className={`flex items-center gap-2 py-3 rounded-full hover:bg-blue-400 hover:text-white`}
                                >
                                    <span className={` text-2xl pl-2 flex items-center `}>
                                        <IonIcon icon={logOutOutline} />
                                    </span>
                                    <LogOutButton />
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

        </header>
    );
};

// export default StudentHeader;
