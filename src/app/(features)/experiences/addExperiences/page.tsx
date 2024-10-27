'use client';
import ExperienceForm from '@/components/Forms/Student/ExperienceForm';
import React from 'react';
import { useRouter } from 'next/navigation';

const AddExperiencePage = () => {
    const router = useRouter();

    return (
        <div className="container mx-auto p-6 ">
            <div className='flex justify-between items-center'>
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Add Experiences</h1>
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
                <ExperienceForm />
            </div>
        </div>
    );
};

export default AddExperiencePage;
