'use client';
import React, { useEffect, useState } from 'react';
import InputText from '../../Inputs/InputText';
import InputTextArea from '../../Inputs/InputTextArea';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/reducer/store';
import { addUserEducation, deleteUserDetail, getUserEducation } from '@/services/operations/student/profileAPI';
import moment from 'moment';
import { FaTrash } from 'react-icons/fa';

interface EducationFormData {
  insitutionName: string;
  degree: string;
  field_of_study: string;
  start_date: string;
  end_date: string;
  grade: number | null;
  description: string | null;
}

const EducationForm = () => {
  const user = useSelector((state: RootState) => state.profile.profileData)

  const userEducation = useSelector((state: RootState) => state.profile.educationList);
  const loading = useSelector((state: RootState) => state.profile.loading);
  const dispatch = useDispatch<AppDispatch>();

  const [education, setEducation] = useState<EducationFormData>({
    insitutionName: '',
    degree: '',
    field_of_study: '',
    start_date: '',
    end_date: '',
    grade: null,
    description: '',
  });

  console.log("userEducation", userEducation)
  useEffect(() => {
    dispatch(getUserEducation(user.userName));
  }, [dispatch,user.userName]);



  const handleInputChange = (field: keyof EducationFormData, value: string | boolean | null) => {
    setEducation((prev) => ({ ...prev, [field]: value }));
  };


  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addUserEducation(education, user.userName));
    setEducation({
      insitutionName: '',
      degree: '',
      field_of_study: '',
      start_date: '',
      end_date: '',
      grade: 0,
      description: '',
    });

  };

  const handleDelete = (educationID: string): void => {
    console.log(`Delete certification at index: ${educationID}`);
    dispatch(deleteUserDetail('educationList',educationID, user.userName ))

  };

  return (
    <div >
      <h2 className="text-xl font-bold text-gray-800 mb-4">Education Details</h2>

      {userEducation.map((education, index) => (
        <div key={index} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">

          <div className='flex justify-between items-center'>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Education - {index + 1}</h3>
            <button
              className="text-gray-500 hover:text-red-600 focus:outline-none transform transition-transform duration-200 hover:scale-110"
              title='Delete Education'
              onClick={() => handleDelete(education._id)}
            >
              <FaTrash size={20} />
            </button>
          </div>

          <div className='md:grid md:grid-cols-2 md:gap-x-10'>
            <InputText
              label="Institution Name"
              value={education.insitutionName}
              readOnly
            />
            <InputText
              label="Degree"
              value={education.degree}
              readOnly
            />
            <InputText
              label="Field of Study"
              value={education.field_of_study}
              readOnly
            />
            <InputText
              label="Start Date"
              type="text"
              value={moment(education.start_date).format('DD-MM-YYYY')}
              readOnly
            />
            <InputText
              label="End Date"
              type="text"
              value={education.end_date ? moment(education.end_date).format('DD-MM-YYYY') : 'Present'}
              readOnly
            />
            <InputText
              label="Grade"
              type="number"
              value={education.grade ? education.grade.toString() : ''}
              readOnly
            />
          </div>
          <InputTextArea
            label="Description"
            value={education.description || ''}
            readOnly
          />

        </div>
      ))}

      <form onSubmit={handleSave} className="bg-white shadow-md rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Add Education</h3>

        <div className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">

          <div className='md:grid md:grid-cols-2 md:gap-x-10'>
            {/* Institution Name Input */}
            <InputText
              label="Institution Name"
              value={education.insitutionName}
              onChange={(value) => handleInputChange('insitutionName', value)}
              placeholder="Enter Institution Name"
              required={true}
            />

            {/* Degree Input */}
            <InputText
              label="Degree"
              value={education.degree}
              onChange={(value) => handleInputChange('degree', value)}
              placeholder="Enter Degree"
              required={true}
            />

            {/* Field of Study Input */}
            <InputText
              label="Field of Study"
              value={education.field_of_study}
              onChange={(value) => handleInputChange('field_of_study', value)}
              placeholder="Enter Field of Study"
              required={true}
            />

            {/* Start Date Input */}
            <InputText
              label="Start Date"
              type="date"
              value={education.start_date}
              onChange={(value) => handleInputChange('start_date', value)}
              required={true}
            />

            {/* End Date Input */}
            <div className=''>
              <InputText
                label="End Date"
                type="date"
                value={education.end_date}
                onChange={(value) => handleInputChange('end_date', value)}
              />
              {/* <label className="mt-1 mb-6 block">
              <input
                type="checkbox"
                checked={education.continuing}
                onChange={(e) => handleInputChange(index, 'continuing', e.target.checked)}
              />{' '}
              Currently Continuing
            </label> */}
            </div>

            {/* Grade Input */}
            <InputText
              label="Grade"
              type="number"
              value={education.grade ? education.grade.toString() : ''}
              onChange={(value) => handleInputChange('grade', value)}
              placeholder="Enter Grade"
            />
          </div>

          {/* Description Textarea */}
          <InputTextArea
            label="Description"
            value={education.description || ''}
            onChange={(value) => handleInputChange('description', value)}
            placeholder="Enter Description"
          />
        </div>


        <div className="flex flex-row justify-between mt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition duration-200"
          >
            Save
          </button>
        </div>

      </form>
    </div>
  );
};

export default EducationForm;
