// /app/experiences/page.tsx
'use client';
import React, { useState } from 'react';
import { ExperienceType } from '@/types/Experience';
import ExperienceList from '@/components/student/Experiences/ExperienceList';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

const dummyexperiences: ExperienceType[] = [
    {
        title: "Interview at Google",
        experienceType: "Interview",
        companyName: "Google",
        position: "Software Engineer",
        location: "Mountain View, CA",
        content: "The interview process was rigorous, with five rounds focusing on data structures, algorithms, and system design. I learned the importance of clear communication and structuring my answers.",
        keyTakeaways: "Practice coding daily, understand system design basics, and be prepared for behavioral questions.",
        tips: "Brush up on data structures and stay calm during problem-solving."
    },
    {
        title: "Building an E-commerce Platform",
        experienceType: "Project",
        companyName: "XYZ University",
        position: "Project Lead",
        location: "Remote",
        content: "Led a team to develop an e-commerce website using MERN stack. Faced challenges in state management and optimizing load times.",
        keyTakeaways: "Proper planning, modular code, and effective communication with team members are essential.",
        tips: "Use Redux for state management and focus on creating reusable components."
    },
    {
        title: "Preparing for GATE CSE",
        experienceType: "GATE Preparation",
        location: "Remote",
        content: "Dedicated 6 hours daily to study core subjects and previous years' questions. Time management and practice were key.",
        keyTakeaways: "Start early, focus on high-weightage topics, and solve plenty of mock tests.",
        tips: "Divide subjects weekly and review frequently to retain information."
    },
    {
        title: "Placement at Amazon",
        experienceType: "Placement",
        companyName: "Amazon",
        position: "Backend Developer",
        location: "Seattle, WA",
        content: "The placement process included an online assessment and multiple interviews covering technical and behavioral aspects.",
        keyTakeaways: "Focus on problem-solving, clear explanations, and understanding system design basics.",
        tips: "Keep a good coding streak on LeetCode and HackerRank for practice."
    },
    {
        title: "Internship Experience at Microsoft",
        experienceType: "Internship",
        companyName: "Microsoft",
        position: "Software Development Intern",
        location: "Redmond, WA",
        content: "Worked on an internal tool, learning about Microsoft's work culture and agile practices.",
        keyTakeaways: "Embrace new challenges, be open to feedback, and ask questions.",
        tips: "Focus on your soft skills along with technical knowledge for a well-rounded experience."
    },
]
    ;

    const ExperiencePage: React.FC = () => {
        const [experiences, setExperiences] = useState<ExperienceType[]>(dummyexperiences);
        const [loading, setLoading] = useState<boolean>(false);
        // const [page, setPage] = useState<number>(1);
        const [hasMore, setHasMore] = useState<boolean>(true); // Initialize to true to allow loading more experiences
    
        const handleScroll = (e: React.UIEvent<HTMLElement>) => {
            const bottom = e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.clientHeight;
            if (bottom && hasMore && !loading) {
                loadMoreExperiences();
            }
        };
    
        const loadMoreExperiences = async () => {
            setLoading(true);
            // Simulate fetching data
            setTimeout(() => {
                // For demonstration, add more dummy experiences or fetch new data
                const newExperiences: ExperienceType[] = [] // Fetch or generate new experiences based on the current page
                setExperiences(prev => [...prev, ...newExperiences]);
                setLoading(false);
                setHasMore(newExperiences.length > 0); // Set to false if no more experiences
            }, 1000);
        };
    
        return (
            <div className="flex h-full flex-col">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold">Experiences</h1>
                    <Link
                        href='/experiences/addExperiences'
                        className="flex items-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                    >
                        <FaPlus className="mr-2" />
                        Add Experience
                    </Link>
                </div>
                <div
                    className="flex-grow overflow-y-auto scrollbar"
                    onScroll={handleScroll}
                    style={{ maxHeight: 'calc(100vh - 100px)' }}
                >
                    <ExperienceList experiences={experiences} />
                    {loading && <p className="text-center">Loading more experiences...</p>}
                </div>
            </div>
        );
    };
    
    export default ExperiencePage;