import React, { useState } from 'react';
import { MdCancel } from 'react-icons/md';

interface InputSkillsProps {
    skills: string[];
    onAddSkill: (skill: string) => void;
    onRemoveSkill: (index: number) => void;
}

const InputSkills: React.FC<InputSkillsProps> = ({ skills, onAddSkill, onRemoveSkill }) => {
    const [skill, setSkill] = useState('');

    const handleAddSkill = () => {
        if (skill.trim()) {
            onAddSkill(skill.trim());
            setSkill(''); // Clear input field after adding
        }
    };

    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-700">Skills</label>
            <div className="flex items-center justify-between gap-2">
                <input
                    type="text"
                    placeholder="List your skills here, showcasing what you excel at."
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    className="mt-1 block w-full p-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
                />
                <span
                    onClick={handleAddSkill}
                    className="cursor-pointer flex items-center p-[13px] px-4 bg-green-400 hover:bg-green-500 text-white font-sans font-semibold rounded-[3px]"
                >
                    Add
                </span>
            </div>
            <div className="my-2">
                {skills.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1 flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <li key={index} className="flex justify-between items-center bg-blue-400 p-2 rounded-md">
                                {skill}
                                <MdCancel
                                    onClick={() => onRemoveSkill(index)}
                                    className="cursor-pointer text-red-500 ml-4"
                                >
                                    Remove
                                </MdCancel>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default InputSkills;
