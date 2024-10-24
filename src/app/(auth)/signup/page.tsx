'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import InputText from '@/components/Forms/Inputs/InputText';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/reducer/store';
import { signupUser, sendOtp } from '@/services/operations/student/authAPI'; // Assuming sendOtp exists
import { RootState } from '@/reducer/store';
import PreLoader from '@/components/PreLoader';
import { toast } from 'react-toastify';

interface SignUpData {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    otp: string;
}

const SignupPage: React.FC = () => {
    const [formData, setFormData] = useState<SignUpData>({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        otp: ""
    });
    const [otpSent, setOtpSent] = useState<boolean>(false); // Track if OTP has been sent
    const loading = useSelector((state: RootState) => state.auth.loading);
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (newData: Partial<SignUpData>) => {
        setFormData((prev) => ({ ...prev, ...newData }));
    };

    const handleSendOtp = async () => {
        try {
            if (formData.email) {
                const response = await dispatch(sendOtp(formData.email));
                if (response === true) {
                    setOtpSent(true);
                }
                else{
                    console.log("Failed to send OTP.")
                }
            }
            else{
                toast.error("Email Field is required.")
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
            // Handle error (e.g., show a message to the user)
        }
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Signup Data");
        dispatch(signupUser(formData));
    };

    return (
        <div className="flex-grow flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm md:max-w-md lg:max-w-2xl">
                <h2 className="text-2xl font-semibold text-center mb-6">Create Your Account</h2>
                <form onSubmit={handleFormSubmit}>
                    {!otpSent ? (
                        <>
                            <InputText
                                type="email"
                                label={"Email"}
                                value={formData.email}
                                onChange={(value) => handleChange({ email: value })}
                                placeholder="Enter your email"
                                required={true}
                            />
                            <button
                                type="button"
                                onClick={handleSendOtp}
                                disabled={loading}
                                className={`w-full cursor-pointer py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 ${loading && "cursor-wait"}`}
                            >
                                {!loading ? "Send OTP" : <PreLoader />}
                            </button>
                        </>
                    ) : (
                        <>
                            <InputText
                                type="text"
                                label={"Username"}
                                value={formData.userName}
                                onChange={(value) => handleChange({ userName: value })}
                                placeholder="Enter your username"
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
                                type="password"
                                label={"Confirm Password"}
                                value={formData.confirmPassword}
                                onChange={(value) => handleChange({ confirmPassword: value })}
                                placeholder="Confirm your password"
                                required={true}
                            />
                            <InputText
                                type="text"
                                label={"OTP"}
                                value={formData.otp}
                                onChange={(value) => handleChange({ otp: value })}
                                placeholder="Enter the OTP sent to your email"
                                required={true}
                            />
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                            >
                                {!loading ? "Sign Up" : <PreLoader />}
                            </button>
                        </>
                    )}

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

