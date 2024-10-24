import React from 'react';
import OpportunityForm from '@/components/Forms/Student/OpportunityForm';

const AddOpportunityPage = () => {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Create New Opportunity</h1>
      <OpportunityForm  />
    </div>
  );
};

export default AddOpportunityPage;
