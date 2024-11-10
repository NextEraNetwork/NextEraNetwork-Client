'use client';
import React, { useEffect, useState } from 'react';
import InputText from '../../Inputs/InputText';
import InputTextArea from '../../Inputs/InputTextArea';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/reducer/store';
import { addUserProjects, deleteUserDetail, getUserProject } from '@/services/operations/student/profileAPI';
import SkillManager from '../../MultiForm/AdditionalInformation/SkillManager';
import moment from 'moment';
import { FaTrash } from 'react-icons/fa';

interface ProjectData {
    projectName: string;
    description: string;
    technology: string[];
    projectURL: string;
    start_date: string;
    end_date: string;
}

const ProjectForm: React.FC = () => {
    const user = useSelector((state: RootState) => state.profile.profileData)
    const userProject = useSelector((state: RootState) => state.profile.projectList)
    const loading = useSelector((state: RootState) => state.profile.loading);
    const dispatch = useDispatch<AppDispatch>();

    // State for the new project form
    const [newProject, setNewProject] = useState<ProjectData>({
        projectName: '',
        description: '',
        technology: [],
        projectURL: '',
        start_date: '',
        end_date: '',
    });

    useEffect(() => {
        dispatch(getUserProject(user.userName));
    }, [dispatch, user.userName]);


    console.log("project list", userProject)
    // Handle changes in the new project form
    const handleNewProjectChange = (field: keyof ProjectData, value: string | string[]) => {
        setNewProject((prev) => ({ ...prev, [field]: value }));
    };

    // Add a new project
    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addUserProjects(newProject, user.userName));
        setNewProject({
            projectName: '',
            description: '',
            technology: [''],
            projectURL: '',
            start_date: '',
            end_date: '',
        });
    };

    const handleChange = (newData: Partial<ProjectData>) => {
        setNewProject((prev) => ({ ...prev, ...newData }));
    };

    const handleAddSkill = (newSkill: string) => {
        handleChange({
            technology: [...newProject.technology, newSkill],
        });
    };

    const handleRemoveSkill = (index: number) => {
        handleChange({
            technology: newProject.technology.filter((_, i) => i !== index),
        });
    };

    const handleDelete = (projectID: string): void => {
        // console.log(`Delete project at index: ${projectID}`);
        dispatch(deleteUserDetail('projectList', projectID, user.userName));
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Projects</h2>

            {/* Display the dummy projects as non-editable */}
            {loading ?
                <p>
                    Loading...
                </p> :
                (userProject.map((project, index) => (
                    <div key={index} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                        <div className='flex justify-between items-center'>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">{project.projectName}</h3>
                            <button
                                className="text-gray-500 hover:text-red-600 focus:outline-none transform transition-transform duration-200 hover:scale-110"
                                title='Delete Project'
                                onClick={() => handleDelete(project._id)}
                            >
                                <FaTrash size={20} />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <InputText label="Project Name" type='text' value={project.projectName} readOnly />
                            <InputText label="Start Date" type="text" value={moment(project.start_date).format('DD-MM-YYYY')} readOnly />
                            <InputText label="End Date" type="text" value={project.end_date ? moment(project.end_date).format('DD-MM-YYYY') : 'Ongoing'} readOnly />

                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-medium text-gray-700">Technologies Used</label>
                                <div className="flex flex-wrap gap-4">
                                    {project.technology.map((tech, index) => (
                                        <div key={index} className="flex items-center">
                                            <span className="bg-gray-200 text-gray-800 py-1 px-4 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <InputText label="Project URL" type="url" value={project.projectURL} readOnly />
                            <InputTextArea label="Description" value={project.description} readOnly />
                        </div>
                    </div>

                )))
            }

            {/* Form for adding a new project */}
            <form onSubmit={handleSave} className="bg-white shadow-md rounded-lg p-6 mt-8">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Add New Project</h2>
                <div className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">

                    <InputText
                        label="Project Name"
                        value={newProject.projectName}
                        onChange={(value) => handleNewProjectChange('projectName', value)}
                        placeholder="Enter project name"
                        required={true}
                    />

                    <InputText
                        label="Start Date"
                        type="date"
                        value={newProject.start_date}
                        onChange={(value) => handleNewProjectChange('start_date', value)}
                        required={true}
                    />

                    <InputText
                        label="End Date"
                        type="date"
                        value={newProject.end_date}
                        onChange={(value) => handleNewProjectChange('end_date', value)}
                        placeholder="Leave blank if ongoing"
                        required={false}
                    />

                    <SkillManager
                        skills={newProject.technology}
                        onAddSkill={handleAddSkill}
                        onRemoveSkill={handleRemoveSkill}
                        label="Technology Used"
                        placeholder="Enter technology used"
                    />

                    <InputText
                        label="Project URL"
                        type="url"
                        value={newProject.projectURL}
                        onChange={(value) => handleNewProjectChange('projectURL', value)}
                        placeholder="Enter project URL"
                        required={true}
                    />

                    <InputTextArea
                        label="Description"
                        value={newProject.description}
                        onChange={(value) => handleNewProjectChange('description', value)}
                        placeholder="Describe the project"
                        required={false}
                    />
                </div>

                <div className="flex flex-row justify-between mt-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mt-4"
                    >
                        Save Project
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProjectForm;
