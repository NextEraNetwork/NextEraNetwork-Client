'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';

const Visibility: React.FC = () => {
    const router = useRouter();
    const path = usePathname();

    const visibilityMenu = [
        { name: "Profile Viewing", path: "/dashboard/setting/visibility/profileViewing" },
        { name: "Portfolio Visibility", path: "/dashboard/setting/visibility/portfolioVisibility" },
        { name: "Connection", path: "/dashboard/setting/visibility/connection" }
    ];

    return (
        <div className='bg-white h-full'>
            <div className="header flex items-center p-3 sticky top-0 border-b-2 bg-white border-gray-300">
                <div className='cursor-pointer sm:pl-2' onClick={() => router.back()}>
                    <BiArrowBack className="text-xl"></BiArrowBack>
                </div>
                <p className='text-xl pl-3 '>
                    <span>Visibility</span>
                </p>
            </div>

            {path === '/dashboard/setting/visibility' && (
                <ul className='sm:py-4'>
                    {visibilityMenu.map((menu) => (
                        <li key={menu.name} className='links px-3 hover:bg-gray-200'>
                            <Link href={menu.path}>
                                <p className={`flex items-center justify-between py-3`}>
                                    <span>{menu.name}</span>
                                    <BsArrowRight className=""></BsArrowRight>
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
};

export default Visibility;
