'use client'
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { IonIcon } from "@ionic/react";
import { eye, lockClosed, shieldHalf } from "ionicons/icons";
import { BiArrowBack } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const SettingMenu = [
    { name: "Sign In & Security", icon: lockClosed, path: "/dashboard/setting/security" },
    { name: "Visibility", icon: eye, path: "/dashboard/setting/visibility" },
    { name: "Account Management", icon: shieldHalf, path: "/dashboard/setting/accountManagement" },
];

const InfoMenu = [
    { name: "Help Center", path: "/dashboard/setting/helpCenter" },
    { name: "Professional Communication Policy", path: "/dashboard/setting/communication-policy" },
    { name: "Privacy Policy", path: "/dashboard/setting/privacy-policy" },
    { name: "User Agreement", path: "/dashboard/setting/userAgreement" }
];

const Settings: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    console.log("pathna,e", pathname)

    const handleCancel = () => {
        router.back(); // Navigate back to previous page
    };

    return (
        <div className='bg-white h-full font-sans'>
            <div className="header flex items-center p-3 sticky top-0 border-b-2 bg-white border-gray-300">
                <div className='cursor-pointer sm:pl-2' onClick={handleCancel}>
                <BiArrowBack className="text-xl"></BiArrowBack>
                </div>
                <p className='text-xl pl-3 '>
                    <span>Settings</span>
                </p>
            </div>

            <div className='content text-justify'>
                {pathname === "/dashboard/setting" && (
                    <>
                        <ul className='sm:py-4'>
                            {SettingMenu.map((menu, index) => (
                                <li key={index} className='links px-3 hover:bg-gray-100 flex justify-between items-center'>
                                    <Link className={`flex items-center gap-2 py-3`} href={menu.path}>
                                        <span className={`text-xl sm:text-2xl pl-2 flex items-center`}>
                                            <IonIcon icon={menu.icon} />
                                        </span>
                                        <span>{menu.name}</span>
                                    </Link>
                                    <BsArrowRight className=""></BsArrowRight>
                                </li>
                            ))}
                        </ul>

                        <ul className='sm:py-4'>
                            {InfoMenu.map((menu, index) => (
                                <li key={index} className='links px-3 hover:bg-gray-100'>
                                    <Link className={`flex items-center gap-2 py-3 font-semibold text-gray-700 hover:text-black`} href={menu.path}>
                                        <span className={`text-xs`}>{menu.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default Settings;
