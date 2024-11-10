'use client';
import React, { useEffect, useState } from 'react';
import InputText from '../../Inputs/InputText';
import InputTextArea from '../../Inputs/InputTextArea';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/reducer/store'
import { FaTrash } from 'react-icons/fa';
import { addUserCertificates, deleteUserDetail, getUserCertificate } from '@/services/operations/student/profileAPI';


interface CertificationData {
    certificationName: string;
    issuingOrganization: string;
    certificateURL: string;
    issue_date: string;
    expiry_date: string;
    description: string;
}

const CertificationForm: React.FC = () => {
    const user = useSelector((state: RootState) => state.profile.profileData)
    const userCertification = useSelector((state: RootState) => state.profile.certicationList)
    const loading = useSelector((state: RootState) => state.profile.loading);
    const dispatch = useDispatch<AppDispatch>();

    const [certification, setCertification] = useState<CertificationData>({
        certificationName: '',
        issuingOrganization: '',
        certificateURL: '',
        issue_date: '',
        expiry_date: '',
        description: ''
    });

    useEffect(() => {
        dispatch(getUserCertificate(user.userName));
    }, [dispatch, user.userName]);

    const handleInputChange = (field: keyof CertificationData, value: string | boolean | null) => {
        setCertification((prev) => ({ ...prev, [field]: value }));
    };

    console.log("certification");
    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("certification 2");
        dispatch(addUserCertificates(certification,user.userName));
        setCertification({
            certificationName: '',
            issuingOrganization: '',
            certificateURL: '',
            issue_date: '',
            expiry_date: '',
            description: ''
        });

    };

    const handleDelete = (certificateID: string): void => {
        console.log(`Delete certification at index: ${certificateID}`);
        dispatch(deleteUserDetail('certificationList',certificateID, user.userName ))
    };
    

    return (
        <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Certifications</h2>

            {userCertification.map((certification, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                    <div className='flex justify-between items-center'>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                            Certification - {index + 1}
                        </h3>
                        <button
                            className="text-gray-500 hover:text-red-600 focus:outline-none transform transition-transform duration-200 hover:scale-110"
                            title='Delete Certificate'
                            onClick={() => handleDelete(certification._id)} 
                        >
                            <FaTrash size={20} />
                        </button>
                    </div>
                    <InputText
                        label="Certification Name"
                        value={certification.certificationName}
                        readOnly
                    />

                    <InputText
                        label="Issuing Organization"
                        value={certification.issuingOrganization}
                        readOnly
                    />

                    <InputText
                        label="Certificate URL"
                        type="url"
                        value={certification.certificateURL}
                        readOnly
                    />

                    <InputText
                        label="Issue Date"
                        type="text"
                        value={certification.issue_date}
                        readOnly
                    />

                    <InputText
                        label="Expiry Date"
                        type="date"
                        value={certification.expiry_date}
                        readOnly
                    />

                    <InputTextArea
                        label="Description"
                        value={certification.description}
                        readOnly
                    />
                </div>
            ))}


            <form onSubmit={handleSave} className="bg-white shadow-md rounded-lg p-6 mt-8">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Add Certification</h2>

                <div className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">

                    <InputText
                        label="Certification Name"
                        value={certification.certificationName}
                        onChange={(value) => handleInputChange('certificationName', value)}
                        placeholder="Enter certification name"
                        required={true}
                    />

                    <InputText
                        label="Issuing Organization"
                        value={certification.issuingOrganization}
                        onChange={(value) => handleInputChange('issuingOrganization', value)}
                        placeholder="Enter issuing organization"
                        required={true}
                    />

                    <InputText
                        label="Certificate URL"
                        type="url"
                        value={certification.certificateURL}
                        onChange={(value) => handleInputChange('certificateURL', value)}
                        placeholder="Enter certificate URL"
                        required={true}
                    />

                    <InputText
                        label="Issue Date"
                        type="date"
                        value={certification.issue_date}
                        onChange={(value) => handleInputChange('issue_date', value)}
                        required={true}
                    />

                    <InputText
                        label="Expiry Date"
                        type="date"
                        value={certification.expiry_date}
                        onChange={(value) => handleInputChange('expiry_date', value)}
                        placeholder="Leave blank if no expiry"
                        required={false}
                    />

                    <InputTextArea
                        label="Description"
                        value={certification.description}
                        onChange={(value) => handleInputChange('description', value)}
                        placeholder="Describe the certification"
                        required={false}
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

export default CertificationForm;
