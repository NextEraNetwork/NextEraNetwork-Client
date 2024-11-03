'use client';
import React, { useState } from 'react';
import InputText from '../Inputs/InputText';
import SelectInput from '../Inputs/SelectInput';
import MyRichTextEditor from '../Inputs/MyTextEditor';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/reducer/store';
import { addDiscussion } from '@/services/operations/student/discussionAPI';


interface DiscussionFormData {
    title: string;
    branch: string;
    description: string;
}

const DiscussionForm = () => {
    const [formData, setFormData] = useState<DiscussionFormData>({
        title: '',
        branch: '',
        description: '',
    });
    const dispatch = useDispatch<AppDispatch>();


    // Handling form field changes
    const handleChange = (field: Partial<DiscussionFormData>) => {
        setFormData((prevData) => ({
            ...prevData,
            ...field, // Spread the updated field into the state
        }));
    };

    const handleTextEditorChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };


    // Submit Handler
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("form value", formData);
        dispatch(addDiscussion(formData));
        
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded-md shadow-md">
            {/* Discussion Title */}

            <InputText
                label="Discussion Title"
                value={formData.title}
                onChange={(value) => handleChange({ title: value })}
                placeholder="Enter Discussion Title"
                required={true}
            />
            {/* Branch Selection */}
            <SelectInput
                label="Title Interest"
                value={formData.branch}
                options={[
                    { value: 'ece', label: 'ECE' },
                    { value: 'cse', label: 'CSE' },
                ]}
                onChange={(value) => handleChange({ branch: value })}
                required={true}
            />
            {/* Description */}
            <MyRichTextEditor
                label='Description'
                value={formData.description}
                onChange={(value) => handleTextEditorChange('description', value)}
                placeholder='Write about your topic...'
                required={true}
            />

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Submit Discussion
            </button>
        </form>
    );
};

export default DiscussionForm;
