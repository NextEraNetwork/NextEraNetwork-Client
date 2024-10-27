import React from "react";
import About from "@/components/MyProfile/About";
import Education from "@/components/MyProfile/Education";
import Experience from "@/components/MyProfile/Experience";
import { projectData, userData } from "@/data/myproileData";
import { educationData } from "@/data/myproileData";
import { experienceData } from "@/data/myproileData";
import { achievementData } from "@/data/myproileData";
import Achievement from "@/components/MyProfile/Achievement";
import Certificate from "@/components/MyProfile/Certificate";
import { certificateData } from "@/data/myproileData";
import Project from "@/components/MyProfile/Project";
import ProfileHeader from "@/components/MyProfile/ProfileHeader";

export default function MyProfile({
    params
}: {
    params: { username: string }
}) {


    return (
        <>
            <ProfileHeader />
            <div
                id="about"
                className="scroll-mt-[11vh] flex flex-col gap-20 py-12 bg-gray-100 dark:bg-gray-900 px-3 lg:p-20"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <About {...userData} />
                <Education educationList={educationData} />
                <Experience experienceList={experienceData} />
                <Project projects={projectData} />
                <Achievement achievements={achievementData} />
                <Certificate certificates={certificateData} />
            </div>
        </>

    )
}