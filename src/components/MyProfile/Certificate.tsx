'use client';
import React, { useEffect } from "react";
import { FaAward } from "react-icons/fa"; import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/reducer/store';
import { getUserCertificate } from "@/services/operations/student/profileAPI";
import PreLoader from "../PreLoader";

interface CertificateItem {
    certificationName: string;
    issuingOrganization: string;
    certificationLink: string;
    issueDate: string;
    expiryDate?: string;
}

interface ProfileHeaderProps {
    username: string;
}

const Certificate: React.FC<ProfileHeaderProps> = ({ username }) => {
    const userCertificationList = useSelector((state: RootState) => state.profile.certicationList);
    const loading = useSelector((state: RootState) => state.profile.loading);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserCertificate(username));
    }, [dispatch, username])

    return (
        <>
            {loading ?
                <PreLoader /> : userCertificationList[0]._id &&
                (
                    <section id="certificate" className="scroll-mt-[11vh] py-10 dark:bg-gray-900" data-aos="fade-up" data-aos-delay="200">
                        <div className="flex flex-col items-center gap-4 mb-6">
                            <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Certificates</h2>
                            <hr className="w-16 h-1 bg-blue-500 rounded" />
                        </div>
                        <div className="flex flex-col space-y-4">
                            {userCertificationList.map((item, index) => (
                                <div key={index} className="resume-item flex flex-col md:flex-row justify-between items-start bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                                    <div className="">
                                        <div className="flex items-center mb-2">
                                            <FaAward className="text-blue-500 mr-2 text-2xl" />
                                            <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300">{item.certificationName}</h4>
                                        </div>
                                        <p className="italic text-gray-600 dark:text-gray-400">{item.issuingOrganization}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Issued: {item.issue_date}</p>
                                        {item.expiry_date && (
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Expires: {item.expiry_date}</p>
                                        )}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                                        <a href={item.certificateURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            View Certificate
                                        </a>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )
            }
        </>
    );
};

export default Certificate;
