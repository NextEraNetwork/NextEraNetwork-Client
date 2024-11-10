'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import InputText from '@/components/Forms/Inputs/InputText';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/reducer/store';
import { signupUser } from '@/services/operations/student/authAPI'; // Assuming sendOtp exists
import { RootState } from '@/reducer/store';
import PreLoader from '@/components/PreLoader';

interface SignUpData {
    username: string;
    email: string;
}

const SignupPage: React.FC = () => {
    const [formData, setFormData] = useState<SignUpData>({
        username: "",
        email: "",
    });
    const loading = useSelector((state: RootState) => state.auth.loading);
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (newData: Partial<SignUpData>) => {
        setFormData((prev) => ({ ...prev, ...newData }));
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Signup Data");
        dispatch(signupUser(formData));
    };

    return (
        <div className="flex-grow flex items-center justify-center text-black">
            <div className="bg-white rounded-lg shadow-custom p-8 w-full max-w-sm md:max-w-md lg:max-w-2xl">
                <h2 className="text-2xl font-semibold text-center mb-6">Create Your Account</h2>
                <form onSubmit={handleFormSubmit}>

                    <>
                        <InputText
                            type="text"
                            label={"Username"}
                            value={formData.username}
                            onChange={(value) => handleChange({ username: value })}
                            placeholder="Enter your username"
                            required={true}
                        />
                        <InputText
                            type="text"
                            label={"Email"}
                            value={formData.email}
                            onChange={(value) => handleChange({ email: value })}
                            placeholder="Enter your email"
                            required={true}
                        />
            

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                        >
                            {!loading ? "Sign Up" : <PreLoader />}
                        </button>
                    </>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link href="/login" className="text-blue-500 hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;

