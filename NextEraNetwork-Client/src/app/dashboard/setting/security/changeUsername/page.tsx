'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChangeUserName: React.FC = () => {
    const [currentUsername, setCurrentUsername] = useState<string>('Jinesh');
    const [newUsername, setNewUsername] = useState<string>('');
    const [processing, setProcessing] = useState<boolean>(false);
    const [flashMessage, setFlashMessage] = useState<{ type: string; message: string } | null>(null);

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
        setProcessing(true);

        const token = localStorage.getItem('token');
        if (!token) {
            setFlashMessage({ type: 'error', message: 'Authentication token not found.' });
            setProcessing(false);
            return;
        }

        const baseURL = "http:localhost:8010/api/v1"

        try {
            const response = await axios.put(`${baseURL}/user/changeusername`, {
                newUsername
            }, {
                headers: {
                    Authorization: `Bearer ${token}` // Include token in Authorization header
                }
            });

            if (response.status === 200) {
                setFlashMessage({ type: 'success', message: "Username Changed Successfully" });
            }
        } catch (error: any) {
            if (error.response) {
                if (error.response.status === 404) {
                    setFlashMessage({ type: 'error', message: 'User not found, email not matched' });
                } else {
                    setFlashMessage({ type: 'error', message: 'Failed to change Username, try again.' });
                }
            } else {
                console.error('Network or request error:', error);
                setFlashMessage({ type: 'error', message: 'Failed to change Username, try again.' });
            }
        } finally {
            setProcessing(false);
            setNewUsername(""); // Reset new username input
        }
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
                    disabled={processing}
                >
                    {processing ? 'Processing...' : 'Change Username'}
                </button>
            </form>
        </div>
    );
};

export default ChangeUserName;
