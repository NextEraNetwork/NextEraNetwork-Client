'use client';
import React, { useEffect, useRef } from 'react';
import { StudentHeader } from '@/components/student/StudentHeader';
import NavBar from '@/components/student/Navbar';

const StudentLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  // const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    // if (headerRef.current) {
    //   setHeaderHeight(headerRef.current.offsetHeight);
    // }
  }, [headerRef]);

  return (
    <div className="flex flex-col bg-white h-screen">
      {/* Header */}
      <div ref={headerRef} className="border-b border-[#DBDBDB] text-black sticky top-0 z-50">
        <StudentHeader />
      </div>

      {/* Main Content */}
      <aside className="flex flex-row flex-grow overflow-hidden">
        <div className={`max-w-64 bg-white border-r text-black border-[#DBDBDB]`}>
          {/* <SideBar /> */}
          <NavBar/>
        </div>
        <main className="flex-grow p-1 pb-8 md:pb-0 md:p-2 overflow-y-auto bg-slate-100 text-black">
          {children}
        </main>
      </aside>
    </div>
  );
};

export default StudentLayout;
