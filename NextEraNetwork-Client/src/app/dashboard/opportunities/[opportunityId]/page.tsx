'use client';
import React from "react";
import { Opportunity } from '@/types/Opportunity';
import { FaBriefcase, FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';
import Link from "next/link";

export default function OpportunityDetail({
    params
}: {
    params: { opportunityId: string }
}) {
    const opportunity: Opportunity = {
        id: "1",
        profile: "Software Developer",
        company: "Tech Solutions Inc.",
        branch: "Computer Science",
        description: "This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
        positionType: "Full-Time",
        yearOfExperience: 2,
        opportunityLink: "https://example.com/apply1",
        applicationDeadline: "2024-12-31",
        createdAt: new Date().toISOString(),
    };

    console.log("params", params);

    return (
        <div className="flex flex-col items-center justify-center  bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 w-full transition-transform transform">
                <Link href="/opportunities" className="flex items-center text-gray-600 hover:text-blue-600 mb-4">
                    <FaArrowLeft className="mr-2" />
                    Back to Opportunities
                </Link>
                <div className="flex items-center mb-4">
                    <FaBriefcase className="text-blue-600 mr-2 text-2xl" />
                    <h2 className="text-2xl font-semibold">{opportunity.positionType}</h2>
                </div>
                <p className="text-gray-700 text-lg font-medium">{opportunity.company}</p>
                <p className="text-gray-600 mt-1">Branch: <span className="font-semibold">{opportunity.branch}</span></p>
                <p className="text-gray-600 mt-1">Experience: <span className="font-semibold">{opportunity.yearOfExperience} years</span></p>

                {/* Description Section */}
                <p className="text-gray-600 mt-4">{opportunity.description}</p>

                <div className="flex items-center mt-4">
                    <FaCalendarAlt className="text-gray-500 mr-2" />
                    <span className="text-gray-600">Application Deadline: <span className="font-semibold">{new Date(opportunity.applicationDeadline).toLocaleDateString()}</span></span>
                </div>
                <div className="flex items-center">
                    <FaCalendarAlt className="text-gray-500 mr-2" />
                    <span className="text-gray-600">Posted on: <span className="font-semibold">{new Date(opportunity.createdAt).toLocaleDateString()}</span></span>
                </div>

                <Link 
                    href={opportunity.opportunityLink} 
                    className="mt-4 inline-block bg-blue-600 text-white text-center font-semibold py-2 px-4 rounded transition-colors duration-200 hover:bg-blue-500"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Apply Now
                </Link>
            </div>
        </div>
    );
}
