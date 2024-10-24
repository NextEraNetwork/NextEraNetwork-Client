// EducationalDetails.tsx
import React, { SetStateAction, useEffect, useState } from 'react';
import SelectInput from '@/components/Forms/Inputs/SelectInput';
import InputText from '@/components/Forms/Inputs/InputText';
import { ProfileData } from '@/types/MultiForm';
import { AppDispatch } from '@/reducer/store';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/reducer/store';
import { fetchUniversities } from '@/services/operations/student/universityAPI';

interface EducationalDetailsProps {
    formData: ProfileData;
    handleChange: (newData: Partial<ProfileData>) => void;
}

const universities = [
    { value: 'university_a', label: 'University A' },
    { value: 'university_b', label: 'University B' },
];

const colleges = {
    university_a: [
        { value: 'college_a1', label: 'College A1' },
        { value: 'college_a2', label: 'College A2' },
    ],
    university_b: [
        { value: 'college_b1', label: 'College B1' },
        { value: 'college_b2', label: 'College B2' },
    ],
};

const departments = {
    college_a1: [
        { value: 'cse', label: 'CSE' },
        { value: 'ece', label: 'ECE' },
    ],
    college_a2: [
        { value: 'ee', label: 'EE' },
        { value: 'cse', label: 'CSE' },
    ],
};

const courses = {
    cse: [
        { value: 'btech', label: 'B.Tech' },
        { value: 'mtech', label: 'M.Tech' },
    ],
    ece: [
        { value: 'btech', label: 'B.Tech' },
        { value: 'mtech', label: 'M.Tech' },
    ],
};

const branches = {
    btech: [
        { value: 'btech', label: 'B.Tech' },
        { value: 'mtech', label: 'M.Tech' },
    ],
    mtech: [
        { value: 'btech', label: 'B.Tech' },
        { value: 'mtech', label: 'M.Tech' },
    ]
}

const EducationalDetails: React.FC<EducationalDetailsProps> = ({ formData, handleChange }) => {
    const dispatch = useDispatch<AppDispatch>();
    // const universities = useSelector((state: RootState) => state.university.universities);

    const [universities, setUniversities] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://2d10-2401-4900-5231-e0ad-5433-f12-8726-176c.ngrok-free.app/api/v1/university/get/university');
           
            if (!response.ok) {
              throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            console.log("response data",response);
    
            const data = await response.json();

            console.log("response data", data);
    
            if (!data.success || !Array.isArray(data.data)) {
              throw new Error('Unexpected data format');
            }
            
            // console.log("")
            setUniversities(data.data);
          } catch (error:any) {
            setError(error.message);
          }
        };
    
        fetchData();
      }, []);

      

    console.log("fetched universities", universities)

    // useEffect(() => {
    //     dispatch(fetchUniversities());
    // }, [dispatch]);

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Section 1: Educational Details</h2>
            <SelectInput
                label="University"
                value={formData.university}
                options={universities}
                onChange={(value) => handleChange({ university: value })}
                required={true}
            />
            <div className='md:grid md:grid-cols-2 md:gap-x-10'>
                <SelectInput
                    label="College"
                    value={formData.college}
                    options={colleges[formData.university as keyof typeof colleges] || []}
                    onChange={(value) => handleChange({ college: value })}
                    required={true}
                />
                <SelectInput
                    label="Department"
                    value={formData.department}
                    options={departments[formData.college as keyof typeof departments] || []}
                    onChange={(value) => handleChange({ department: value })}
                    required={true}
                />
                <SelectInput
                    label="Course"
                    value={formData.courses}
                    options={courses[formData.department as keyof typeof courses] || []}
                    onChange={(value) => handleChange({ courses: value })}
                    required={true}
                />

                <SelectInput
                    label="Branch"
                    value={formData.branch}
                    options={branches[formData.courses as keyof typeof branches] || []}
                    onChange={(value) => handleChange({ branch: value })}
                    required={true}
                />

                <InputText
                    label="Enrollment Number"
                    value={formData.enrollmentNumber}
                    onChange={(value) => handleChange({ enrollmentNumber: value })}
                    placeholder="Enter Enrollment Number"
                    required={true}
                />
                <InputText
                    label="PassOut Year"
                    value={formData.passOut_Year.toString()}                                        // Convert number to string for the input
                    onChange={(value) => handleChange({ passOut_Year: Number(value) })}             // Convert string to number
                    placeholder="Enter Pass Out Year"
                    required={true}
                />
            </div>

            <p className="text-sm text-red-500">
                * Please ensure all required fields are filled out correctly before proceeding to the next step.
            </p>
        </div>
    );
};

export default EducationalDetails;
