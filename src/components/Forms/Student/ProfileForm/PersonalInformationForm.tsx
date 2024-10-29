'use client';
import React, { useEffect, useState } from 'react';
import InputText from '../../Inputs/InputText';
import SelectInput from '../../Inputs/SelectInput';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '@/reducer/store';
import { State, City } from 'country-state-city';

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
}

interface State{
    isoCode:string;
    name: string;
}

interface District{
    name:string;
}

const PersonalInformationForm: React.FC = () => {
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
    });
    const [districts, setDistricts] = useState<{ value: string; label: string; }[]>([]);

    const statesData = State.getStatesOfCountry("IN");

    const states = statesData.map((state : State)=>({
        value:state.isoCode,
        label:state.name
    }));

    useEffect(() => {
        if (formData.state) {
            const districtData = City.getCitiesOfState("IN", formData.state);
            const districtOptions = districtData.map((district: District) => ({
                value: district.name,
                label: district.name
            }));
            setDistricts(districtOptions);
        } else {
            setDistricts([]); 
        }
    }, [formData.state]);

    // const dispatch = useDispatch<AppDispatch>();

    // useEffect(() => {
    //     dispatch();
    // }, []);

    const handleChange = (field: Partial<FormData>) => {
        setFormData((prevData) => ({ ...prevData, ...field }));
    };

    const handleSave = () => {
        // Add save functionality, like an API call
        console.log('Saved data:', formData);
    };

    console.log(State.getStatesOfCountry("IN"))


    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">Personal Information</h2>

            <div className="md:grid md:grid-cols-3 md:gap-x-10">
                <InputText
                    label="First Name"
                    value={formData.firstName}
                    onChange={(value) => handleChange({ firstName: value })}
                    placeholder="Enter First Name"
                    required={true}
                />
                <InputText
                    label="Middle Name"
                    value={formData.middleName || ''}
                    onChange={(value) => handleChange({ middleName: value })}
                    placeholder="Enter Middle Name"
                />
                <InputText
                    label="Last Name"
                    value={formData.lastName}
                    onChange={(value) => handleChange({ lastName: value })}
                    placeholder="Enter Last Name"
                    required={true}
                />
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-x-10 mt-6">
                <SelectInput
                    label="Gender"
                    value={formData.gender}
                    options={[
                        { value: 'Male', label: 'Male' },
                        { value: 'Female', label: 'Female' },
                    ]}
                    onChange={(value) => handleChange({ gender: value })}
                    required={true}
                />
                <SelectInput
                    label="Category"
                    value={formData.category}
                    options={[
                        { value: 'obc', label: 'OBC' },
                        { value: 'general', label: 'General' },
                        { value: 'sc', label: 'SC' },
                        { value: 'st', label: 'ST' },
                    ]}
                    onChange={(value) => handleChange({ category: value })}
                    required={true}
                />
                <SelectInput
                    label="State"
                    value={formData.state}
                    options={states}
                    onChange={(value) => handleChange({ state: value })}
                    required={true}
                />
                <SelectInput
                    label="District"
                    value={formData.district}
                    options={districts}
                    onChange={(value) => handleChange({ district: value })}
                    required={true}
                />

                <InputText
                    label="Profession"
                    value={formData.profession}
                    onChange={(value) => handleChange({ profession: value })}
                    required={true}
                    placeholder="Enter Profession"
                />
                <InputText
                    label="Position"
                    value={formData.position}
                    onChange={(value) => handleChange({ position: value })}
                    placeholder="Enter Position"
                    required={true}
                />
            </div>

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

export default PersonalInformationForm;
