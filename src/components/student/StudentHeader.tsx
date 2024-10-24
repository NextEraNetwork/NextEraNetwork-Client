import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { BsQuestionSquare } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import images from '@/utils/images';
import Image from 'next/image';

export const StudentHeader: React.FC = () => {
    return (
        <header className="flex justify-between items-center border-b border-[#DBDBDB] p-2 px-8 bg-white">
            {/* Search bar */}
            <div className="flex items-center w-full max-w-lg gap-2 rounded-lg px-4 py-2">
                <Image src={images.ctaelogo} alt="ctae logo" className='w-20 h-20'/>
                <h1 className='text-2xl font-extrabold'>College of Technology and Engineering</h1>
            </div>

            {/* Right-side container */}
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-4">
                    <SlCalender className="text-grey" />
                    <BsQuestionSquare className="text-grey" />
                    <IoNotificationsOutline className="text-grey" />
                </div>

                {/* User info */}
                <div className="flex items-center gap-4">
                    <div className="flex flex-col text-right">
                        <span className="text-sm font-medium whitespace-nowrap">Jinesh Prajapat</span>
                        <span className="text-xs text-grey whitespace-nowrap">Rajasthan, India</span>
                    </div>

                    {/* Profile picture and dropdown */}
                    <div className="flex items-center gap-2">
                        <Image
                            src={images.garudblack}
                            alt="Profile"
                            className="w-10 h-10 rounded-full"
                        />
                        <IoIosArrowDown className="text-grey" />
                    </div>
                </div>
            </div>
        </header>
    );
};

// export default StudentHeader;
