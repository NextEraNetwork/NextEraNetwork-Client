'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';


interface InputTextEditorProps {
    label: string;
    value: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    required? : boolean;
    readOnly? : boolean
}

// Dynamically import the React-Quill editor to prevent SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const MyRichTextEditor: React.FC<InputTextEditorProps> = ({ label, value, onChange, placeholder, required, readOnly }) => {
    // const [value, setValue] = useState('');

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            ['code-block', 'link', 'image'],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'align': [] }],
            ['clean']
        ],
    };

    return (

        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <ReactQuill
                theme="snow"
                value={value}
                // onChange={onChange}
                onChange={(val) => {
                    if (!readOnly && onChange) {
                        onChange(val);
                    }
                }}
                modules={modules}
                placeholder={placeholder}
                className=''
                readOnly={readOnly}

            />
        </div>


    );
};

export default MyRichTextEditor;
