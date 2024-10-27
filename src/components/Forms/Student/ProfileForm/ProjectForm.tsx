'use client';
import React, { useState } from 'react';
import InputText from '../../Inputs/InputText';
import InputTextArea from '../../Inputs/InputTextArea';

interface ProjectData {
    projectName: string;
    description: string;
    technology: string[];
    projectURL: string;
    start_date: string;
    end_date: string;
}

const ProjectForm: React.FC = () => {
    const [projects, setProjects] = useState<ProjectData[]>([
        { projectName: '', description: '', technology: [''], projectURL: '', start_date: '', end_date: '' },
    ]);

    const handleProjectChange = (index: number, field: keyof ProjectData, value: string | string[]) => {
        const updatedProjects = [...projects];
        updatedProjects[index][field] = value as never;
        setProjects(updatedProjects);
    };

    const addProject = () => {
        setProjects([
            ...projects,
            { projectName: '', description: '', technology: [''], projectURL: '', start_date: '', end_date: '' },
        ]);
    };

    const removeProject = (index: number) => {
        setProjects(projects.filter((_, i) => i !== index));
    };

    const handleTechnologyChange = (projectIndex: number, techIndex: number, value: string) => {
        const updatedProjects = [...projects];
        updatedProjects[projectIndex].technology[techIndex] = value;
        setProjects(updatedProjects);
    };

    const addTechnology = (index: number) => {
        const updatedProjects = [...projects];
        updatedProjects[index].technology.push('');
        setProjects(updatedProjects);
    };

    const handleSave = () => {

    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Projects</h2>

            {projects.map((project, projectIndex) => (
                <div key={projectIndex} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Project - {projectIndex + 1}</h3>

                    <InputText
                        label="Project Name"
                        value={project.projectName}
                        onChange={(value) => handleProjectChange(projectIndex, 'projectName', value)}
                        placeholder="Enter project name"
                        required={true}
                    />

                    <InputText
                        label="Start Date"
                        type="date"
                        value={project.start_date}
                        onChange={(value) => handleProjectChange(projectIndex, 'start_date', value)}
                        required={true}
                    />

                    <InputText
                        label="End Date"
                        type="date"
                        value={project.end_date}
                        onChange={(value) => handleProjectChange(projectIndex, 'end_date', value)}
                        placeholder="Leave blank if ongoing"
                        required={false}
                    />

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Technologies</label>
                        {project.technology.map((tech, techIndex) => (
                            <div key={techIndex} className="flex items-center mb-2">
                                <InputText
                                    label=""
                                    value={tech}
                                    onChange={(value) => handleTechnologyChange(projectIndex, techIndex, value)}
                                    placeholder="Enter technology"
                                    required={true}
                                />
                                {project.technology.length > 1 && (
                                    <button
                                        type="button"
                                        className="text-red-500 hover:underline ml-2"
                                        onClick={() => {
                                            const updatedTech = project.technology.filter((_, i) => i !== techIndex);
                                            handleProjectChange(projectIndex, 'technology', updatedTech);
                                        }}
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            className="text-blue-500 hover:underline mt-2"
                            onClick={() => addTechnology(projectIndex)}
                        >
                            Add Technology
                        </button>
                    </div>

                    <InputText
                        label="Project URL"
                        type="url"
                        value={project.projectURL}
                        onChange={(value) => handleProjectChange(projectIndex, 'projectURL', value)}
                        placeholder="Enter project URL"
                        required={true}
                    />

                    <InputTextArea
                        label="Description"
                        value={project.description}
                        onChange={(value) => handleProjectChange(projectIndex, 'description', value)}
                        placeholder="Describe the project"
                        required={false}
                    />

                    <div className="flex justify-end">
                        {projects.length > 1 && (
                            <button
                                type="button"
                                className="text-red-500 hover:underline mt-2"
                                onClick={() => removeProject(projectIndex)}
                            >
                                Remove Project
                            </button>
                        )}
                    </div>
                </div>
            ))}

            <div className='flex flex-row justify-between'>
                <button
                    type="button"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mt-4"
                    onClick={addProject}
                >
                    Add Another Project
                </button>

                <button
                    type="button"
                    className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default ProjectForm;
