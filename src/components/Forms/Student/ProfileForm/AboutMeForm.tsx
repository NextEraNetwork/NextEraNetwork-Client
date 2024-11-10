'use client';
import React, { useState } from 'react';
import InputTextArea from '../../Inputs/InputTextArea';
import { useSelector } from 'react-redux';
import { RootState } from '@/reducer/store'

interface FormData {
  about?: string;

}

const AboutMeForm: React.FC = () => {
  const user =useSelector((state:RootState)=> state.profile.profileData)
  const [formData, setFormData] = useState<FormData>({
    about: '',
  });

  const handleChange = (field: Partial<FormData>) => {
    setFormData((prevData) => ({ ...prevData, ...field }));
  };


  const handleSave = () => {
    console.log('Saved data:', formData);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4 mt-10">About Me</h2>

      <InputTextArea
        label="About"
        value={user.about || ''}
        // onChange={(value) => handleChange({ about: value })}
        // placeholder="Write about yourself (max length 1000)"
        // required={true}
        readOnly
      />

      {/* <InputTextArea
        label="About"
        value={formData.about || ''}
        onChange={(value) => handleChange({ about: value })}
        placeholder="Write about yourself (max length 1000)"
        required={true}
      /> */}



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

export default AboutMeForm;
