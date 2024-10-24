import React from "react";
import images from "@/utils/images";
import Image from "next/image";

interface AboutProps {
    name: string;
    profile: string;
    email: string;
    phone: string;
    description: string;
}

const About: React.FC<AboutProps> = ({ name, profile, email, phone, description }) => {
    return (
        <section id="about">
            <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">About Me</h2>
                <hr className="flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
            </div>
            <main className="px-8 py-10 rounded-md shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)] dark:bg-gray-800 flex flex-col gap-6 lg:flex-row justify-between items-center">
                <div className="lg:w-1/3 flex flex-col justify-start items-center">
                    <div className="w-64 h-64 rounded-full mb-4">
                        <Image src={images.jinesh} className="w-full h-full rounded-full" alt="profileImage" />
                    </div>
                    <div className="flex flex-col gap-2 justify-start items-start text-slate-700 dark:text-slate-300 whitespace-nowrap">
                        <p className="text-left"><strong>Name: </strong><span>{name}</span></p>
                        <p className="text-left"><strong>Profile: </strong><span>{profile}</span></p>
                        <p className="text-left"><strong>Email: </strong><a href={`mailto:${email}`}>{email}</a></p>
                        <p className="text-left"><strong>Phone: </strong><a href={`tel:${phone}`}>{phone}</a></p>
                    </div>
                </div>

                <div className="lg:w-3/4 lg:text-xl text-sm text-justify text-slate-700 dark:text-slate-300">
                    <p>{description}</p>
                </div>
            </main>
        </section>
    );
};

export default About;
