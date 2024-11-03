'use client';
import React, { useState } from 'react';
import axios from 'axios';


const ChangeEmail: React.FC = () => {
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [processing, setProcessing] = useState(false);

    const [formValue, setFormValue] = useState({
        currentEmail: '',
        verificationCode: '',
        newEmail: ''
    });

    const baseURL = "http:localhost:8010/api/v1"

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    };

    const handleSendVerification = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setProcessing(true);
        try {
            const response = await axios.post(`${baseURL}/user/sendOTP`, {
                email: formValue.currentEmail
            });

            if (response.status === 200) {
                setIsCodeSent(true);
            }
        } catch (error: any) {
            if (error.response) {
                handleError(error);
            } else {
                console.error('Network or request error:', error);
            }
        } finally {
            setProcessing(false);
        }
    };

    const handleError = (error: any) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    window.location.href = '/login'; // Redirect to login
                    break;
                case 403:
                    break;
                default:
                    console.error('Error:', error);
                    break;
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setProcessing(true);
        try {
            const response = await axios.put(`${baseURL}/user/changeemail`, {
                currentEmail: formValue.currentEmail,
                verificationCode: formValue.verificationCode,
                newEmail: formValue.newEmail
            });

            if (response.status === 200) {
            }
        } catch (error: any) {
            if (error.response) {
                handleError(error);
            } else {
                console.error('Network or request error:', error);
            }
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Change Email</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="currentEmail" className="block mb-1 text-sm">Current Email</label>
                    <input
                        type="email"
                        id="currentEmail"
                        name="currentEmail"
                        value={formValue.currentEmail}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                {isCodeSent && (
                    <>
                        <div className="mb-4">
                            <label htmlFor="verificationCode" className="block mb-1 text-sm">Verification Code</label>
                            <input
                                type="text"
                                id="verificationCode"
                                name="verificationCode"
                                value={formValue.verificationCode}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="newEmail" className="block mb-1 text-sm">New Email</label>
                            <input
                                type="email"
                                id="newEmail"
                                name="newEmail"
                                value={formValue.newEmail}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                    </>
                )}
                {!isCodeSent && (
                    <button
                        type="button"
                        onClick={handleSendVerification}
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600"
                        disabled={processing}
                    >
                        {processing ? 'Sending Code...' : 'Send Verification Code'}
                    </button>
                )}
                {isCodeSent && (
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600"
                        disabled={processing}
                    >
                        {processing ? 'Processing...' : 'Change Email'}
                    </button>
                )}
            </form>
        </div>
    );
};

export default ChangeEmail;
