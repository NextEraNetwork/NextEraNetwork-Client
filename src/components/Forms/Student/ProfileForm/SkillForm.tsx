'use client';
import React, { useState } from 'react';
import SkillManager from '../../MultiForm/AdditionalInformation/SkillManager';
import { useSelector } from 'react-redux';
import { RootState } from '@/reducer/store';

interface FormData {
  skills: string[];

}

const SkillForm: React.FC = () => {
  const userSkillsList = useSelector((state: RootState) => state.profile.profileData.skills);
  const loading = useSelector((state: RootState) => state.profile.loading);


  const [formData, setFormData] = useState<FormData>({
    skills: [],

  });

  const handleChange = (field: Partial<FormData>) => {
    setFormData((prevData) => ({ ...prevData, ...field }));
  };


  const handleAddSkill = (newSkill: string) => {
    handleChange({
      skills: [...formData.skills, newSkill],
    });
  };

  const handleRemoveSkill = (index: number) => {
    handleChange({
      skills: formData.skills.filter((_, i) => i !== index),
    });
  };

  const handleSave = () => {
    console.log('Saved data:', formData);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4 mt-10">Skills</h2>

      <div className="flex flex-wrap gap-4 mb-8">
        {loading ?
          <p>Loading...</p>
          :
          (
            userSkillsList.map((skill, index) => (
              <div key={index} className="flex items-center">
                <span className="bg-blue-200 text-gray-800 py-1 px-4 md:py-2 md:text-base rounded-full text-sm">
                  {skill}
                </span>
              </div>
            ))
          )}
      </div>

      <SkillManager
        skills={formData.skills}
        onAddSkill={handleAddSkill}
        onRemoveSkill={handleRemoveSkill}
        label="Professional Skills"
        placeholder="Enter your skills here"
      />

      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={handleSave}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SkillForm;
