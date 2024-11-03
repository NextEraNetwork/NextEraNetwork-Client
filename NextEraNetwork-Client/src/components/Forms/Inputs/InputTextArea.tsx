import React from 'react';

interface InputTextProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
}

const InputTextArea: React.FC<InputTextProps> = ({ label, value, onChange, placeholder, required }) => {
    return (
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="mt-1 block w-full p-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
                required={required}
                maxLength={1000}
            />
        </div>
    );
};

export default InputTextArea;
