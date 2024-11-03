import React from "react";

interface EducationItem {
    degree: string;
    year: string;
    institution: string;
}

interface EducationProps {
    educationList: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ educationList }) => {
    return (
        <section id="education" className="scroll-mt-[11vh]" data-aos="fade-up" data-aos-delay="100">
             <div className="flex flex-col items-center gap-2">
                <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Education</h2>
                <hr className="flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
            </div>
            {educationList.map((item, index) => (
                <div key={index} className="resume-item relative border-l-2 border-blue-500 pl-5 mb-6 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-white dark:before:bg-slate-900 before:border-2 before:border-blue-500">
                    <h4 className="text-lg font-bold uppercase text-gray-700 dark:text-gray-300">{item.degree}</h4>
                    <h5 className="text-base font-semibold bg-accent/10 inline-block p-1 rounded-md mb-2 dark:text-gray-400">{item.year}</h5>
                    <p className="italic text-gray-600 dark:text-gray-400 mb-4">{item.institution}</p>
                </div>
            ))}
        </section>
    );
};

export default Education;
