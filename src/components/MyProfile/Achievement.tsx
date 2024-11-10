'use client';
import { getUserAchievment } from "@/services/operations/student/profileAPI";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/reducer/store';
import moment from "moment";
import PreLoader from "../PreLoader";

interface AchievementItem {
    title: string;
    description: string;
    dateAchieved: string;
    awardingOrganization: string;
}

interface ProfileHeaderProps {
    username: string;
}

const Achievement: React.FC<ProfileHeaderProps> = ({ username }) => {
    const userAchievementList = useSelector((state: RootState) => state.profile.achievementList);
    const loading = useSelector((state: RootState) => state.profile.loading);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserAchievment(username));
    }, [dispatch, username])

    return (
        <>
            {loading ?
                <PreLoader/> : userAchievementList[0]._id  &&
                (
                    <section id="achievement" className="scroll-mt-[11vh] py-10" data-aos="fade-up" data-aos-delay="200">
                        <div className="flex flex-col items-center gap-4 mb-10">
                            <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Achievements</h2>
                            <hr className="w-16 h-1 bg-blue-500 rounded" />
                        </div>
                        <div className=" mx-auto">
                            {loading ?
                                <p>Loading....</p>
                                :
                                (
                                    userAchievementList.map((item, index) => (
                                        <div key={index} className="resume-item mb-6 border border-gray-200 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
                                            <div className="flex items-center mb-3">
                                                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                                                    {/* Optional: Add an icon or badge here */}
                                                    <span className="font-semibold">{index + 1}</span>
                                                </div>
                                                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-300">{item.title}</h4>
                                            </div>
                                            <p className="italic text-gray-600 dark:text-gray-400 mb-1">{item.awardingOrganization}</p>
                                            <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{moment(item.date_achieved).format('DD-MM-YYYY')}</p>
                                        </div>
                                    ))
                                )
                            }
                        </div>
                    </section>
                )
            }
        </>
    );
};

export default Achievement;
