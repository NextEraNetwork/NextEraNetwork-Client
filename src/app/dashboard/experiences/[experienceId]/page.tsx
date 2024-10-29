'use client';
import React from 'react';
import { ExperienceType } from '@/types/Experience';
import { FaBuilding, FaMapMarkerAlt, FaBriefcase, FaLightbulb, FaThumbsUp, FaBookmark } from 'react-icons/fa';
import { MdTipsAndUpdates } from 'react-icons/md';


export default function ExperienceDetail({
    params
}: {
    params: { experienceId: string }
}) {

    const experience: ExperienceType = {
        title: "Interview at Google",
        experienceType: "Interview",
        companyName: "Google",
        position: "Software Engineer",
        location: "Mountain View, CA",
        content: "The interview process was rigorous, with five rounds focusing on data structures, algorithms, and system design. I learned the importance of clear communication and structuring my answers.The interview process was rigorous, with five rounds focusing on data structures, algorithms, and system design. I learned the importance of clear communication and structuring my answers.The interview process was rigorous, with five rounds focusing on data structures, algorithms, and system design. I learned the importance of clear communication and structuring my answers.The interview process was rigorous, with five rounds focusing on data structures, algorithms, and system design. I learned the importance of clear communication and structuring my answers.The interview process was rigorous, with five rounds focusing on data structures, algorithms, and system design. I learned the importance of clear communication and structuring my answers.The interview process was rigorous, with five rounds focusing on data structures, algorithms, and system design. I learned the importance of clear communication and structuring my answers.The interview process was rigorous, with five rounds focusing on data structures, algorithms, and system design. I learned the importance of clear communication and structuring my answers.The interview process was rigorous, with five rounds focusing on data structures, algorithms, and system design. I learned the importance of clear communication and structuring my answers.The interview process was rigorous, with five rounds focusing on data structures, algorithms, and system design. I learned the importance of clear communication and structuring my answers.",
        keyTakeaways: "Practice coding daily, understand system design basics, and be prepared for behavioral questions.Practice coding daily, understand system design basics, and be prepared for behavioral questions.Practice coding daily, understand system design basics, and be prepared for behavioral questions.Practice coding daily, understand system design basics, and be prepared for behavioral questions.Practice coding daily, understand system design basics, and be prepared for behavioral questions.Practice coding daily, understand system design basics, and be prepared for behavioral questions.Practice coding daily, understand system design basics, and be prepared for behavioral questions.",
        tips: "Practice coding daily, understand system design basics, and be prepared for behavioral questions.Practice coding daily, understand system design basics, and be prepared for behavioral questions.Practice coding daily, understand system design basics, and be prepared for behavioral questions.Practice coding daily, understand system design basics, and be prepared for behavioral questions.Practice coding daily, understand system design basics, and be prepared for behavioral questions.Practice coding daily, understand system design basics, and be prepared for behavioral questions.Practice coding daily, understand system design basics, and be prepared for behavioral questions."
    }

    console.log("params, ", params);

    const handleUpvote = () => {
        // Logic to handle upvote
        console.log("Upvoted!");
    };

    const handleBookmark = () => {
        // Logic to handle bookmarking
        console.log("Bookmarked!");
    };

    return (
        <div className="p-6 mb-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row items-start mb-2">
                <h3 className="text-2xl font-bold text-gray-700 mr-2">{experience.title}</h3>
                <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                    {experience.experienceType}
                </span>
            </div>

            <div className="text-gray-500 text-sm flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                {experience.companyName && (
                    <p className="flex items-center space-x-1">
                        <FaBuilding className="text-blue-500" />
                        <span>{experience.companyName}</span>
                    </p>
                )}
                {experience.position && (
                    <p className="flex items-center space-x-1">
                        <FaBriefcase className="text-green-500" />
                        <span>{experience.position}</span>
                    </p>
                )}
                {experience.location && (
                    <p className="flex items-center space-x-1">
                        <FaMapMarkerAlt className="text-red-500" />
                        <span>{experience.location}</span>
                    </p>
                )}
            </div>

            <div className="mt-4 flex flex-col gap-8">
                <div>
                    <h4 className="font-semibold text-gray-700 flex items-center">
                        <FaLightbulb className="text-yellow-500 mr-2" /> Experience
                    </h4>
                    <p className="mt-2 text-gray-600">{experience.content}</p>
                </div>

                <div>
                    <h4 className="font-semibold text-gray-700 flex items-center">
                        <FaLightbulb className="text-indigo-500 mr-2" /> Key Takeaways
                    </h4>
                    <p className="mt-2 text-gray-600">{experience.keyTakeaways}</p>
                </div>
            </div>

            {experience.tips && (
                <div className="mt-8">
                    <h4 className="font-semibold text-gray-700 flex items-center">
                        <MdTipsAndUpdates className="text-green-500 mr-2" /> Tips & Advice
                    </h4>
                    <p className="mt-2 text-gray-600">{experience.tips}</p>
                </div>
            )}

            {/* Action Buttons for Upvote and Bookmark */}
            <div className="mt-6 flex justify-between items-center">
                <button
                    onClick={handleUpvote}
                    className="flex items-center text-blue-600 hover:text-blue-800"
                >
                    <FaThumbsUp className="mr-2" /> Upvote
                </button>
                <button
                    onClick={handleBookmark}
                    className="flex items-center text-blue-600 hover:text-blue-800"
                >
                    <FaBookmark className="mr-2" /> Bookmark
                </button>
            </div>
        </div>
    );
};

