// /app/opportunities/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import OpportunityList from '@/components/student/Opportunities/OpportunityList';
import { Opportunity } from '@/types/Opportunity';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/reducer/store';
import { getOpportunity } from '@/services/operations/student/opportunityAPI';

// const dummyOpportunities: Opportunity[] = [
//     {
//         id: "1",
//         profile: "Software Developer",
//         company: "Tech Solutions Inc.",
//         branch: "Computer Science",
//         description: "This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
//         positionType: "Full-Time",
//         yearOfExperience: 2,
//         opportunityLink: "https://example.com/apply1",
//         applicationDeadline: "2024-12-31",
//         createdAt: new Date().toISOString(),
//     },
//     {
//         id: "2",
//         profile: "Data Analyst",
//         company: "Data Insights LLC",
//         branch: "Information Technology",
//         description: "This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
//         positionType: "Internship",
//         yearOfExperience: 0,
//         opportunityLink: "https://example.com/apply2",
//         applicationDeadline: "2024-11-15",
//         createdAt: new Date().toISOString(),
//     },
//     {
//         id: "3",
//         profile: "UI/UX Designer",
//         company: "Creative Agency",
//         branch: "Design",
//         description: "This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
//         positionType: "Part-Time",
//         yearOfExperience: 1,
//         opportunityLink: "https://example.com/apply3",
//         applicationDeadline: "2024-10-30",
//         createdAt: new Date().toISOString(),
//     },
//     {
//         id: "4",
//         profile: "Software Developer",
//         company: "Tech Solutions Inc.",
//         branch: "Computer Science",
//         description: "This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
//         positionType: "Full-Time",
//         yearOfExperience: 2,
//         opportunityLink: "https://example.com/apply1",
//         applicationDeadline: "2024-12-31",
//         createdAt: new Date().toISOString(),
//     },
//     {
//         id: "5",
//         profile: "Data Analyst",
//         company: "Data Insights LLC",
//         branch: "Information Technology",
//         description: "This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
//         positionType: "Internship",
//         yearOfExperience: 0,
//         opportunityLink: "https://example.com/apply2",
//         applicationDeadline: "2024-11-15",
//         createdAt: new Date().toISOString(),
//     },
//     {
//         id: "6",
//         profile: "UI/UX Designer",
//         company: "Creative Agency",
//         branch: "Design",
//         description: "This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
//         positionType: "Part-Time",
//         yearOfExperience: 1,
//         opportunityLink: "https://example.com/apply3",
//         applicationDeadline: "2024-10-30",
//         createdAt: new Date().toISOString(),
//     }, {
//         id: "7",
//         profile: "Software Developer",
//         company: "Tech Solutions Inc.",
//         branch: "Computer Science",
//         description: "This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
//         positionType: "Full-Time",
//         yearOfExperience: 2,
//         opportunityLink: "https://example.com/apply1",
//         applicationDeadline: "2024-12-31",
//         createdAt: new Date().toISOString(),
//     },
//     {
//         id: "8",
//         profile: "Data Analyst",
//         company: "Data Insights LLC",
//         branch: "Information Technology",
//         description: "This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
//         positionType: "Internship",
//         yearOfExperience: 0,
//         opportunityLink: "https://example.com/apply2",
//         applicationDeadline: "2024-11-15",
//         createdAt: new Date().toISOString(),
//     },
//     {
//         id: "9",
//         profile: "UI/UX Designer",
//         company: "Creative Agency",
//         branch: "Design",
//         description: "This update will display the description prominently within each opportunity card, giving users a better understanding of what each opportunity entails. Adjust the styling further if you want to make the description stand out more! Let me know if you need any more changes!",
//         positionType: "Part-Time",
//         yearOfExperience: 1,
//         opportunityLink: "https://example.com/apply3",
//         applicationDeadline: "2024-10-30",
//         createdAt: new Date().toISOString(),
//     },
// ];

// const OpportunitiesPage: React.FC = () => {
//     const opportunities = useSelector((state: RootState) => state.opportunity.opportunityList)
//     // const [opportunities, setOpportunities] = useState<Opportunity[]>(dummyOpportunities);
//     // const loading = useSelector((state: RootState) => state.opportunity.loading);
//     const [loading, setLoading] = useState<boolean>(false);
//     const [hasMore, setHasMore] = useState<boolean>(true); // Initialize to true to allow loading more experiences

//     const handleScroll = (e: React.UIEvent<HTMLElement>) => {
//         const bottom = e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.clientHeight;
//         if (bottom && hasMore && !loading) {
//             loadMoreExperiences();
//         }
//     };

//     const loadMoreExperiences = async () => {
//         setLoading(true);
//         // Simulate fetching data
//         setTimeout(() => {
//             // For demonstration, add more dummy experiences or fetch new data
//             const newExperiences: ExperienceType[] = [] // Fetch or generate new experiences based on the current page
//             setExperiences(prev => [...prev, ...newExperiences]);
//             setLoading(false);
//             setHasMore(newExperiences.length > 0); // Set to false if no more experiences
//         }, 1000);
//     };

//     return (

//         <div className="flex h-full flex-col">
//             <div className="flex items-center justify-between mb-4">
//                 <h1 className="text-2xl font-bold">Internship Opportunities</h1>
//                 <Link
//                     href='/opportunities/addOpportunities'
//                     className="flex items-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
//                 >
//                     <FaPlus className="mr-2" />
//                     Add Opportunity
//                 </Link>
//             </div>
//             <div
//                 className="flex-grow overflow-y-auto"
//                 onScroll={handleScroll}
//                 style={{ maxHeight: 'calc(100vh - 100px)' }}
//             >
//                 <OpportunityList opportunities={opportunities} />
//                 {loading && <p className="text-center">Loading more opportunities...</p>}
//             </div>
//         </div>
//     );
// };



const OpportunitiesPage: React.FC = () => {
    const opportunityList = useSelector((state:RootState)=>state.opportunity.opportunityList);
    const loading = useSelector((state:RootState)=>state.opportunity.loading);
    const dispatch = useDispatch<AppDispatch>();
    
    useEffect(()=>{
        dispatch(getOpportunity());
    },[dispatch]);


    console.log("opportunityList response", opportunityList);


    return (
        <div className="flex h-full flex-col">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-sm md:text-2xl font-bold">Internship Opportunities</h1>
                <Link
                    href='/dashboard/opportunities/addOpportunities'
                    className="flex items-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                    <FaPlus className="mr-2 text-xs" />
                    <span className='text-xs md:text-base'>Add Opportunity</span>
                </Link>
            </div>
            <div
                className="flex-grow overflow-y-auto scrollbar"
                style={{ maxHeight: 'calc(100vh - 100px)' }}
            >
                <OpportunityList opportunities={opportunityList} />
                {loading && <p className="text-center">Loading more opportunities...</p>}
            </div>
        </div>
    );
};


export default OpportunitiesPage;