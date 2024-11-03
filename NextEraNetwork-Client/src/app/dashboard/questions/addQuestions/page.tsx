import React from 'react';
import QuestionForm from '@/components/Forms/Student/QuestionForm';

const AddQuestionPage = () => {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Add New Question</h1>
      <QuestionForm />
    </div>
  );
};

export default AddQuestionPage;
