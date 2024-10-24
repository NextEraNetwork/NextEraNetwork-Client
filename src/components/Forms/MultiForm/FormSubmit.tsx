// FormSubmit.tsx
import React from 'react';

interface FormSubmitProps {
  formData: any; // Define proper type based on your ProfileData
}

const FormSubmit: React.FC<FormSubmitProps> = ({ formData }) => {
  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission (e.g., API call)
  };

  return (
    <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      Submit
    </button>
  );
};

export default FormSubmit;
