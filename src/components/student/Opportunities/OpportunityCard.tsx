// // /components/OpportunityCard.tsx
// import React from 'react';
// import { Opportunity } from '@/types/Opportunity';
// import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
// import Link from 'next/link';

// interface OpportunityCardProps {
//     opportunity: Opportunity;
// }

// const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
//     return (
//         <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 transition duration-300 transform hover:-translate-y-1 ">
//             <div className="flex items-center mb-4">
//                 <FaBriefcase className="text-blue-600 mr-2 text-2xl" />
//                 <h2 className="text-2xl font-semibold">{opportunity.positionType}</h2>
//             </div>
//             <p className="text-gray-700 text-lg font-medium">{opportunity.company}</p>
//             <p className="text-gray-600 mt-1">Branch: <span className="font-semibold">{opportunity.branch}</span></p>
//             <p className="text-gray-600 mt-1">Experience: <span className="font-semibold">{opportunity.yearOfExperience} years</span></p>

//             {/* Description Section */}
//             <p className="text-gray-600 mt-4">{opportunity.description}</p>

//             <div className="flex items-center mt-4">
//                 <FaCalendarAlt className="text-gray-500 mr-2" />
//                 <span className="text-gray-600">Application Deadline: <span className="font-semibold">{new Date(opportunity.applicationDeadline).toLocaleDateString()}</span></span>
//             </div>
//             <div className="flex items-center">
//                 <FaCalendarAlt className="text-gray-500 mr-2" />
//                 <span className="text-gray-600">Posted on: <span className="font-semibold">{new Date(opportunity.createdAt).toLocaleDateString()}</span></span>
//             </div>

//             <Link 
//                 href={`/opportunities/${opportunity.opportunityID}`} 
//                 className="mt-4 inline-block bg-blue-600 text-white text-center font-semibold py-2 px-4 rounded transition-colors duration-200 hover:bg-blue-500"
//                 rel="noopener noreferrer"
//             >
//                 Apply Now
//             </Link>
//         </div>
//     );
// };

// export default OpportunityCard;



import React from 'react';
import { Opportunity } from '@/types/Opportunity';
import { FaBriefcase, FaCalendarAlt, FaLaptopCode } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import Link from 'next/link';

interface OpportunityCardProps {
    opportunity: Opportunity;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center mb-4">
                <FaBriefcase className="text-blue-600 mr-2 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-800">{opportunity.positionType}</h2>
            </div>
            <p className="text-gray-700 text-lg font-medium">{opportunity.company}</p>
            <p className="text-gray-600 mt-1 flex items-center">
                <FaLaptopCode className="text-green-500 mr-1" />
                Branch: <span className="font-semibold">{opportunity.branch}</span>
            </p>
            <p className="text-gray-600 mt-1 flex items-center">
                <MdAccessTime className="text-orange-500 mr-1" />
                Experience: <span className="font-semibold">{opportunity.yearOfExperience} years</span>
            </p>

            {/* Description Section */}
            <p className="text-gray-600 mt-4 bg-gray-50 p-3 rounded-md">{opportunity.description}</p>

            <div className="flex items-center mt-4">
                <FaCalendarAlt className="text-gray-500 mr-2" />
                <span className="text-gray-600">Application Deadline: <span className="font-semibold">{new Date(opportunity.applicationDeadline).toLocaleDateString()}</span></span>
            </div>
            <div className="flex items-center">
                <FaCalendarAlt className="text-gray-500 mr-2" />
                <span className="text-gray-600">Posted on: <span className="font-semibold">{new Date(opportunity.createdAt).toLocaleDateString()}</span></span>
            </div>

            <Link
                href={`/opportunities/${opportunity.opportunityID}`}
                className="mt-4 inline-block bg-blue-600 text-white text-center font-semibold py-2 px-4 rounded transition-colors duration-200 hover:bg-blue-500"
                rel="noopener noreferrer"
            >
                Apply Now
            </Link>
        </div>
    );
};

export default OpportunityCard;

