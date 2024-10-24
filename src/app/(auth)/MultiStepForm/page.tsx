'use client';
import React, { useState } from 'react';
import { ProfileData } from '@/types/MultiForm';
import EducationalDetails from '@/components/Forms/MultiForm/EducationalDetails/EducationalDetails';
import PersonalInformation from '@/components/Forms/MultiForm/PersonalInformation/PersonalInformation';
import AdditionalInformation from '@/components/Forms/MultiForm/AdditionalInformation/AdditionalInformation';
import InstructionsComponent from './InstructionsComponent';

const ProfileCreationGuide: React.FC = () => {
    const [formData, setFormData] = useState<ProfileData>({
        firstName: '',
        lastName: '',
        middleName: '',
        gender: 'Male',
        category: 'gen',
        profession: '',
        position: '',
        state: 'andhra_pradesh',
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
        education: [],
        projects: [],
        experience: [],
        certification: [],
        achievement: [],
    });

    const [currentStep, setCurrentStep] = useState(0);
    const [checkMark, setCheckmark] = useState(false);

    const handleChange = (newData: Partial<ProfileData>) => {
        setFormData((prev) => ({ ...prev, ...newData }));
    };

    const handleNext = () => {
        if (currentStep === 0 && checkMark) {
            setCurrentStep(1);
        }
        else if (currentStep === 1 && validateEducationalDetails()) {
            setCurrentStep((prev) => prev + 1);
        } else if (currentStep === 2) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
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

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-16 px-32">
            <div className="p-10 bg-white rounded-lg shadow-xl w-full space-y-10">
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
                    {currentStep < 2 ? (
                        <button
                            onClick={handleNext}
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            onClick={() => console.log('Profile submitted:', formData)}
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileCreationGuide;
