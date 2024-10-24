import React from "react";

interface ExperienceItem {
    jobTitle: string;
    period: string;
    company: string;
    responsibilities: string[];
}

interface ExperienceProps {
    experienceList: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experienceList }) => {
    return (
        <section id="experience" className="" data-aos="fade-up" data-aos-delay="200">
             <div className="flex flex-col items-center gap-2">
                <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Professional Experience</h2>
                <hr className="flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
            </div>
            {experienceList.map((item, index) => (
                <div 
                    key={index} 
                    className="resume-item relative border-l-2 border-blue-500 pl-5 mb-6 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-white dark:before:bg-slate-900 before:border-2 before:border-blue-500"
                >
                    <h4 className="text-lg font-bold uppercase text-gray-700 dark:text-gray-300">{item.jobTitle}</h4>
                    <h5 className="text-base font-semibold bg-accent/10 inline-block p-1 rounded-md mb-2 dark:text-gray-400">{item.period}</h5>
                    <p className="italic text-gray-600 dark:text-gray-400 mb-4">{item.company}</p>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                        {item.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Experience;
