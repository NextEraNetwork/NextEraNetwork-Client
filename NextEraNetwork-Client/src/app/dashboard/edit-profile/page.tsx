'use client';
import React, { useState } from 'react';
import EducationForm from '@/components/Forms/Student/ProfileForm/EducationForm';
import ExperienceForm from '@/components/Forms/Student/ProfileForm/ExperienceForm';
import AchievementForm from '@/components/Forms/Student/ProfileForm/AchievementForm';
import CertificationForm from '@/components/Forms/Student/ProfileForm/CertificationForm';
import ProjectForm from '@/components/Forms/Student/ProfileForm/ProjectForm';
import PersonalInformationForm from '@/components/Forms/Student/ProfileForm/PersonalInformationForm';
import SkillForm from '@/components/Forms/Student/ProfileForm/SkillForm';
import LinkForm from '@/components/Forms/Student/ProfileForm/LinkForm';
import HobbiesForm from '@/components/Forms/Student/ProfileForm/HobbiesForm';
import AboutMeForm from '@/components/Forms/Student/ProfileForm/AboutMeForm';

const TABS = [
  { id: 'personal', label: 'Personal Information', component: <PersonalInformationForm /> },
  { id: 'about', label: 'About Me', component: <AboutMeForm /> },
  { id: 'education', label: 'Education', component: <EducationForm /> },
  { id: 'experience', label: 'Experience', component: <ExperienceForm /> },
  { id: 'projects', label: 'Projects', component: <ProjectForm /> },
  { id: 'certifications', label: 'Certifications', component: <CertificationForm /> },
  { id: 'achievements', label: 'Achievements', component: <AchievementForm /> },
  { id: 'skill', label: 'Skills', component: <SkillForm /> },
  { id: 'link', label: 'Links', component: <LinkForm /> },
  { id: 'hobby', label: 'Hobbies', component: <HobbiesForm /> },
];

const UpdateProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const renderForm = () => TABS.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <div className="w-full  bg-white rounded-lg shadow-lg p-6 lg:p-12">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Update Profile</h1>

        {/* Navbar */}
        <nav className="flex gap-2 overflow-x-auto mb-6 border-b-2 pb-2">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`flex-shrink-0 px-4 py-2 rounded-lg transition duration-300 whitespace-nowrap 
                ${activeTab === tab.id ? 'bg-[#2A9DAF] text-white shadow' : 'bg-gray-200 text-gray-700 hover:bg-cyan-100'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Form Section */}
        <div className="mt-4">
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
