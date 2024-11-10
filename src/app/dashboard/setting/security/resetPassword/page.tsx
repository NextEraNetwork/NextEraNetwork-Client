'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/reducer/store';
import { updatePassword } from '@/services/operations/student/authAPI';
import { toast } from 'react-toastify';

const ResetPassword: React.FC = () => {
    const [formValue, setFormValue] = useState<{
        currentPassword: string;
        newPassword: string;
        confirmPassword: string;
    }>({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const loading = useSelector((state: RootState) => state.auth.loading);
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formValue.newPassword !== formValue.confirmPassword) {
            toast.error("New password and confirmation password must match.");
            return;
        }
    
        if (formValue.newPassword.length < 8) {
            toast.error("Password must be at least 8 characters long.");
            return; 
        }
        dispatch(updatePassword(formValue.currentPassword, formValue.newPassword))
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
                    disabled={loading}
                >
                    {loading ? 'Processing...' : 'Reset Password'}
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
