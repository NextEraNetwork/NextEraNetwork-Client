'use client';
import React from 'react';
import DiscussionForm from '@/components/Forms/Student/DiscussioForm';
import { useRouter } from 'next/navigation';

const AddDiscussionPage = () => {

  const router = useRouter();

  return (
    <div className="container mx-auto p-6">
      <div className='flex justify-between items-center'>
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Create New Discussion</h1>
        <div className="flex items-center justify-between mb-4">
          <span
            className="bg-slate-200 font-semibold p-3 rounded-md text-xs text-slate-700 cursor-pointer transition duration-300 hover:bg-slate-500 hover:text-white"
            onClick={() => router.back()}
          >
            Back
          </span>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <DiscussionForm />
      </div>
    </div>

  );
};

export default AddDiscussionPage;
