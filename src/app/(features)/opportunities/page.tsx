// /app/opportunities/page.tsx
'use client';
import React, { useState } from 'react';
import OpportunityList from '@/components/student/Opportunities/OpportunityList';
import { Opportunity } from '@/types/Opportunity';

const dummyOpportunities: Opportunity[] = [
    {
        opportunityID: 1,
        profile: "Software Developer",
        company: "Tech Solutions Inc.",
        branch: "Computer Science",
        description :"This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
        positionType: "Full-Time",
        yearOfExperience: 2,
        opportunityLink: "https://example.com/apply1",
        applicationDeadline: "2024-12-31",
        createdAt: new Date().toISOString(),
    },
    {
        opportunityID: 2,
        profile: "Data Analyst",
        company: "Data Insights LLC",
        branch: "Information Technology",
        description :"This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
        positionType: "Internship",
        yearOfExperience: 0,
        opportunityLink: "https://example.com/apply2",
        applicationDeadline: "2024-11-15",
        createdAt: new Date().toISOString(),
    },
    {
        opportunityID: 3,
        profile: "UI/UX Designer",
        company: "Creative Agency",
        branch: "Design",
        description :"This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
        positionType: "Part-Time",
        yearOfExperience: 1,
        opportunityLink: "https://example.com/apply3",
        applicationDeadline: "2024-10-30",
        createdAt: new Date().toISOString(),
    },
    {
        opportunityID: 1,
        profile: "Software Developer",
        company: "Tech Solutions Inc.",
        branch: "Computer Science",
        description :"This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
        positionType: "Full-Time",
        yearOfExperience: 2,
        opportunityLink: "https://example.com/apply1",
        applicationDeadline: "2024-12-31",
        createdAt: new Date().toISOString(),
    },
    {
        opportunityID: 2,
        profile: "Data Analyst",
        company: "Data Insights LLC",
        branch: "Information Technology",
        description :"This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
        positionType: "Internship",
        yearOfExperience: 0,
        opportunityLink: "https://example.com/apply2",
        applicationDeadline: "2024-11-15",
        createdAt: new Date().toISOString(),
    },
    {
        opportunityID: 3,
        profile: "UI/UX Designer",
        company: "Creative Agency",
        branch: "Design",
        description :"This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
        positionType: "Part-Time",
        yearOfExperience: 1,
        opportunityLink: "https://example.com/apply3",
        applicationDeadline: "2024-10-30",
        createdAt: new Date().toISOString(),
    },{
        opportunityID: 1,
        profile: "Software Developer",
        company: "Tech Solutions Inc.",
        branch: "Computer Science",
        description :"This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
        positionType: "Full-Time",
        yearOfExperience: 2,
        opportunityLink: "https://example.com/apply1",
        applicationDeadline: "2024-12-31",
        createdAt: new Date().toISOString(),
    },
    {
        opportunityID: 2,
        profile: "Data Analyst",
        company: "Data Insights LLC",
        branch: "Information Technology",
        description :"This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
        positionType: "Internship",
        yearOfExperience: 0,
        opportunityLink: "https://example.com/apply2",
        applicationDeadline: "2024-11-15",
        createdAt: new Date().toISOString(),
    },
    {
        opportunityID: 3,
        profile: "UI/UX Designer",
        company: "Creative Agency",
        branch: "Design",
        description :"This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
        positionType: "Part-Time",
        yearOfExperience: 1,
        opportunityLink: "https://example.com/apply3",
        applicationDeadline: "2024-10-30",
        createdAt: new Date().toISOString(),
    },
];

const OpportunitiesPage: React.FC = () => {
    const [opportunities, setOpportunities] = useState<Opportunity[]>(dummyOpportunities);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(false);

    const handleScroll = (e: React.UIEvent<HTMLElement>) => {
        const bottom = e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.clientHeight;
        if (bottom && hasMore && !loading) {
            setPage(prev => prev + 1);
        }
    };

    return (
        <div className="flex h-full flex-col">
            <h1 className="text-2xl font-bold mb-4">Internship Opportunities</h1>
            <div
                className="flex-grow overflow-y-auto"
                onScroll={handleScroll}
                style={{ maxHeight: 'calc(100vh - 100px)' }} // Adjust based on your layout
            >
                <OpportunityList opportunities={opportunities} />
                {loading && <p className="text-center">Loading more opportunities...</p>}
            </div>
        </div>
    );
};

export default OpportunitiesPage;
