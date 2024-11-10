'use client';
import React, { useEffect, useState } from 'react';
import InputText from '../../Inputs/InputText';
import InputTextArea from '../../Inputs/InputTextArea';
import { addUserAchievement, deleteUserDetail, getUserAchievment } from '@/services/operations/student/profileAPI';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/reducer/store';
import { FaTrash } from 'react-icons/fa';

interface AchievementData {
    title: string;
    description: string;
    date_achieved: string;
    awardingOrganization: string;
}

const AchievementForm: React.FC = () => {
    const user = useSelector((state: RootState) => state.profile.profileData)
    const userAchievements = useSelector((state: RootState) => state.profile.achievementList)
    const loading = useSelector((state: RootState) => state.profile.loading);
    const dispatch = useDispatch<AppDispatch>();

    const [achievement, setAchievement] = useState<AchievementData>({
        title: '',
        description: '',
        date_achieved: '',
        awardingOrganization: ''
    });

    useEffect(() => {
        dispatch(getUserAchievment(user.userName));
    }, [dispatch, user.userName])

    const handleInputChange = (field: keyof AchievementData, value: string | boolean | null) => {
        setAchievement((prev) => ({ ...prev, [field]: value }));
    };

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addUserAchievement(achievement, user.userName));
        setAchievement({
            title: '',
            description: '',
            date_achieved: '',
            awardingOrganization: ''
        });
    };

    const handleDelete = (achievementID: string): void => {
        dispatch(deleteUserDetail('achievementList',achievementID, user.userName ))
    };

    return (
        <div >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Achievements</h2>

            {userAchievements.map((achievement, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                    <div className='flex justify-between items-center'>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Achievment - {index + 1}</h3>
                        <button
                            className="text-gray-500 hover:text-red-600 focus:outline-none transform transition-transform duration-200 hover:scale-110"
                            title='Delete Achievment'
                            onClick={() => handleDelete(achievement._id)}
                        >
                            <FaTrash size={20} />
                        </button>
                    </div>
                    <InputText
                        label="Title"
                        value={achievement.title}
                        readOnly
                    />
                    <InputText
                        label="Date Achieved"
                        type="text"
                        value={achievement.date_achieved}
                        readOnly
                    />
                    <InputText
                        label="Awarding Organization"
                        value={achievement.awardingOrganization}
                        readOnly
                    />

                    <InputTextArea
                        label="Description"
                        value={achievement.description}
                        readOnly
                    />
                </div>
            ))}


            <form onSubmit={handleSave} className="bg-white shadow-md rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Add Achievment</h3>

                <div className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">

                    <InputText
                        label="Title"
                        value={achievement.title}
                        onChange={(value) => handleInputChange('title', value)}
                        placeholder="Enter achievement title"
                        required={true}
                    />
                    <InputText
                        label="Date Achieved"
                        type="date"
                        value={achievement.date_achieved}
                        onChange={(value) => handleInputChange('date_achieved', value)}
                        required={false}
                    />
                    <InputText
                        label="Awarding Organization"
                        value={achievement.awardingOrganization}
                        onChange={(value) => handleInputChange('awardingOrganization', value)}
                        placeholder="Enter awarding organization"
                        required={false}
                    />

                    <InputTextArea
                        label="Description"
                        value={achievement.description}
                        onChange={(value) => handleInputChange('description', value)}
                        placeholder="Describe the achievement"
                        required={false}
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

export default AchievementForm;
