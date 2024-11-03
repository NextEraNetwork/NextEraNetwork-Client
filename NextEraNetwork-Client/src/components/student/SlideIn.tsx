import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IonIcon } from '@ionic/react';
import {  settingsSharp, logOut, newspaperOutline, calendarClearOutline, imageOutline, chatboxEllipsesOutline,analyticsSharp,  chatbubbleOutline, bookOutline, briefcaseOutline, personOutline, bookmarkOutline } from "ionicons/icons";
import LogOutButton from './LogOutButton';

interface SlideInProps {
  isSlideInToggle: boolean;
  setIsSlideInToggle: (toggle: boolean) => void;
}

interface MenuItem {
  name?: string;
  icon?: string;
  path?: string;
}

const SlideIn: React.FC<SlideInProps> = ({ isSlideInToggle, setIsSlideInToggle }) => {
  const Menus: MenuItem[] = [
    {},
    { name: 'News', icon: newspaperOutline, path: '/dashboard/news' },
    { name: 'Events', icon: calendarClearOutline, path: '/dashboard/events' },
    { name: 'Gallery', icon: imageOutline, path: '/dashboard/gallery' },
    { name: 'Experiences', icon: chatboxEllipsesOutline, path: '/dashboard/experiences' },
    { name: 'Bookmarks', icon: bookmarkOutline, path: '/dashboard/bookmark' },
    { name: 'Placement Statistics', icon: analyticsSharp, path: '/dashboard/placement-statistics' },
    { name: 'Setting', icon: settingsSharp, path: '/dashboard/setting' },
    // { name: "Logout", icon: logOut, path: "/Logout" },
  ];

  const [active, setActive] = useState<number>(0);

  const handleClick = (index: number) => {
    setActive(index);
  };

  const handleSlideInBtn = () => {
    setIsSlideInToggle(!isSlideInToggle);
  };

  const userName = typeof window !== 'undefined' ? localStorage.getItem('userName') : '';
  const avatarUrl = typeof window !== 'undefined' ? localStorage.getItem('avatarUrl') : '';

  return (
    <>
      {isSlideInToggle && (
        <div className="slide-in relative">
          <aside className="w-64 h-full bg-white flex flex-col p-4 fixed left-0 top-0 z-50">
            {/* User Info Section */}
            <div className="user-info border-b-2 border-grey-600 pb-4">
              <div className="w-16 h-16 rounded-full">
                <Link href="/dashboard/user/username" passHref>
                  <div className="profile cursor-pointer">
                    <img
                      src={"https://api.dicebear.com/7.x/fun-emoji/svg?radius=50"}
                      alt="User Avatar"
                      className="rounded-full w-10 h-10"
                    />
                  </div>
                </Link>
              </div>
              <div className="text-left font-serif px-2">{userName || 'Jinesh Prajapat'}</div>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col relative items-start pt-0 h-full">
              {Menus.map((menu, i) => (
                <li
                  key={i}
                  className={`${i >= Menus.length - 1 ? 'mt-auto border-t-[1px] bg-grey-600 w-full' : ''}`}
                >
                  {menu.path && (
                    <Link href={menu.path} passHref>
                      <div
                        className="flex items-center w-full gap-3 pt-3"
                        onClick={() => {
                          handleClick(i);
                          handleSlideInBtn();
                        }}
                      >
                        <span className={`cursor-pointer text-xs duration-500 ${i === active ? 'text-blue-600' : ''}`}>
                          {menu.icon && <IonIcon icon={menu.icon} />}
                        </span>
                        <span className={`cursor-pointer text-[12px] ${active === i ? 'text-blue-600 opacity-100 duration-700' : ''}`}>
                          {menu.name}
                        </span>
                      </div>
                    </Link>
                  )}
                </li>
              ))}
              {/* Logout Option */}
              <li className="cursor-pointer text-[12px] flex gap-3 items-center pt-2">
                <IonIcon icon={logOut} />
                <LogOutButton />
              </li>
            </ul>
          </aside>
        </div>
      )}
    </>
  );
};

export default SlideIn;
