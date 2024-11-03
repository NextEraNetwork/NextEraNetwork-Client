'use client';
import React, { useState } from 'react';
import InputText from '../Inputs/InputText';
import SelectInput from '../Inputs/SelectInput';
import MyRichTextEditor from '../Inputs/MyTextEditor';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/reducer/store';
import { addExperience } from '@/services/operations/student/experienceAPI';

const ExperienceForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    experienceType: '',
    companyName: '',
    position: '',
    location: '',
    content: '',
    keyTakeaways: '',
    tips: ''
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Experience submitted:', formData);
    if(formData)
    {
        dispatch(addExperience(formData));
    }
  };

  return (
    <div className=" p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Share Your Experience</h2>
      
      <InputText
        label="Title"
        value={formData.title}
        onChange={(value) => handleChange('title', value)}
        placeholder="E.g., Interview at XYZ Corp"
      />
      
      <SelectInput
        label="Experience Type"
        value={formData.experienceType}
        onChange={(value) => handleChange('experienceType', value)}
        options={[
          { value: 'interview', label: 'Interview' },
          { value: 'project', label: 'Project' },
          { value: 'placement', label: 'Placement Preparation' },
          { value: 'gate', label: 'GATE Preparation' },
          { value: 'company', label: 'Company Experience' }
        ]}
      />

      <InputText
        label="Company/Institute Name"
        value={formData.companyName}
        onChange={(value) => handleChange('companyName', value)}
        placeholder="E.g., ABC Corp or XYZ University"
      />

      <InputText
        label="Position/Role"
        value={formData.position}
        onChange={(value) => handleChange('position', value)}
        placeholder="E.g., Software Engineer"
      />

      <InputText
        label="Location"
        value={formData.location}
        onChange={(value) => handleChange('location', value)}
        placeholder="E.g., New York"
      />

      <MyRichTextEditor
        label="Experience Content"
        value={formData.content}
        onChange={(value) => handleChange('content', value)}
      />

      <MyRichTextEditor
        label="Key Takeaways"
        value={formData.keyTakeaways}
        onChange={(value) => handleChange('keyTakeaways', value)}
      />

      <MyRichTextEditor
        label="Tips & Advice"
        value={formData.tips}
        onChange={(value) => handleChange('tips', value)}
      />

      <button
        onClick={handleSubmit}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit Experience
      </button>
    </div>
  );
};

export default ExperienceForm;
