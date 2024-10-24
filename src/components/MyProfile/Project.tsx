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
        <section id="project" className="" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Projects</h2>
                <hr className="flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
            </div>
            {projects.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4 transition duration-300 hover:shadow-lg">
                    <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300">{item.projectName}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {item.technology.map((tech, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{tech}</span>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        <strong>Duration:</strong> {item.startDate} - {item.endDate}
                    </p>
                    <p>
                        <a href={item.projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">
                            View Project
                        </a>
                    </p>
                </div>
            ))}
        </section>
    );
};

export default Project;
