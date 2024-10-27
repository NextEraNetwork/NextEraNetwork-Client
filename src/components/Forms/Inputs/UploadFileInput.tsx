// UploadFileInput.tsx
import React, { useState } from 'react';

interface UploadFileInputProps {
  label: string;
  onFileChange: (file: File | null) => void;
}

const UploadFileInput: React.FC<UploadFileInputProps> = ({ label, onFileChange }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onFileChange(file);

    if (file) {
      setFileType(file.type);

      // Preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
      // Preview for PDFs
      else if (file.type === "application/pdf") {
        const pdfUrl = URL.createObjectURL(file);
        setPreview(pdfUrl);
      } else {
        setPreview(null);
      }
    } else {
      setPreview(null);
      setFileType(null);
    }
  };

  return (
    <div className="mb-4">
      <label className="block font-semibold text-gray-700 mb-1">{label}</label>
      <input
        type="file"
        accept="image/*,application/pdf"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      
      {preview && (
        <div className="mt-4">
          {fileType?.startsWith("image/") ? (
            <img src={preview} alt="Preview" className="w-full max-w-xs h-auto rounded" />
          ) : (
            <iframe
              src={preview}
              title="PDF Preview"
              className="w-full h-[70vh] rounded"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default UploadFileInput;
