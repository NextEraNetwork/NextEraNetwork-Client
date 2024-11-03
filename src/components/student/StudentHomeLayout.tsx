// 'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import { SideBar } from '@/components/student/Sidebar';
// import { StudentHeader } from '@/components/student/StudentHeader';

// const StudentHomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const headerRef = useRef<HTMLDivElement>(null);
//   const [headerHeight, setHeaderHeight] = useState<number>(0);

//   useEffect(() => {
//     if (headerRef.current) {
//       setHeaderHeight(headerRef.current.offsetHeight);
//     }
//   }, [headerRef]);

//   return (
//     <div className="flex flex-col bg-white h-screen">
//       {/* Header */}
//       <div ref={headerRef} className="border-b border-[#DBDBDB] sticky top-0 z-50">
//         <StudentHeader />
//       </div>

//       {/* Main Content */}
//       <aside className="flex flex-row flex-grow overflow-hidden">
//         <div className={`max-w-64 bg-white border-r border-[#DBDBDB]`}>
//           <SideBar />
//         </div>
//         <main className="flex-grow px-8 pt-8 overflow-y-auto" style={{ marginTop: headerHeight }}>
//           {children}
//         </main>
//       </aside>
//     </div>
//   );
// };

// export default StudentHomeLayout;
