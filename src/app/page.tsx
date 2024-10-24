'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Provider } from "react-redux";
import { store } from "@/reducer/store";
import { FaUniversity, FaClipboardList, FaBriefcase, FaComments, FaUserAlt, FaChartLine, FaHandshake, FaCommentDots } from 'react-icons/fa';
import InfoCard from '@/components/InfoCard';
import Header from '@/components/Header';
import { useAuth } from '@/context/AuthProvider';
import { SideBar } from '@/components/student/Sidebar';
import { StudentHeader } from '@/components/student/StudentHeader';

export default function Home({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerRef]);

  return (
    <Provider store={store}>
      {!user ? (
        <>
          <Header />
          <div className="landing min-h-screen flex flex-col items-center justify-center">
            <div className="w-full max-w-7xl">
              <div className="border-t-2 border-gray-300 mx-auto relative flex items-center justify-between w-full">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 font-bold text-xl pl-4">College Connect</span>
                <span className="absolute right-0 top-1/2 transform -translate-y-1/2 font-bold text-xl pr-4">Interview Insights</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {/* Render InfoCards */}
                <InfoCard
                  title="College Connect"
                  icon={<FaUniversity className="text-4xl text-blue-500" />}
                  description="Connect with your college community and alumni effortlessly. Stay in touch with everyone from your college days."
                  animation="slide-left"
                />
                <InfoCard
                  title="Interview Q&A"
                  icon={<FaClipboardList className="text-4xl text-green-500" />}
                  description="Prepare for your interviews by browsing questions asked by companies. Add your own to help others prepare."
                  animation="slide-right"
                />
                <InfoCard
                  title="Job & Intern Opportunities"
                  icon={<FaBriefcase className="text-4xl text-yellow-500" />}
                  description="Discover and share job and internship opportunities within the community. Help others kickstart their careers."
                  animation="zoom-in"
                />
                <InfoCard
                  title="Interview Insights"
                  icon={<FaHandshake className="text-4xl text-purple-500" />}
                  description="Share your interview experiences to guide juniors and help them navigate their career paths."
                  animation="slide-left"
                />
                <InfoCard
                  title="Discuss & Solve"
                  icon={<FaComments className="text-4xl text-indigo-500" />}
                  description="Post problems in the community and get solutions from your peers. Speed up your workflow efficiently."
                  animation="slide-right"
                />
                <InfoCard
                  title="Real-Time Chat"
                  icon={<FaCommentDots className="text-4xl text-red-500" />}
                  description="Engage in peer-to-peer chat with real-time messaging. Connect directly with classmates and alumni."
                  animation="slide-left"
                />
                <InfoCard
                  title="Comprehensive Profiles"
                  icon={<FaUserAlt className="text-4xl text-teal-500" />}
                  description="Easily analyze profiles of users in the community. Find all the information you need at a glance."
                  animation="slide-right"
                />
                <InfoCard
                  title="Placement Statistics"
                  icon={<FaChartLine className="text-4xl text-gray-500" />}
                  description="Filter placement history based on year, branch, company, and more to get valuable insights."
                  animation="zoom-in"
                />
              </div>
            </div>
          </div>

          {children}
        </>
      ) : (
        <div className='flex flex-col bg-white'>
          {/* Header */}
          <div ref={headerRef} className='border-[#DBDBDB] sticky top-0 z-50'>
            <StudentHeader />
          </div>

          {/* Main Content */}
          <aside className='flex flex-row h-screen w-full overflow-hidden'>
            <div className={`max-w-64 sticky top-[${headerHeight}px] bg-white border-r border-[#DBDBDB]`}>
              <SideBar />
            </div>
            <main className='flex-grow px-8 pt-8 overflow-y-auto'>
              {/* Render children here, including MultiForm */}
              {children}
            </main>
          </aside>
        </div>
      )}
    </Provider>
  );
};
