'use client';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import InputText from '../../Inputs/InputText';
import MyRichTextEditor from '../../Inputs/MyTextEditor';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/reducer/store';
import { FaTrash } from 'react-icons/fa';
import { addUserExperience, deleteUserDetail, getUserExperience } from '@/services/operations/student/profileAPI';

interface ExperienceFormData {
    jobTitle: string;
    experienceType: string;
    companyName: string;
    description: string | null;
    jobMode: 'Remote' | 'Onsite' | 'Hybrid' | 'Offline' | 'Freelance' | 'Contract';
    location: string | null;
    start_date: string;
    end_date: string;
    continuing: boolean;
}


const ExperienceForm = () => {
    const user = useSelector((state: RootState) => state.profile.profileData)
    const userExperience = useSelector((state: RootState) => state.profile.experienceList)
    const loading = useSelector((state: RootState) => state.profile.loading);
    const dispatch = useDispatch<AppDispatch>();

    const [experience, setExperience] = useState<ExperienceFormData>({
        jobTitle: '',
        experienceType: '',
        companyName: '',
        description: '',
        jobMode: 'Remote',
        location: '',
        start_date: '',
        end_date: '',
        continuing: false,
    });
    useEffect(() => {
        dispatch(getUserExperience(user.userName));
    }, [dispatch, user.userName])

    console.log("Userexperience", userExperience)

    const handleInputChange = (field: keyof ExperienceFormData, value: string | boolean | null) => {
        setExperience((prev) => ({ ...prev, [field]: value }));
    };

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addUserExperience(experience, user.userName));
        setExperience({
            jobTitle: '',
            experienceType: '',
            companyName: '',
            description: '',
            jobMode: 'Remote',
            location: '',
            start_date: '',
            end_date: '',
            continuing: false,
        });

    };

    const handleDelete = (experienceID: string): void => {
        dispatch(deleteUserDetail('experienceList',experienceID, user.userName ))
    };

    return (
        <div className="experience-form-container">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Work Experiences</h2>

            {/* Display fetched experiences */}
            {userExperience.map((exp, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">

                    <div className='flex justify-between items-center'>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Experience {index + 1}</h3>
                        <button
                            className="text-gray-500 hover:text-red-600 focus:outline-none transform transition-transform duration-200 hover:scale-110"
                            title='Delete Experience'
                            onClick={() => handleDelete(exp._id)}
                        >
                            <FaTrash size={20} />
                        </button>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-x-10">
                        <InputText label="Job Title" value={exp.jobTitle} readOnly />
                        <InputText label="Company Name" value={exp.experienceType} readOnly />
                        <InputText label="Company Name" value={exp.companyName} readOnly />
                        <InputText label="Job Mode" value={exp.jobMode} readOnly />
                        <InputText label="Location" value={exp.location || ''} readOnly />
                        <InputText label="Start Date" type="text" value={moment(exp.start_date).format('DD-MM-YYYY')} readOnly />
                        <InputText label="End Date" type="text" value={exp.end_date ? moment(exp.end_date).format('DD-MM-YYYY') : 'Present'} readOnly />
                    </div>
                    <MyRichTextEditor label="Description" value={exp.description || ''} readOnly />
                </div>
            ))}


            {/* Form for adding new experience */}
            <form onSubmit={handleSave} className="bg-white shadow-md rounded-lg p-6 mt-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Experience</h2>

                <div className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                    <div className="md:grid md:grid-cols-2 md:gap-x-10">
                        <InputText
                            label="Job Title"
                            value={experience.jobTitle}
                            onChange={(value) => handleInputChange('jobTitle', value)}
                            placeholder="Enter Job Title"
                            required
                        />
                        <InputText
                            label="Experience Type"
                            value={experience.experienceType}
                            onChange={(value) => handleInputChange('experienceType', value)}
                            placeholder="Part-time inter, Full-time"
                            required
                        />
                        <InputText
                            label="Company Name"
                            value={experience.companyName}
                            onChange={(value) => handleInputChange('companyName', value)}
                            placeholder="Enter Company Name"
                            required
                        />
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Job Mode</label>
                            <select
                                className="mt-1 block w-full p-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                                value={experience.jobMode}
                                onChange={(e) => handleInputChange('jobMode', e.target.value)}
                            >
                                <option value="Remote">Remote</option>
                                <option value="Onsite">Onsite</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Offline">Offline</option>
                                <option value="Freelance">Freelance</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </div>
                        <InputText
                            label="Location"
                            value={experience.location || ''}
                            onChange={(value) => handleInputChange('location', value)}
                            placeholder="Enter Job Location"
                        />
                        <InputText
                            label="Start Date"
                            type="date"
                            value={experience.start_date}
                            onChange={(value) => handleInputChange('start_date', value)}
                            required
                        />
                        <div className="relative">
                            <InputText
                                label="End Date"
                                type="date"
                                value={experience.end_date}
                                onChange={(value) => handleInputChange('end_date', value)}
                                required={!experience.continuing}
                            />
                            <label className="mt-2 block">
                                <input
                                    type="checkbox"
                                    checked={experience.continuing}
                                    onChange={(e) => handleInputChange('continuing', e.target.checked)}
                                    className="mr-2"
                                />
                                Currently Continuing
                            </label>
                        </div>
                    </div>
                    <MyRichTextEditor
                        label="Description"
                        value={experience.description || ''}
                        onChange={(value) => handleInputChange('description', value)}
                    />
                </div>

                <div className="flex flex-row justify-between mt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition duration-200"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ExperienceForm;
