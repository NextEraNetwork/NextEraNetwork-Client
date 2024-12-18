'use client';
import React, { useState } from 'react';
import { ProfileData } from '@/types/MultiForm';
import EducationalDetails from '@/components/Forms/MultiForm/EducationalDetails/EducationalDetails';
import PersonalInformation from '@/components/Forms/MultiForm/PersonalInformation/PersonalInformation';
import AdditionalInformation from '@/components/Forms/MultiForm/AdditionalInformation/AdditionalInformation';
import InstructionsComponent from './InstructionsComponent';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/reducer/store';
import { RootState } from '@/reducer/store';
import PreLoader from '@/components/PreLoader';
import { createProfileUser } from '@/services/operations/student/profileAPI';

const ProfileCreationGuide: React.FC = () => {
    const [formData, setFormData] = useState<ProfileData>({
        firstname: '',
        lastname: '',
        middlename: '',
        abcID : '',
        gender: 'male',
        category: 'GEN',
        profession: '',
        position: '',
        state: '',
        district: '',
        about: '',
        passOut_Year: new Date().getFullYear(),
        skills: [],
        hobbies: [],
        links: {},
        languages: [],
        university: '',
        college: '',
        department: '',
        courses: '',
        branch: '',
        enrollmentNumber: '',
        // education: [],
        // projects: [],
        // experience: [],
        // certification: [],
        // achievement: [],
    });

    const [currentStep, setCurrentStep] = useState(0);
    const [checkMark, setCheckmark] = useState(true);
    const loading = useSelector((state: RootState) => state.profile.loading);
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (newData: Partial<ProfileData>) => {
        setFormData((prev) => ({ ...prev, ...newData }));
    };

    const handleNext = () => {
        if (currentStep === 0 && checkMark) {
            setCurrentStep(1)
            console.log("currentStep", currentStep);
        }
        else if (currentStep === 1 && validateEducationalDetails()) {
            setCurrentStep((prev) => prev + 1);
        } else if (currentStep === 2 && validatePersonalDetails()) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const validateEducationalDetails = () => {
        const requiredFields = [
            formData.university,
            formData.college,
            formData.department,
            formData.courses,
            formData.branch,
            formData.enrollmentNumber,
            formData.passOut_Year,
        ];
        return requiredFields.every(field => field);
    };

    const validatePersonalDetails = () => {
        const requiredFields = [
            formData.firstname,
            formData.lastname,
            formData.category,
            formData.gender,
            formData.state,
            formData.district,
            formData.position,
        ]

        return requiredFields.every(field => field);
    }

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };


    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Profile submitted:', formData);
        dispatch(createProfileUser(formData));
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-16 px-32 text-black">
            <form onSubmit={handleFormSubmit} className="p-10 bg-white rounded-lg shadow-xl w-full space-y-10">
                <h2 className="text-xl font-semibold text-center">Create Your Profile</h2>
                <p className="text-center text-gray-600">
                    Please fill out the following sections accurately. Your information helps us provide you with tailored experiences.
                </p>

                {currentStep === 0 && <InstructionsComponent setCheckMark={setCheckmark} onProceed={handleNext} />}

                {currentStep === 1 && (
                    <EducationalDetails formData={formData} handleChange={handleChange} />

                )}

                {currentStep === 2 && (
                    <PersonalInformation formData={formData} handleChange={handleChange} />
                )}

                {currentStep === 3 && (
                    <AdditionalInformation formData={formData} handleChange={handleChange} />
                )}

                <div className="flex justify-between mt-5">
                    {currentStep > 0 && (
                        <button
                            onClick={handleBack}
                            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                        >
                            Back
                        </button>
                    )}
                    {currentStep < 3 ? (
                        <button
                            onClick={handleNext}
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            type='submit'
                            className={`bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600`}
                            disabled={loading}
                        >
                            {!loading ? "Submit" : <PreLoader />}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ProfileCreationGuide;
