'use client';
import React, { useState } from 'react';
import InputText from '../../Inputs/InputText';
import InputTextArea from '../../Inputs/InputTextArea';

interface AchievementData {
    title: string;
    description: string;
    date_achieved: string;
    awardingOrganization: string;
}

const AchievementForm: React.FC = () => {
    const [achievements, setAchievements] = useState<AchievementData[]>([
        { title: '', description: '', date_achieved: '', awardingOrganization: '' },
    ]);

    const handleAchievementChange = (index: number, field: keyof AchievementData, value: string) => {
        const updatedAchievements = [...achievements];
        updatedAchievements[index][field] = value;
        setAchievements(updatedAchievements);
    };

    const addAchievement = () => {
        setAchievements([...achievements, { title: '', description: '', date_achieved: '', awardingOrganization: '' }]);
    };

    const removeAchievement = (index: number) => {
        setAchievements(achievements.filter((_, i) => i !== index));
    };

    const handleSave = () => {

    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Achievements</h2>

            {achievements.map((achievement, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Achievment - {index + 1}</h3>

                    <InputText
                        label="Title"
                        value={achievement.title}
                        onChange={(value) => handleAchievementChange(index, 'title', value)}
                        placeholder="Enter achievement title"
                        required={true}
                    />
                    <InputText
                        label="Date Achieved"
                        type="date"
                        value={achievement.date_achieved}
                        onChange={(value) => handleAchievementChange(index, 'date_achieved', value)}
                        required={false}
                    />
                    <InputText
                        label="Awarding Organization"
                        value={achievement.awardingOrganization}
                        onChange={(value) => handleAchievementChange(index, 'awardingOrganization', value)}
                        placeholder="Enter awarding organization"
                        required={false}
                    />

                    <InputTextArea
                        label="Description"
                        value={achievement.description}
                        onChange={(value) => handleAchievementChange(index, 'description', value)}
                        placeholder="Describe the achievement"
                        required={false}
                    />

                    <div className="flex justify-end">
                        {achievements.length > 1 && (
                            <button
                                type="button"
                                className="text-red-500 hover:underline mt-2"
                                onClick={() => removeAchievement(index)}
                            >
                                Remove Achievement
                            </button>
                        )}
                    </div>
                </div>
            ))}

            <div className='flex flex-row justify-between'>
                <button
                    type="button"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mt-4"
                    onClick={addAchievement}
                >
                    Add Another Achievement
                </button>

                <button
                    type="button"
                    className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>

        </div>
    );
};

export default AchievementForm;
