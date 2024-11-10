'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/reducer/store';
import { changeEmailUserName } from '@/services/operations/student/authAPI';

const ChangeUserName: React.FC = () => {
    const [currentUsername, setCurrentUsername] = useState<string>('Jinesh');
    const [newUsername, setNewUsername] = useState<string>('');

    const loading = useSelector((state: RootState) => state.auth.loading);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const username = localStorage.getItem("userName");
        if (username) {
            setCurrentUsername(username);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUsername(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(changeEmailUserName('username',newUsername));
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Change Username</h2>
            <p className="text-gray-600 mb-4">
                Current Username: <span className="font-semibold">{currentUsername}</span>
            </p>
            <p className="text-gray-600 mb-4">Please enter your new username below.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newUsername}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="New Username"
                    required
                />
                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600"
                    disabled={loading}
                >
                    {loading ? 'Processing...' : 'Change Username'}
                </button>
            </form>
        </div>
    );
};

export default ChangeUserName;
