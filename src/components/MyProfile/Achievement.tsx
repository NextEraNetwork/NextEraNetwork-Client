// components/Achievement.tsx
import React from "react";

interface AchievementItem {
    title: string;
    description: string;
    dateAchieved: string;
    awardingOrganization: string;
}

interface AchievementProps {
    achievements: AchievementItem[];
}

const Achievement: React.FC<AchievementProps> = ({ achievements }) => {
    return (
        <section id="acheivement" className="" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Achievements</h2>
                <hr className="flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
            </div>
            {achievements.map((item, index) => (
                <div key={index} className="resume-item mb-6 border-b pb-4">
                    <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300">{item.title}</h4>
                    <p className="italic text-gray-600 dark:text-gray-400 mb-1">{item.awardingOrganization}</p>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.dateAchieved}</p>
                </div>
            ))}
        </section>
    );
};

export default Achievement;
