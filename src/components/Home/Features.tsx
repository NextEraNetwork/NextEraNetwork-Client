'use client'
import React from 'react';
import InfoCard from '../InfoCard';
import { FaUniversity, FaClipboardList, FaBriefcase, FaComments, FaUserAlt, FaChartLine, FaHandshake, FaCommentDots } from 'react-icons/fa';

const Feature: React.FC = () => {
    return (
        <>
            <section id="features" className="landing min-h-screen flex flex-col items-center justify-center scroll-mt-14 pt-20 bg-white text-black">
                <div className="w-full max-w-7xl">
                    <h1 className="text-4xl font-bold mb-10 text-center">Explore Our Key Features</h1>
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
            </section></>
    )
}

export default Feature;
