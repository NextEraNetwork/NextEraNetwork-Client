'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import InputText from '@/components/Forms/Inputs/InputText';
import { RootState } from '@/reducer/store';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/reducer/store';
import { loginUser } from '@/services/operations/student/authAPI';
import PreLoader from '@/components/PreLoader';

interface LoginData {
    email: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const [formData, setFormData] = useState<LoginData>({
        email: "",
        password: "",
    });
    const loading = useSelector((state:RootState)=> state.auth.loading)
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (newData: Partial<LoginData>) => {
        setFormData((prev) => ({ ...prev, ...newData }));
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Login Data");
        dispatch(loginUser(formData));
    }

    return (
        <div className="flex-grow flex items-center justify-center" >
            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm md:max-w-md lg:max-w-2xl">
                <h2 className="text-2xl font-semibold text-center mb-6">Student Login</h2>
                <form onSubmit={handleFormSubmit}>
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

                    <div className="flex justify-between items-center mb-4">
                        <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 ${loading && "cursor-wait"}`}
                    >
                        {!loading ? "Login" : <PreLoader/>}
                    </button>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account? &nbsp;
                            <Link href="/signup" className="text-blue-500 hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
