'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter,  } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';

const SecurityMenu = [
    { name: "Email", path: "/dashboard/setting/security/changeEmail" },
    { name: "Reset Password", path: "/dashboard/setting/security/resetPassword" },
    { name: "Change Username", path: "/dashboard/setting/security/changeUsername" }
];

const Security: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className='bg-white h-full'>
            <div className="header flex items-center p-3 sticky top-0 border-b-2 bg-white border-gray-300">
                <div className='cursor-pointer sm:pl-2' onClick={()=> router.back()}>
                    <BiArrowBack className="text-xl"></BiArrowBack>
                </div>
                <p className='text-xl pl-3 '>
                    <span>Security</span>
                </p>
            </div>

            {pathname === "/dashboard/setting/security" && (
                <ul className='sm:py-4 '>
                    {SecurityMenu.map((menu, index) => (
                        <li key={index} className='links px-3 hover:bg-gray-200'>
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
            {/* Include the dynamic route content here using Router */}
            {/* {pathname === "/settings/security/changeEmail" && <ChangeEmail />}
            {pathname === "/settings/security/resetPassword" && <ResetPassword />}
            {pathname === "/settings/security/resetUsername" && <ChangeUserName />} */}
        </div>
    );
};

export default Security;
