'use client';
import React, { useState } from 'react';
import InputTextArea from '../../Inputs/InputTextArea';
import SkillManager from '../../MultiForm/AdditionalInformation/SkillManager';
import LinkInput from '../../MultiForm/AdditionalInformation/LinkInput';

interface FormData {
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: string;
  category: string;
  state: string;
  district: string;
  profession: string;
  position: string;
  about?: string;
  skills: string[];
  hobbies: string[];
  languages: string[];
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

const AdditionalInformationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    category: '',
    state: '',
    district: '',
    profession: '',
    position: '',
    about: '',
    skills: [],
    hobbies: [],
    languages: [],
    links: {
      github: '',
      linkedin: '',
      twitter: '',
      facebook: '',
    },
  });

  const handleChange = (field: Partial<FormData>) => {
    setFormData((prevData) => ({ ...prevData, ...field }));
  };

  const handleLinkChange = (platform: keyof FormData['links']) => (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      links: { ...prevData.links, [platform]: value },
    }));
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

  const handleAddHobbies = (newHobby: string) => {
    handleChange({
      hobbies: [...formData.hobbies, newHobby],
    });
  };

  const handleRemoveHobbies = (index: number) => {
    handleChange({
      hobbies: formData.hobbies.filter((_, i) => i !== index),
    });
  };

  const handleAddLanguage = (newLanguage: string) => {
    handleChange({
      languages: [...formData.languages, newLanguage],
    });
  };

  const handleRemoveLanguage = (index: number) => {
    handleChange({
      languages: formData.languages.filter((_, i) => i !== index),
    });
  };

  const handleSave = () => {
    console.log('Saved data:', formData);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">

      <h2 className="text-lg font-semibold mb-4 mt-10">Additional Information</h2>
      <InputTextArea
        label="About"
        value={formData.about || ''}
        onChange={(value) => handleChange({ about: value })}
        placeholder="Write about yourself (max length 1000)"
        required={true}
      />

      <SkillManager
        skills={formData.skills}
        onAddSkill={handleAddSkill}
        onRemoveSkill={handleRemoveSkill}
        label="Professional Skills"
        placeholder="Enter your skills here"
      />

      <SkillManager
        skills={formData.hobbies}
        onAddSkill={handleAddHobbies}
        onRemoveSkill={handleRemoveHobbies}
        label="Hobbies"
        placeholder="Enter your hobbies here"
      />

      <SkillManager
        skills={formData.languages}
        onAddSkill={handleAddLanguage}
        onRemoveSkill={handleRemoveLanguage}
        label="Professional Languages"
        placeholder="Enter languages you speak"
      />

      <div className="md:grid md:grid-cols-2 md:gap-x-10 mt-6">
        <LinkInput
          label="GitHub"
          value={formData.links.github || ''}
          onChange={handleLinkChange('github')}
        />
        <LinkInput
          label="LinkedIn"
          value={formData.links.linkedin || ''}
          onChange={handleLinkChange('linkedin')}
        />
        <LinkInput
          label="Twitter"
          value={formData.links.twitter || ''}
          onChange={handleLinkChange('twitter')}
        />
        <LinkInput
          label="Facebook"
          value={formData.links.facebook || ''}
          onChange={handleLinkChange('facebook')}
        />
      </div>

      <p className="text-sm text-gray-500 mt-4">
        * This section is optional. Feel free to provide additional details to enhance your profile.
      </p>

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

export default AdditionalInformationForm;
