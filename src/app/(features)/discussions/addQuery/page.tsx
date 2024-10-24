import React from 'react';
import DiscussionForm from '@/components/Forms/Student/DiscussioForm';

const AddDiscussionPage = () => {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Create New Discussion</h1>
      <DiscussionForm  />
    </div>
  );
};

export default AddDiscussionPage;
