'use client';
import React, { useState } from 'react';
import InputText from '../../Inputs/InputText';
import InputTextArea from '../../Inputs/InputTextArea';

interface EducationFormData {
  institutionName: string;
  degree: string;
  field_of_study: string;
  start_date: string;
  end_date: string;
  continuing: boolean; // Whether the course is ongoing
  grade: number | null;
  description: string | null;
}

const EducationForm = () => {
  const [educationList, setEducationList] = useState<EducationFormData[]>([
    {
      institutionName: '',
      degree: '',
      field_of_study: '',
      start_date: '',
      end_date: '',
      continuing: false,
      grade: null,
      description: '',
    },
  ]);

  // Handle input change for a specific education entry
  const handleInputChange = (index: number, field: keyof EducationFormData, value: any) => {
    const newList = [...educationList];
    newList[index] = {
      ...newList[index],
      [field]: value,
    };
    setEducationList(newList);
  };

  // Add a new education entry
  const handleAddEntry = () => {
    setEducationList([
      ...educationList,
      {
        institutionName: '',
        degree: '',
        field_of_study: '',
        start_date: '',
        end_date: '',
        continuing: false,
        grade: null,
        description: '',
      },
    ]);
  };

  // Remove an education entry
  const handleRemoveEntry = (index: number) => {
    const newList = educationList.filter((_, i) => i !== index);
    setEducationList(newList);
  };

  // Save data to backend
  const handleSave = async () => {
    try {
      const response = await fetch('/api/save-education', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(educationList),
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
      }

      // Optionally, handle successful save (e.g., show a message)
      console.log('Education data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
      // Handle error (e.g., show a message to the user)
    }
  };

  return (
    <form>
      <h2 className="text-xl font-bold mb-4">Education Details</h2>
      {educationList.map((education, index) => (
        <div key={index} className="mb-6 border border-gray-200 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Education Entry {index + 1}</h3>

          <div className='md:grid md:grid-cols-2 md:gap-x-10'>
            {/* Institution Name Input */}
            <InputText
              label="Institution Name"
              value={education.institutionName}
              onChange={(value) => handleInputChange(index, 'institutionName', value)}
              placeholder="Enter Institution Name"
              required={true}
            />

            {/* Degree Input */}
            <InputText
              label="Degree"
              value={education.degree}
              onChange={(value) => handleInputChange(index, 'degree', value)}
              placeholder="Enter Degree"
              required={true}
            />

            {/* Field of Study Input */}
            <InputText
              label="Field of Study"
              value={education.field_of_study}
              onChange={(value) => handleInputChange(index, 'field_of_study', value)}
              placeholder="Enter Field of Study"
              required={true}
            />

            {/* Start Date Input */}
            <InputText
              label="Start Date"
              type="date"
              value={education.start_date}
              onChange={(value) => handleInputChange(index, 'start_date', value)}
              required={true}
            />

            {/* End Date Input */}
            <div className=''>
              <InputText
                label="End Date"
                type="date"
                value={education.end_date}
                onChange={(value) => handleInputChange(index, 'end_date', value)}
                required={!education.continuing}
              />
              <label className="mt-1 mb-6 block">
                <input
                  type="checkbox"
                  checked={education.continuing}
                  onChange={(e) => handleInputChange(index, 'continuing', e.target.checked)}
                />{' '}
                Currently Continuing
              </label>
            </div>

            {/* Grade Input */}
            <InputText
              label="Grade"
              type="number"
              value={education.grade ? education.grade.toString() : ''}
              onChange={(value) => handleInputChange(index, 'grade', value ? parseInt(value) : null)}
              placeholder="Enter Grade"
            />
          </div>

          {/* Description Textarea */}
          <InputTextArea
            label="Description"
            value={education.description || ''}
            onChange={(value) => handleInputChange(index, 'description', value)}
            placeholder="Enter Description"
          />

          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => handleRemoveEntry(index)}
          >
            Remove Entry
          </button>
        </div>
      ))}

      <div className='flex flex-row gap-5'>
      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={handleAddEntry}
      >
        Add Another Education Entry
      </button>

      {/* Save Button */}
      <button
        type="button"
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        onClick={handleSave}
      >
        Save Education Data
      </button>
      </div>
    </form>
  );
};

export default EducationForm;
