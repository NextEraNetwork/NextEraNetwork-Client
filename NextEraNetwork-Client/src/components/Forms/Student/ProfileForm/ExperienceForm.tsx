'use client';
import React, { useState } from 'react';
import InputText from '../../Inputs/InputText'; // Assuming InputText component is in the same directory
import MyRichTextEditor from '../../Inputs/MyTextEditor'; // Assuming MyTextEditor component is in the same directory

// Define the shape of an experience entry
interface ExperienceFormData {
    jobTitle: string;
    companyName: string;
    description: string | null;
    jobMode: 'remote' | 'onsite' | 'hybrid';
    location: string | null;
    start_date: string;
    end_date: string;
    continuing: boolean; // Whether the job is ongoing
}

type ExperienceFormFieldType = | string | boolean| null;

const ExperienceForm = () => {
    const [experienceList, setExperienceList] = useState<ExperienceFormData[]>([
        {
            jobTitle: '',
            companyName: '',
            description: '',
            jobMode: 'remote',
            location: '',
            start_date: '',
            end_date: '',
            continuing: false,
        },
    ]);

    // Handle input change for a specific experience entry
    const handleInputChange = (index: number, field: keyof ExperienceFormData, value: ExperienceFormFieldType) => {
        const newList = [...experienceList];
        newList[index] = {
            ...newList[index],
            [field]: value,
        };
        setExperienceList(newList);
    };

    // const handleTextEditorChange = (index: number, field: string, value: string) => {
    //     const newList = [...experienceList];
    //     newList[index] = {
    //         ...newList[index],
    //         [field]: value,
    //     }
    //     setExperienceList(newList);
    // };

    // Add a new experience entry
    
    const handleAddEntry = () => {
        setExperienceList([
            ...experienceList,
            {
                jobTitle: '',
                companyName: '',
                description: '',
                jobMode: 'remote',
                location: '',
                start_date: '',
                end_date: '',
                continuing: false,
            },
        ]);
    };

    // Remove an experience entry
    const handleRemoveEntry = (index: number) => {
        const newList = experienceList.filter((_, i) => i !== index);
        setExperienceList(newList);
    };

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("experience form data", experienceList);
    }

    return (
        // <form onSubmit={handleSave}>
        //     {/* <h2 className="text-xl font-bold mb-4">Work Experience</h2> */}
        //     {experienceList.map((experience, index) => (
        //         <div key={index} className="mb-6 border border-gray-200 p-4 rounded-lg">
        //             <h3 className="text-lg font-semibold">Experience - {index + 1}</h3>

        //             <div className='md:grid md:grid-cols-2 md:gap-x-10'>
        //                 {/* Job Title Input */}
        //                 <InputText
        //                     label="Job Title"
        //                     value={experience.jobTitle}
        //                     onChange={(value) => handleInputChange(index, 'jobTitle', value)}
        //                     placeholder="Enter Job Title"
        //                     required={true}
        //                 />

        //                 {/* Company Name Input */}
        //                 <InputText
        //                     label="Company Name"
        //                     value={experience.companyName}
        //                     onChange={(value) => handleInputChange(index, 'companyName', value)}
        //                     placeholder="Enter Company Name"
        //                     required={true}
        //                 />

        //                 {/* Job Mode Select (Remote, Onsite, Hybrid) */}
        //                 <div className="mb-6">
        //                     <label className="block mb-2 text-sm font-medium text-gray-700">Job Mode</label>
        //                     <select
        //                         className="mt-1 block w-full p-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
        //                         value={experience.jobMode}
        //                         onChange={(e) => handleInputChange(index, 'jobMode', e.target.value)}
        //                     >
        //                         <option value="remote">Remote</option>
        //                         <option value="onsite">Onsite</option>
        //                         <option value="hybrid">Hybrid</option>
        //                     </select>
        //                 </div>

        //                 {/* Location Input */}
        //                 <InputText
        //                     label="Location"
        //                     value={experience.location || ''}
        //                     onChange={(value) => handleInputChange(index, 'location', value)}
        //                     placeholder="Enter Job Location"
        //                 />

        //                 {/* Start Date Input */}
        //                 <InputText
        //                     label="Start Date"
        //                     type="date"
        //                     value={experience.start_date}
        //                     onChange={(value) => handleInputChange(index, 'start_date', value)}
        //                     required={true}
        //                 />

        //                 <div>
        //                     {/* End Date Input */}
        //                     <InputText
        //                         label="End Date"
        //                         type="date"
        //                         value={experience.end_date}
        //                         onChange={(value) => handleInputChange(index, 'end_date', value)}
        //                         required={!experience.continuing}
        //                     />
        //                     <label className="mt-2 block">
        //                         <input
        //                             type="checkbox"
        //                             checked={experience.continuing}
        //                             onChange={(e) => handleInputChange(index, 'continuing', e.target.checked)}
        //                         />{' '}
        //                         Currently Continuing
        //                     </label>
        //                 </div>
        //             </div>

        //             {/* Description Editor */}
        //             <MyRichTextEditor
        //                 label='Description'
        //                 value={experience.description || ''}
        //                 onChange={(value) => handleInputChange(index, 'description', value)}
        //             />

        //             <div className="flex justify-end">
        //                 {experienceList.length > 1 && (
        //                     <button
        //                         type="button"
        //                         className="text-red-500 hover:underline mt-2"
        //                         onClick={() => handleRemoveEntry(index)}
        //                     >
        //                         Remove Experience
        //                     </button>
        //                 )}
        //             </div>
        //         </div>
        //     ))}

        //     <div className='flex flex-row justify-between'>
        //         <button
        //             type="button"
        //             className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        //             onClick={handleAddEntry}
        //         >
        //             Add Another Experience
        //         </button>

        //         {/* Save Button */}
        //         <button
        //             type="submit"
        //             className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        //         >
        //             Save
        //         </button>
        //     </div>
        // </form>

        <form onSubmit={handleSave} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Work Experience</h2>

            {experienceList.map((experience, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Experience - {index + 1}</h3>

                    <div className='md:grid md:grid-cols-2 md:gap-x-10'>
                        {/* Job Title Input */}
                        <InputText
                            label="Job Title"
                            value={experience.jobTitle}
                            onChange={(value) => handleInputChange(index, 'jobTitle', value)}
                            placeholder="Enter Job Title"
                            required={true}
                        />

                        {/* Company Name Input */}
                        <InputText
                            label="Company Name"
                            value={experience.companyName}
                            onChange={(value) => handleInputChange(index, 'companyName', value)}
                            placeholder="Enter Company Name"
                            required={true}
                        />

                        {/* Job Mode Select (Remote, Onsite, Hybrid) */}
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Job Mode</label>
                            <select
                                className="mt-1 block w-full p-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                                value={experience.jobMode}
                                onChange={(e) => handleInputChange(index, 'jobMode', e.target.value)}
                            >
                                <option value="remote">Remote</option>
                                <option value="onsite">Onsite</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                        </div>

                        {/* Location Input */}
                        <InputText
                            label="Location"
                            value={experience.location || ''}
                            onChange={(value) => handleInputChange(index, 'location', value)}
                            placeholder="Enter Job Location"
                        />

                        {/* Start Date Input */}
                        <InputText
                            label="Start Date"
                            type="date"
                            value={experience.start_date}
                            onChange={(value) => handleInputChange(index, 'start_date', value)}
                            required={true}
                        />

                        {/* End Date Input */}
                        <div className="relative">
                            <InputText
                                label="End Date"
                                type="date"
                                value={experience.end_date}
                                onChange={(value) => handleInputChange(index, 'end_date', value)}
                                required={!experience.continuing}
                            />
                            <label className="mt-2 block">
                                <input
                                    type="checkbox"
                                    checked={experience.continuing}
                                    onChange={(e) => handleInputChange(index, 'continuing', e.target.checked)}
                                    className="mr-2"
                                />
                                Currently Continuing
                            </label>
                        </div>
                    </div>

                    {/* Description Editor */}
                    <MyRichTextEditor
                        label='Description'
                        value={experience.description || ''}
                        onChange={(value) => handleInputChange(index, 'description', value)}
                    />

                    {/* Remove Experience Button */}
                    <div className="flex justify-end">
                        {experienceList.length > 1 && (
                            <button
                                type="button"
                                className="text-red-500 hover:underline mt-2"
                                onClick={() => handleRemoveEntry(index)}
                            >
                                Remove Experience
                            </button>
                        )}
                    </div>
                </div>
            ))}

            <div className='flex flex-row justify-between mt-4'>
                <button
                    type="button"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition duration-200"
                    onClick={handleAddEntry}
                >
                    Add Another Experience
                </button>

                {/* Save Button */}
                <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition duration-200"
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default ExperienceForm;