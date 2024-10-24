'use client';
import React, { Dispatch, SetStateAction } from 'react';

interface InstructionsComponentProps {
    setCheckMark: Dispatch<SetStateAction<boolean>>;
    onProceed: () => void;
}

const InstructionsComponent: React.FC<InstructionsComponentProps> = ({ setCheckMark }) => {
    return (
        <div className="flex items-center justify-center  bg-gray-100 p-16">
            <div className="p-10 bg-white rounded-lg shadow-xl w-full space-y-10">
                <h2 className="text-xl font-semibold text-center">Welcome to NextEraNetwork!</h2>
                <p className="text-center text-gray-600">
                    Before you begin filling out your educational information, please read the following instructions carefully:
                </p>

                <ul className="list-disc-none list-inside space-y-2">
                    <li className="text-gray-800">✅ This data will be used to create a comprehensive profile to connect you with your college alumni.</li>
                    <li className="text-gray-800">✅ Ensure all information is accurate to enhance your visibility to potential employers and peers.</li>
                    <li className="text-gray-800">✅ Your profile helps us tailor opportunities and resources specifically for you.</li>
                    <li className="text-gray-800">✅ Providing complete and truthful information increases your chances of receiving relevant connections.</li>
                    <li className="text-gray-800">✅ Remember, a well-filled profile is key to unlocking the full potential of the NextEraNetwork.</li>
                </ul>

                <p className="text-center text-gray-600">Once you're ready, check the box below to proceed to the Educational Details form.</p>

                <div className="flex items-center justify-center">
                    <input
                        type="checkbox"
                        id="agreeToInstructions"
                        className="mr-2 leading-tight"
                        onChange={(e) => {
                            setCheckMark(e.target.checked);
                            if (e.target.checked) {
                            }
                        }}
                    />
                    <label htmlFor="agreeToInstructions" className="text-gray-700">
                        I have read and understood the instructions.
                    </label>
                </div>
            </div>
        </div>
    );
};

export default InstructionsComponent;
