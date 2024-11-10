'use client';
import { getUserExperience } from "@/services/operations/student/profileAPI";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/reducer/store';
import moment from "moment";
import { preload } from "react-dom";
import PreLoader from "../PreLoader";

interface ExperienceItem {
    jobTitle: string;
    period: string;
    company: string;
    responsibilities: string[];
}

interface ProfileHeaderProps {
    username: string;
}

const Experience: React.FC<ProfileHeaderProps> = ({ username }) => {
    const userExperienceList = useSelector((state: RootState) => state.profile.experienceList);
    const loading = useSelector((state: RootState) => state.profile.loading);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserExperience(username));
    }, [dispatch, username])

    return (
        <>
            {loading ?
                <PreLoader /> : userExperienceList[0]._id &&
                (
                    <section id="experience" className="scroll-mt-[11vh]" data-aos="fade-up" data-aos-delay="200">
                        <div className="flex flex-col items-center gap-2">
                            <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Professional Experience</h2>
                            <hr className="flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
                        </div>
                        {
                            userExperienceList.map((item, index) => (
                                <div
                                    key={index}
                                    className="resume-item relative border-l-2 border-blue-500 pl-5 mb-6 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-white dark:before:bg-slate-900 before:border-2 before:border-blue-500"
                                >
                                    <h4 className="text-lg font-bold uppercase text-gray-700 dark:text-gray-300">{item.jobTitle}</h4>
                                    <h5 className="text-base font-semibold bg-accent/10 inline-block p-1 rounded-md mb-2 dark:text-gray-400">{moment(item.start_date).format('MM-YYYY')} - {item.end_date ? moment(item.end_date).format('MM-YYYY') : "Present"}</h5>
                                    <p className="italic text-gray-600 dark:text-gray-400 mb-4">{item.companyName}</p>
                                    <p
                                        className="italic text-gray-600 dark:text-gray-400 mb-4"
                                        dangerouslySetInnerHTML={{ __html: item.description || '' }}
                                    ></p>
                                </div>
                            ))
                        }
                    </section>
                )
            }
        </>
    );
};

export default Experience;
