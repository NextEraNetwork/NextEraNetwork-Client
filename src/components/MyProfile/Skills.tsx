'use client';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/reducer/store';
import moment from "moment";
import { getUserDataByUsername } from "@/services/operations/student/profileAPI";
import PreLoader from "../PreLoader";

interface Params {
    username: string;
}


const Skills: React.FC<Params> = ({ username }) => {
    const userSkillsList = useSelector((state: RootState) => state.profile.profilDataByUsername.skills);
    const loading = useSelector((state: RootState) => state.profile.loading);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserDataByUsername(username));
    }, [dispatch, username])

    return (
        <>
            {loading
                ? <PreLoader /> : userSkillsList.length > 0 &&
                (
                    <section id="experience" className="scroll-mt-[11vh]" data-aos="fade-up" data-aos-delay="200">
                        <div className="flex flex-col items-center gap-2">
                            <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Skills</h2>
                            <hr className="flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {
                                userSkillsList?.map((skill, index) => (
                                    <div key={index} className="flex items-center">
                                        <span className="bg-blue-200 text-gray-800 py-1 px-4 md:py-2 md:text-xl rounded-full text-sm">
                                            {skill}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                )
            }</>
    );
};

export default Skills;
