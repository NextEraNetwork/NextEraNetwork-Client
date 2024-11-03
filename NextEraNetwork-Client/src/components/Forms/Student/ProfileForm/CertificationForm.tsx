'use client';
import React, { useState } from 'react';
import InputText from '../../Inputs/InputText';
import InputTextArea from '../../Inputs/InputTextArea';

interface CertificationData {
    certificationName: string;
    issuingOrganization: string;
    certificateURL: string;
    issue_date: string;
    expiry_date: string;
    description: string;
}

const CertificationForm: React.FC = () => {
    const [certifications, setCertifications] = useState<CertificationData[]>([
        { certificationName: '', issuingOrganization: '', certificateURL: '', issue_date: '', expiry_date: '', description: '' },
    ]);

    const handleCertificationChange = (index: number, field: keyof CertificationData, value: string) => {
        const updatedCertifications = [...certifications];
        updatedCertifications[index][field] = value;
        setCertifications(updatedCertifications);
    };

    const addCertification = () => {
        setCertifications([
            ...certifications,
            { certificationName: '', issuingOrganization: '', certificateURL: '', issue_date: '', expiry_date: '', description: '' },
        ]);
    };

    const removeCertification = (index: number) => {
        setCertifications(certifications.filter((_, i) => i !== index));
    };

    const handleSave = () => {

    }

    return (
        <form className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Certifications</h2>

            {certifications.map((certification, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Certification - {index + 1}</h3>
                    <InputText
                        label="Certification Name"
                        value={certification.certificationName}
                        onChange={(value) => handleCertificationChange(index, 'certificationName', value)}
                        placeholder="Enter certification name"
                        required={true}
                    />

                    <InputText
                        label="Issuing Organization"
                        value={certification.issuingOrganization}
                        onChange={(value) => handleCertificationChange(index, 'issuingOrganization', value)}
                        placeholder="Enter issuing organization"
                        required={true}
                    />

                    <InputText
                        label="Certificate URL"
                        type="url"
                        value={certification.certificateURL}
                        onChange={(value) => handleCertificationChange(index, 'certificateURL', value)}
                        placeholder="Enter certificate URL"
                        required={true}
                    />

                    <InputText
                        label="Issue Date"
                        type="date"
                        value={certification.issue_date}
                        onChange={(value) => handleCertificationChange(index, 'issue_date', value)}
                        required={true}
                    />

                    <InputText
                        label="Expiry Date"
                        type="date"
                        value={certification.expiry_date}
                        onChange={(value) => handleCertificationChange(index, 'expiry_date', value)}
                        placeholder="Leave blank if no expiry"
                        required={false}
                    />

                    <InputTextArea
                        label="Description"
                        value={certification.description}
                        onChange={(value) => handleCertificationChange(index, 'description', value)}
                        placeholder="Describe the certification"
                        required={false}
                    />

                    <div className="flex justify-end">
                        {certifications.length > 1 && (
                            <button
                                type="button"
                                className="text-red-500 hover:underline mt-2"
                                onClick={() => removeCertification(index)}
                            >
                                Remove Certification
                            </button>
                        )}
                    </div>
                </div>
            ))}

            <div className='flex flex-row justify-between'>
                <button
                    type="button"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mt-4"
                    onClick={addCertification}
                >
                    Add Another Certification
                </button>

                <button
                    type="button"
                    className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default CertificationForm;
