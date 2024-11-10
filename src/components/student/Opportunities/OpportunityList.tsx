// /components/OpportunityList.tsx
import React from 'react';
import OpportunityCard from './OpportunityCard';
import { Opportunity } from '@/types/Opportunity';

interface OpportunityListProps {
    opportunities: Opportunity[];
}

const OpportunityList: React.FC<OpportunityListProps> = ({ opportunities }) => {
    console.log("opportunity list", opportunities);
    return (
        <div className="space-y-4">
            {opportunities?.map(opportunity => (
                <OpportunityCard key={opportunity._id} opportunity={opportunity} />
            ))}
        </div>
    );
};

export default OpportunityList;
