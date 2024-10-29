import React, { useState } from 'react';
import Link from 'next/link';
import { analyticsSharp, homeOutline, newspaperOutline, calendarClearOutline, imageOutline, chatboxEllipsesOutline, chatbubbleOutline, bookOutline, briefcaseOutline, personOutline, bookmarkOutline } from "ionicons/icons";
import { usePathname } from 'next/navigation';
import { IonIcon } from '@ionic/react';
import { MdDoubleArrow } from "react-icons/md";

// Define menu item structure
interface MenuItem {
    name: string;
    icon: string;
    path: string;
}

// Menu items
const Menus: MenuItem[] = [
    { name: "Home", icon: homeOutline, path: "/dashboard" },
    { name: "News", icon: newspaperOutline, path: "/dashboard/news" },
    { name: "Events", icon: calendarClearOutline, path: "/dashboard/events" },
    { name: "My Network", icon: personOutline, path: "/dashboard/users" },
    { name: "Gallery", icon: imageOutline, path: "/dashboard/gallery" },
    { name: "Questions", icon: bookOutline, path: "/dashboard/questions" },
    { name: "Discuss", icon: chatbubbleOutline, path: "/dashboard/discussions" },
    { name: "Opportunities", icon: briefcaseOutline, path: "/dashboard/opportunities" },
    { name: "Expericences", icon: chatboxEllipsesOutline, path: "/dashboard/experiences" },
    { name: "Saved", icon: bookmarkOutline, path: "/dashboard/saves" },
    // { name: "Community", icon: thumbsUpOutline, path: "/Community" },
    { name: "Placement Statistics", icon: analyticsSharp, path: "/dashboard/placementStats" },

];


export const SideBar: React.FC = () => {
    const [isToggle, setIsToggle] = useState<boolean>(true);
    const pathname = usePathname();

    return (
        <nav className=''>
            {/* Company name & logo */}
            <div className='flex items-center justify-between p-4 py-4 border-b border-[#DBDBDB]'>
                <div className='flex flex-row gap-2 items-center'>

                    <span className={`text-xl md:text-xl h-6 font-semibold duration-500 ${!isToggle ? "hidden" : ""}`}>Wrap It</span>
                </div>
                <div className='flex items-center w-7 h-5' onClick={() => setIsToggle(!isToggle)}>
                    <MdDoubleArrow className={`w-full h-full cursor-pointer duration-300 ${isToggle ? "rotate-180" : ""}`} />
                </div>
            </div>

            {/* navlinks & direct projects access link */}
            <div className='flex flex-col h-full'>
                <div className='flex-1'>
                    {/* Menu links */}
                    <ul className='flex flex-col gap-1 text-base text-grey mx-2 py-5 border-b border-[#DBDBDB]'>
                        {Menus.map((menu, i) => (
                            <li className='link py-1' key={i}>
                                <Link href={menu.path} >
                                    <div className={`flex gap-3 py-2 px-2 dark:text-black rounded-lg duration-500 ${pathname === menu.path && "text-grey bg-[#2A9DAF] "}`}>
                                        <span className={`icon text-xl duration-500 flex items-center ${(pathname === menu.path) && "text-white"}`}>
                                            <IonIcon icon={menu.icon} />
                                        </span>
                                        <span className={` whitespace-nowrap text-base font-sans  duration-500 ${!isToggle ? "hidden" : ""} ${(pathname === menu.path) && "dark:text-black text-white duration-700"}`}>
                                            {menu.name}
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Thoughts time */}
                {/* <div className={`bg-[#F5F5F5] rounded-2xl relative mx-4 p-4 mt-24 ${!isToggle ? "hidden" : ""}`}>
                    <div className='flex flex-col gap-2 justify-center text-sm pt-8'>
                        <h4 className='text-center font-semibold'>Thoughts Time</h4>
                        <p className='text-center text-grey'>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
                        <button className='font-semibold px-4 py-2 bg-white rounded-lg'>Write a message</button>
                    </div>
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5F5F5]'>
                        <div className='w-16 h-16 flex items-center justify-center bg-gradient-to-br from-yellow-100 via-yellow-50 to-transparent rounded-full'>
                            <BsLightbulbFill className='text-yellow-400 text-2xl' />
                        </div>
                    </div>
                </div> */}
            </div>
        </nav>
    );
};
