import React from 'react';
import InputText from '@/components/Forms/Inputs/InputText';

interface LinkInputProps {
    label: string; // e.g., "GitHub", "LinkedIn"
    value: string; // Current value of the input
    onChange: (value: string) => void; // Callback to handle changes
}

const LinkInput: React.FC<LinkInputProps> = ({ label, value, onChange }) => {
    return (
        <InputText
            label={label}
            value={value}
            onChange={onChange}
            placeholder={`Enter your ${label} URL`}
        />
    );
};

export default LinkInput;
