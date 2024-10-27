// EducationalDetails.tsx
import React, { SetStateAction, useEffect, useState } from 'react';
import SelectInput from '@/components/Forms/Inputs/SelectInput';
import InputText from '@/components/Forms/Inputs/InputText';
import { ProfileData } from '@/types/MultiForm';
import { AppDispatch } from '@/reducer/store';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/reducer/store';
import { fetchBranches, fetchColleges, fetchCourses, fetchDepartment, fetchUniversities } from '@/services/operations/student/optionAPI';

interface EducationalDetailsProps {
    formData: ProfileData;
    handleChange: (newData: Partial<ProfileData>) => void;
}

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
    const universities = useSelector((state: RootState) => state.options.universities);
    const colleges = useSelector((state:RootState)=>state.options.colleges) ;
    const departments = useSelector((state:RootState)=>state.options.department);
    const courses = useSelector((state:RootState)=>state.options.courses);
    const branches = useSelector((state:RootState)=>state.options.branches);
    // console.log("fetched universities", departments)

    // Fetch universities
    useEffect(() => {
        dispatch(fetchUniversities());
    }, [dispatch]);

    // fetch colleges
    useEffect(() => {
        if (formData.university) {
            dispatch(fetchColleges(formData.university));
        }
    }, [formData.university, dispatch]);

    // Fetch departments when the college changes
    useEffect(() => {
        if (formData.college && formData.university) {
            dispatch(fetchDepartment(formData.university, formData.college));
        }
    }, [formData.college,formData.university, dispatch]);

    // Fetch colleges on basis of university, college, dept
    useEffect(() => {
        if (formData.college && formData.university && formData.department) {
            dispatch(fetchCourses(formData.university, formData.college, formData.department));
        }
    }, [formData.college,formData.university,formData.department, dispatch]);

    // Fetch colleges on basis of university, college, dept
    useEffect(() => {
        if (formData.college && formData.university && formData.department) {
            dispatch(fetchBranches(formData.university, formData.college, formData.department, formData.courses));
        }
    }, [formData.college,formData.university,formData.department, formData.courses,  dispatch]);



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
                    options={colleges}
                    onChange={(value) => handleChange({ college: value })}
                    required={true}
                />
                <SelectInput
                    label="Department"
                    value={formData.department}
                    options={departments}
                    onChange={(value) => handleChange({ department: value })}
                    required={true}
                />
                <SelectInput
                    label="Course"
                    value={formData.courses}
                    options={courses}
                    onChange={(value) => handleChange({ courses: value })}
                    required={true}
                />

                <SelectInput
                    label="Branch"
                    value={formData.branch}
                    options={branches}
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
