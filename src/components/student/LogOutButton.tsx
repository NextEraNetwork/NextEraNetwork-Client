'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const LogOutButton: React.FC = () => {
    const router = useRouter(); // Initialize router

    const handleLogout = () => {
        // Clear user session data
        localStorage.clear(); // or sessionStorage.clear();
        sessionStorage.clear();

        // Redirect to the home page or login page
        router.push('/'); // Use Next.js router for redirection
    };

    return (
        <button onClick={handleLogout} className=''>
            Logout
        </button>
    );
}

export default LogOutButton;
