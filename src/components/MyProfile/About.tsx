'use client'
import React, { useEffect } from "react";
import { images } from "@/utils/images";
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/reducer/store';
import { BsLinkedin, BsGithub, BsYoutube, BsTwitter } from 'react-icons/bs';
import { getUserDataByUsername } from "@/services/operations/student/profileAPI";
import PreLoader from "../PreLoader";
import Custom404 from "@/app/not-found";

interface ProfileHeaderProps {
    username: string;
}

const About: React.FC<ProfileHeaderProps> = ({ username }) => {
    const user = useSelector((state: RootState) => state.profile.profilDataByUsername);
    const loading = useSelector((state: RootState) => state.profile.loading);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserDataByUsername(username));
    }, [dispatch, username])

    return (
        <>
            {loading ?
                <PreLoader />
                : user.userName ?
                    (
                        <section id="about" className="scroll-mt-[11vh]">
                            <div className="flex flex-col justify-center items-center gap-2">
                                <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">About Me</h2>
                                <hr className="flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
                            </div>
                            <main className="px-8 py-10 rounded-md shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)] bg-white dark:bg-gray-800 flex flex-col gap-6 lg:flex-row justify-between items-center">
                                <div className="lg:w-1/3 flex flex-col justify-start items-center">
                                    <div className="w-64 h-64 rounded-full mb-4">
                                        <Image src={images.jinesh ? images.jinesh : `https://api.dicebear.com/5.x/initials/svg?seed=${user.firstName}`} className="w-full h-full rounded-full" alt="profileImage" />
                                    </div>
                                    <div className="flex flex-col gap-2 justify-start items-start text-slate-700 dark:text-slate-300 whitespace-nowrap">
                                        <p className="text-left"><strong>Name: </strong><span>{user.firstName + " " + user.middleName + " " + user.lastName}</span></p>
                                        <p className="text-left"><strong>Profile: </strong><span>{user.profession}</span></p>
                                        <p className="text-left"><strong>Email: </strong><a href={`mailto:${user.email}`}>{user.email}</a></p>
                                    </div>

                                    <div className="user-links flex justify-center space-x-4 mt-3">
                                        {user.links && Object.keys(user.links).length > 0 ? (
                                            Object.keys(user.links).map((key, index) => {
                                                const url = user.links[key as keyof typeof user.links];

                                                // Check if url is a string before rendering
                                                if (typeof url !== 'string') return null;

                                                return (
                                                    <li key={index} className="list-none text-xl">
                                                        {key === "linkedin" && url && (
                                                            <a href={url} className="text-gray-600 hover:text-blue-600">
                                                                <BsLinkedin />
                                                            </a>
                                                        )}
                                                        {key === "github" && url && (
                                                            <a href={url} className="text-gray-600 hover:text-black">
                                                                <BsGithub />
                                                            </a>
                                                        )}
                                                        {key === "twitter" && url && (
                                                            <a href={url} className="text-gray-600 hover:text-blue-400">
                                                                <BsTwitter />
                                                            </a>
                                                        )}
                                                        {key === "youtube" && url && (
                                                            <a href={url} className="text-gray-600 hover:text-red-600">
                                                                <BsYoutube />
                                                            </a>
                                                        )}
                                                    </li>
                                                );
                                            })
                                        ) : (
                                            <p>No user links available</p>
                                        )}
                                    </div>

                                </div>

                                <div className="lg:w-3/4 lg:text-xl text-sm text-justify text-slate-700 dark:text-slate-300">
                                    <p>{user.about}</p>
                                </div>
                            </main>
                        </section>
                    ) :
                    <>
                        <Custom404 />
                    </>
            }
        </>
    );
};

export default About;
