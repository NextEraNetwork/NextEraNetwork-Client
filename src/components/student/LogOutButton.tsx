'use client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logoutUser } from '@/services/operations/student/authAPI';
import { AppDispatch } from '@/reducer/store';

const LogOutButton: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>(); 
    const router = useRouter(); 

    const handleLogout = () => {
        // Clear user session data from storage
        localStorage.clear(); // or sessionStorage.clear();
        sessionStorage.clear();

        // Dispatch the logout action
        dispatch(logoutUser());

        // Redirect to the home page or login page
        router.push('/'); // Use Next.js router for redirection
    };

    return (
        <button onClick={handleLogout} className=''>
            Logout
        </button>
    );
};

export default LogOutButton;

