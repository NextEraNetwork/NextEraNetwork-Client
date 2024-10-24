import React, { useState } from 'react';
import InputText from '../Inputs/InputText'; // Assuming InputText component is in the same directory
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/reducer/store';
import { createUniversity } from '@/services/operations/SuperAdmin/educationAPI';

interface UniversityFormData {
  universityName: string;
  address: string;
  image: File | null;
}

const CreateUniversityForm: React.FC = () => {
  const [formData, setFormData] = useState<UniversityFormData>({
    universityName: '',
    address: '',
    image: null,
  });


  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (field: keyof UniversityFormData, value: string | File) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      handleInputChange('image', file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    dispatch(createUniversity(formData))
    
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Create University Form</h2>
      <form onSubmit={handleSubmit}>
        {/* University Name Input */}
        <InputText
          label="University Name"
          value={formData.universityName}
          onChange={(value) => handleInputChange('universityName', value)}
          placeholder="Enter University Name"
          required={true}
        />

        {/* Address Input */}
        <InputText
          label="Address"
          value={formData.address}
          onChange={(value) => handleInputChange('address', value)}
          placeholder="Enter University Address"
          required={true}
        />

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            University Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1 block w-full p-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
            required={true}
          />
          {formData.image && (
            <p className="mt-2 text-sm text-gray-600">
              Selected file: {formData.image.name}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUniversityForm;
