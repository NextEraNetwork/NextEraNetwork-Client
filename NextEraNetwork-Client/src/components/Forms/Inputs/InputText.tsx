import React from 'react';

interface InputTextProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    type?:string
}

const InputText: React.FC<InputTextProps> = ({ type, label, value, onChange, placeholder, required }) => {
    return (
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>} 
            </label>
            <input
                type={type || "text"}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="mt-1 block w-full p-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
                required={required}
            />
        </div>
    );
};

export default InputText;
