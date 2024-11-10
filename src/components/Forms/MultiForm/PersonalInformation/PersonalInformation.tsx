// PersonalInformation.tsx
import React, {useState, useEffect} from 'react';
import SelectInput from '@/components/Forms/Inputs/SelectInput';
import InputText from '@/components/Forms/Inputs/InputText';
import { ProfileData } from '@/types/MultiForm';
import {State, City } from 'country-state-city';

interface PersonalInformationProps {
    formData: ProfileData;
    handleChange: (newData: Partial<ProfileData>) => void;
}

interface State{
    isoCode : string;
    name:string;
}

interface District{
    name: string;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ formData, handleChange }) => {

    const [districts, setDistricts] = useState<{ value: string; label: string; }[]>([]);
    const statesData = State.getStatesOfCountry("IN");
    const states = statesData.map((state :State)=>({
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

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Section 2: Personal Information</h2>
            <div className='md:grid md:grid-cols-3 md:gap-x-10'>
                <InputText
                    label="First Name"
                    value={formData.firstname}
                    onChange={(value) => handleChange({ firstname: value })}
                    placeholder="Enter First Name"
                    required={true}
                />
                <InputText
                    label="Middle Name"
                    value={formData.middlename || ''}
                    onChange={(value) => handleChange({ middlename: value })}
                    placeholder="Enter Middle Name"
                />
                <InputText
                    label="Last Name"
                    value={formData.lastname}
                    onChange={(value) => handleChange({ lastname: value })}
                    placeholder="Enter Last Name"
                    required={true}
                />
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-x-10'>
                <SelectInput
                    label="Gender"
                    value={formData.gender}
                    options={[
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' },
                        { value: 'other', label: 'Other' },
                    ]}
                    onChange={(value) => handleChange({ gender: value })}
                    required={true}
                />
                <SelectInput
                    label="Category"
                    value={formData.category}
                    options={[
                        { value: 'OBC', label: 'OBC' },
                        { value: 'GEN', label: 'General' },
                        { value: 'SC', label: 'SC' },
                        { value: 'ST', label: 'ST' }
                    ]}
                    onChange={(value) => handleChange({ gender: value })}
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
                    label="City"
                    value={formData.district}
                    options={districts}
                    onChange={(value) => handleChange({ district: value })}
                    required={true}
                />

                <InputText
                    label="Profession"
                    value={formData.profession}
                    onChange={(value) => handleChange({ profession: value })}
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

            <p className="text-sm text-red-500">
                * Double-check your information to ensure accuracy.
            </p>

        </div>
    );
};

export default PersonalInformation;
