'use client';
import React, { useState } from 'react';
import InputText from '../Inputs/InputText';
import SelectInput from '../Inputs/SelectInput';
import MyRichTextEditor from '../Inputs/MyTextEditor';

interface QuestionFormData {
    branch: string;
    difficulty: string;
    description: string;
    companyName: string;
    questionTitle: string;
    questionLink: string;
}

const QuestionForm = () => {
    const [formData, setFormData] = useState<QuestionFormData>({
        branch: '',
        difficulty: '',
        description: '',
        companyName: '',
        questionTitle: '',
        questionLink: '',
    });

    const branches = ['Computer Science', 'Mechanical', 'Electrical', 'Civil'];
    const difficulties = [
        { value: 'low', label: 'Low' },
        { value: 'medium', label: 'Medium' },
        { value: 'high', label: 'High' },
    ];

    // Handling form field changes
    const handleChange = (field: Partial<QuestionFormData>) => {
        setFormData((prevData) => ({
            ...prevData,
            ...field,
        }));
    };

    // Submit Handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("form value", formData);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded-md shadow-md">
            {/* Question Title */}
            <InputText
                label="Question Title"
                value={formData.questionTitle}
                onChange={(value) => handleChange({ questionTitle: value })}
                placeholder="Enter question title"
                required={true}
            />
            <div className='md:grid md:grid-cols-2 md:gap-x-10'>
                {/* Branch Selection */}
                <SelectInput
                    label="Branch"
                    value={formData.branch}
                    options={branches.map(branch => ({ value: branch.toLowerCase(), label: branch }))}
                    onChange={(value) => handleChange({ branch: value })}
                    required={true}
                />
                {/* Difficulty Selection */}
                <SelectInput
                    label="Difficulty"
                    value={formData.difficulty}
                    options={difficulties}
                    onChange={(value) => handleChange({ difficulty: value })}
                    required={true}
                />
                {/* Company Name */}
                <InputText
                    label="Company Name"
                    value={formData.companyName}
                    onChange={(value) => handleChange({ companyName: value })}
                    placeholder="Enter company name"
                    required={true}
                />

                {/* Question Link */}
                <InputText
                    label="Question Link"
                    value={formData.questionLink}
                    onChange={(value) => handleChange({ questionLink: value })}
                    placeholder="Enter question link"
                    required={true}
                />
            </div>

            {/* Description */}
            <MyRichTextEditor
                label='Description'
                value={formData.description}
                onChange={(value) => handleChange({ description: value })}
                placeholder='Write your question description...'
                required={true}
            />

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Submit Question
            </button>
        </form>
    );
};

export default QuestionForm;
