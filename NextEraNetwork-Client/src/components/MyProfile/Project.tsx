// components/Project.tsx
import React from "react";

interface ProjectItem {
    projectName: string;
    description: string;
    technology: string[]; // Array of technologies
    projectLink: string;
    startDate: string;
    endDate: string;
}

interface ProjectProps {
    projects: ProjectItem[];
}

const Project: React.FC<ProjectProps> = ({ projects }) => {
    return (
        <section id="project" className="scroll-mt-[11vh] py-10 bg-gray-100 dark:bg-gray-900" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col justify-center items-center gap-4 mb-8">
                <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Projects</h2>
                <hr className="w-16 h-1 bg-blue-500 rounded" />
            </div>
            <div className="flex flex-col space-y-6 px-4">
                {projects.map((item, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-xl">
                        <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300">{item.projectName}</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {item.technology.map((tech, idx) => (
                                <span key={idx} className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            <strong>Duration:</strong> {item.startDate} - {item.endDate}
                        </p>
                        <a 
                            href={item.projectLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-500 hover:underline font-semibold transition duration-300">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;
