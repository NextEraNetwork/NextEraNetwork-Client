'use client';
import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword: React.FC = () => {
    const [processing, setProcessing] = useState<boolean>(false);
    const [flashMessage, setFlashMessage] = useState<{ type: string; message: string } | null>(null);
    const [formValue, setFormValue] = useState<{
        currentPassword: string;
        newPassword: string;
        confirmPassword: string;
    }>({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    };

    const baseURL = "http:localhost:8010/api/v1"

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setProcessing(true);

        const token = localStorage.getItem('token');
        if (!token) {
            setFlashMessage({ type: 'error', message: 'Authentication token not found.' });
            setProcessing(false);
            return;
        }

        try {
            const response = await axios.put(
                `${baseURL}/user/changepassword`,
                {
                    currentPassword: formValue.currentPassword,
                    newPassword: formValue.newPassword,
                    confirmNewPassword: formValue.confirmPassword
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}` // Include token in Authorization header
                    }
                }
            );

            if (response.status === 200) {
                setFlashMessage({ type: 'success', message: 'Password updated successfully' });
            }
        } catch (error: any) {
            if (error.response) {
                switch (error.response.status) {
                    case 404:
                        setFlashMessage({ type: 'error', message: 'Incorrect password.' });
                        break;
                    case 400:
                        setFlashMessage({ type: 'error', message: "New password doesn't match the current confirm password." });
                        break;
                    case 402:
                        setFlashMessage({ type: 'error', message: 'Current Password is Incorrect' });
                        break;
                    default:
                        setFlashMessage({ type: 'error', message: 'Server Error' });
                        break;
                }
            } else {
                console.error('Network or request error:', error);
                setFlashMessage({ type: 'error', message: 'Server Error' });
            }
        } finally {
            setProcessing(false);
            setFormValue({
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            });
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
            <p className="text-gray-600 mb-4">Please enter your current password along with the new password and confirm the new password.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="currentPassword" className="block mb-1 text-sm">Current Password</label>
                    <input
                        type="password"
                        placeholder="*****"
                        name="currentPassword"
                        value={formValue.currentPassword}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="newPassword" className="block mb-1 text-sm">New Password</label>
                    <input
                        type="password"
                        placeholder="*****"
                        name="newPassword"
                        value={formValue.newPassword}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block mb-1 text-sm">Confirm New Password</label>
                    <input
                        type="password"
                        placeholder="*****"
                        name="confirmPassword"
                        value={formValue.confirmPassword}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600"
                    disabled={processing}
                >
                    {processing ? 'Processing...' : 'Reset Password'}
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
