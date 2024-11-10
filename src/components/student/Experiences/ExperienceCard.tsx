'use client';
import React from 'react';
import { ExperienceType } from '@/types/Experience';
import { FaBuilding, FaMapMarkerAlt, FaBriefcase, FaLightbulb } from 'react-icons/fa';
import { MdTipsAndUpdates } from 'react-icons/md';
import Link from 'next/link';

interface ExperienceCardProps {
    experience: ExperienceType;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
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

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h4 className="font-semibold text-gray-700 flex items-center">
                    <FaLightbulb className="text-yellow-500 mr-2" /> Experience
                </h4>
                <p className="mt-2 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: experience.content }}
                ></p>
            </div>

            <div>
                <h4 className="font-semibold text-gray-700 flex items-center">
                    <FaLightbulb className="text-indigo-500 mr-2" /> Key Takeaways
                </h4>
                <p className="mt-2 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: experience.keyTakeaways }}
                ></p>
            </div>
        </div>

        {experience.tips && (
            <div className="mt-6">
                <h4 className="font-semibold text-gray-700 flex items-center">
                    <MdTipsAndUpdates className="text-green-500 mr-2" /> Tips & Advice
                </h4>
                <p className="mt-2 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: experience.tips }}>

                </p>
            </div>
        )}

        <Link
            href={`/dashboard/experiences/${experience.title}`}
            className="mt-4 inline-block bg-blue-600 text-white text-center font-semibold py-2 px-4 rounded transition-colors duration-200 hover:bg-blue-500"
        >
            Read More
        </Link>
    </div>
);

export default ExperienceCard;
