'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';

const AccountManagement: React.FC = () => {
    const router = useRouter();
    const path = usePathname();

    const AccountManagementMenu = [
        { name: "Delete Account", path: "/dashboard/setting/accountManagement/deleteAccount" },
    ];

    return (
        <div className='bg-white h-full'>
            <div className="header flex items-center p-3 sticky top-0 border-b-2 bg-white border-gray-300">
                <div className='cursor-pointer sm:pl-2' onClick={() => router.back()}>
                    <BiArrowBack className="text-xl"></BiArrowBack>
                </div>
                <p className='text-xl pl-3 '>
                    <span>Account Management</span>
                </p>
            </div>

            {path === "/dashboard/setting/accountManagement" && (
                <ul className="sm:py-4">
                    {AccountManagementMenu.map((menu, index) => (
                        <li key={index} className="links px-3 hover:bg-gray-200">
                            <Link href={menu.path}>
                                <p className="flex items-center justify-between py-3">
                                    <span>{menu.name}</span>
                                    <BsArrowRight className=""></BsArrowRight>
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            {/* Route to DeleteAccount */}
        </div>
    );
};

export default AccountManagement;
