// components/Certificate.tsx
import React from "react";

interface CertificateItem {
    certificationName: string;
    issuingOrganization: string;
    certificationLink: string; // URL
    issueDate: string;
    expiryDate?: string; // Optional
}

interface CertificateProps {
    certificates: CertificateItem[];
}

const Certificate: React.FC<CertificateProps> = ({ certificates }) => {
    return (
        <section id="certificate" className="" data-aos="fade-up" data-aos-delay="200">
             <div className="flex flex-col items-center gap-2">
                <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Certificates</h2>
                <hr className="flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
            </div>
            {certificates.map((item, index) => (
                <div key={index} className="resume-item mb-4 border-b pb-2">
                    <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300">{item.certificationName}</h4>
                    <p className="italic text-gray-600 dark:text-gray-400">{item.issuingOrganization}</p>
                    <p className="text-gray-600 dark:text-gray-400">
                        <a href={item.certificationLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            View Certificate
                        </a>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Issued: {item.issueDate}</p>
                    {item.expiryDate && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">Expires: {item.expiryDate}</p>
                    )}
                </div>
            ))}
        </section>
    );
};

export default Certificate;
