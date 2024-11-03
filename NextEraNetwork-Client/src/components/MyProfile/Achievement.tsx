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
        <section id="achievement" className="scroll-mt-[11vh] py-10" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col items-center gap-4 mb-10">
                <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Achievements</h2>
                <hr className="w-16 h-1 bg-blue-500 rounded" />
            </div>
            <div className=" mx-auto">
                {achievements.map((item, index) => (
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
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{item.dateAchieved}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievement;
