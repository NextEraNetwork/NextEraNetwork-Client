'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import InputText from '@/components/Forms/Inputs/InputText';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/reducer/store';


interface SignUpData {
    username: string;
    email: string;
    password: string;
    otp: string;
}
const SignupPage: React.FC = () => {
    const [formData, setFormData] = useState<SignUpData>({
        username: "",
        email: "",
        password: "",
        otp: ""
    })


    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (newData: Partial<SignUpData>) => {
        setFormData((prev) => ({ ...prev, ...newData }));
    }

    return (

        <div className="flex-grow flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm md:max-w-md lg:max-w-2xl">
                <h2 className="text-2xl font-semibold text-center mb-6">Create Your Account</h2>
                <form>
                    <InputText
                        type="text"
                        label={"Username"}
                        value={formData.username}
                        onChange={(value) => handleChange({ username: value })}
                        placeholder="Enter your username"
                        required={true}
                    />
                    <InputText
                        type="email"
                        label={"Email"}
                        value={formData.email}
                        onChange={(value) => handleChange({ email: value })}
                        placeholder="Enter your email"
                        required={true}
                    />

                    <InputText
                        type="password"
                        label={"Password"}
                        value={formData.password}
                        onChange={(value) => handleChange({ password: value })}
                        placeholder="Enter your password"
                        required={true}
                    />

                    <InputText
                        type="text"
                        label={"OTP"}
                        value={formData.otp}
                        onChange={(value) => handleChange({ otp: value })}
                        placeholder="Enter OTP sended"
                        required={true}
                    />

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Sign Up
                    </button>

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
