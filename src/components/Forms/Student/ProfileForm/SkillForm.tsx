'use client';
import React, { useState } from 'react';
import SkillManager from '../../MultiForm/AdditionalInformation/SkillManager';

interface FormData {
  skills: string[];
  
}

const SkillForm: React.FC = () => {
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
