'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IonIcon } from "@ionic/react";
import { home, chatbubble, people, book, briefcase } from "ionicons/icons";
import { SideBar } from "./Sidebar";
import useScrollDirection from "@/hooks/useScrollDirection";

// Define the type for Mobile Menu Items
interface MenuItem {
  name: string;
  icon: string;
  dis: string;
  path: string;
}

const NavBar: React.FC = () => {
  const MobileMenus: MenuItem[] = [
    { name: "Home", icon: home, dis: "translate-x-[1vw]", path: "/dashboard" },
    { name: "My Network", icon: people, dis: "translate-x-[19vw]", path: "/dashboard/users" },
    { name: "Questions", icon: book, dis: "translate-x-[37vw]", path: "/dashboard/questions" },
    { name: "Discuss", icon: chatbubble, dis: "translate-x-[55vw]", path: "/dashboard/discussions" },
    { name: "Jobs", icon: briefcase, dis: "translate-x-[72vw]", path: "/dashboard/opportunities" },
  ];

  const [active, setActive] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const scrollDirection = useScrollDirection();
  const pathname = usePathname(); 

  console.log("scroll direction", scrollDirection);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (index: number) => {
    setActive(index);
  };

  return (
    <>
      {isMobile ? (
        <div className={`bg-slate-50  px-1 rounded-t-xl w-full fixed bottom-0 z-40 duration-500 ${scrollDirection === 'down' ? 'translate-y-full' : 'translate-y-0'}`}>
          <ul className="flex relative pb-1">
            {MobileMenus.map((menu, i) => (
              <li key={i} className="w-[20vw]">
                <Link href={menu.path} passHref>
                  <div
                    className="flex flex-col text-center pt-2 cursor-pointer"
                    onClick={() => handleClick(i)}
                  >
                    <span className={`text-xl duration-500 ${(pathname === menu.path && scrollDirection !== 'down') && "-mt-6 text-white border-5 border-blue-50 bg-cyan-500 rounded-full pt-1 "}`}>
                      <IonIcon icon={menu.icon} />
                    </span>
                    <span className={`text-[10px] duration-500 ${active === i ? "translate-y-1 opacity-100" : "opacity-100"}`}>
                      {menu.name}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <SideBar />
      )}
    </>
  );
};

export default NavBar;
