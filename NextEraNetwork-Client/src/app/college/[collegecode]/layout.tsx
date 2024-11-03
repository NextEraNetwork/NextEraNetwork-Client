'use client';
import React, { useEffect, useRef } from 'react';
import { StudentHeader } from '@/components/student/StudentHeader';
import { CollegeSideBar } from '@/components/College/CollegeSideBar';

const CollegeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  // const [headerHeight, setHeaderHeight] = useState<number>(0);
  // const router = useRouter();
  // const { collegecode } = router.query;

  useEffect(() => {
    // if (headerRef.current) {
    //   setHeaderHeight(headerRef.current.offsetHeight);
    // }
  }, [headerRef]);

  return (
    <div className="flex flex-col bg-white h-screen">
      {/* Header */}
      <div ref={headerRef} className="border-b border-[#DBDBDB] sticky top-0 z-50">
        <StudentHeader />
      </div>

      {/* Main Content */}
      <aside className="flex flex-row flex-grow overflow-hidden">
        <div className={`max-w-64 bg-white border-r border-[#DBDBDB]`}>
          <CollegeSideBar />
        </div>
        <main className="flex-grow px-8 pt-8 overflow-y-auto bg-slate-50">
          {children}
        </main>
      </aside>
    </div>
  );
};

export default CollegeLayout;
