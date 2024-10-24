'use client';
import React, { useState } from 'react';
import InputText from '../Inputs/InputText';
import SelectInput from '../Inputs/SelectInput';
import MyRichTextEditor from '../Inputs/MyTextEditor';

interface OpportunityFormData {
    profile: string;
    company: string;
    description: string;
    experience: string;
    applicationLink: string;
    branch: string;
    positionType: string;
    applicationDeadline: string;
}

const OpportunityForm = () => {
    const [formData, setFormData] = useState<OpportunityFormData>({
        profile: '',
        company: '',
        description: '',
        experience: '',
        applicationLink: '',
        branch: '',
        positionType: '',
        applicationDeadline: '',
    });

    const branches = ['Computer Science', 'Mechanical', 'Electrical', 'Civil'];
    const positionTypes = [
        { value: 'fulltime', label: 'Full-time' },
        { value: 'parttime', label: 'Part-time' },
        { value: 'remote', label: 'Remote' },
        { value: 'onsite', label: 'On-site' },
    ];

    // Handling form field changes
    const handleChange = (field: Partial<OpportunityFormData>) => {
        setFormData((prevData) => ({
            ...prevData,
            ...field,
        }));
    };

    const handleTextEditorChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // Submit Handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("form value", formData);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded-md shadow-md">


            <div className='md:grid md:grid-cols-2 md:gap-x-10'>
                {/* Company */}
                <InputText
                    label="Company"
                    value={formData.company}
                    onChange={(value) => handleChange({ company: value })}
                    placeholder="Enter company name"
                    required={true}
                />
                {/* Profile */}
                <InputText
                    label="Profile"
                    value={formData.profile}
                    onChange={(value) => handleChange({ profile: value })}
                    placeholder="Enter your profile"
                    required={true}
                />

                {/* Year of Experience */}
                <InputText
                    label="Years of Experience"
                    value={formData.experience}
                    onChange={(value) => handleChange({ experience: value })}
                    placeholder="Enter years of experience"
                    required={true}
                />
                {/* Application Link */}
                <InputText
                    label="Application Link"
                    value={formData.applicationLink}
                    onChange={(value) => handleChange({ applicationLink: value })}
                    placeholder="Enter application link"
                    required={true}
                />
                {/* Branch Selection */}
                <SelectInput
                    label="Branch"
                    value={formData.branch}
                    options={branches.map(branch => ({ value: branch.toLowerCase(), label: branch }))}
                    onChange={(value) => handleChange({ branch: value })}
                    required={true}
                />
                {/* Position Type Selection */}
                <SelectInput
                    label="Position Type"
                    value={formData.positionType}
                    options={positionTypes}
                    onChange={(value) => handleChange({ positionType: value })}
                    required={true}
                />
            </div>

            {/* Application Deadline */}
            <InputText
                label="Application Deadline"
                value={formData.applicationDeadline}
                onChange={(value) => handleChange({ applicationDeadline: value })}
                placeholder="DD-MM-YYYY"
                type="date"
                required={true}
            />

            <MyRichTextEditor
                label='Description'
                value={formData.description}
                onChange={(value) => handleTextEditorChange('description', value)}
                placeholder='Write about Opportunity...'

            />

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Submit Opportunity
            </button>
        </form>
    );
};

export default OpportunityForm;
