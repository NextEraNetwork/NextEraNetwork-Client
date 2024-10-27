'use client';
import React, { useState } from 'react';
import InputText from '../Inputs/InputText';
import UploadFileInput from '../Inputs/UploadFileInput';

interface NewsData {
    title: string;
    content: string;
    file?: File | null;
    tags: string[];
}

const NewsForm: React.FC = () => {
    const [newsData, setNewsData] = useState<NewsData>({
        title: '',
        content: '',
        file: null,
        tags: ['Campus', 'Initiative'], // Initial tag suggestions
    });

    const handleInputChange = (field: Partial<NewsData>) => {
        setNewsData((prevData) => ({ ...prevData, ...field }));
    };

    const handleTagChange = (index: number, value: string) => {
        const updatedTags = [...newsData.tags];
        updatedTags[index] = value;
        handleInputChange({ tags: updatedTags });
    };

    const handleSave = () => {
        console.log('News Data:', newsData);
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">Create News</h2>

            {/* Title */}
            <InputText
                label="Title"
                value={newsData.title}
                onChange={(value) => handleInputChange({ title: value })}
                placeholder="Enter News Title"
                required
            />

            {/* Content */}
            <InputText
                label="Content"
                value={newsData.content}
                onChange={(value) => handleInputChange({ content: value })}
                placeholder="Enter News Content"
                required
            />

            {/* File Upload */}
            <UploadFileInput
                label="Upload Image or PDF"
                onFileChange={(file) => handleInputChange({ file })}
            />


            {/* Tags */}
            <div className="mb-4">
                <label className="block font-medium text-gray-700 mb-2">Tags</label>
                {newsData.tags.map((tag, index) => (
                    <InputText
                        key={index}
                        label={`Tag ${index + 1}`}
                        value={tag}
                        onChange={(value) => handleTagChange(index, value)}
                        placeholder={`Enter Tag ${index + 1}`}
                    />
                ))}
            </div>

            {/* Save Button */}
            <div className="flex justify-end mt-6">
                <button
                    type="button"
                    onClick={handleSave}
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                >
                    Save News
                </button>
            </div>
        </div>
    );
};

export default NewsForm;
