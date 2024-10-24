'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);


    // useEffect(() => {
    //     const fetchUser = async () => {
    //       // Replace with your auth logic, e.g., fetching from API or checking cookies
    //       const userData = await fetch('/api/auth/user').then(res => res.json());
    //       setUser(userData || null);
    //     };

    //     fetchUser();
    //   }, []);

    useEffect(() => {
        const userData = localStorage.getItem("email");
        if (userData) {
            setUser(userData || null)
        }
    },[]);

    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth =() => {
    return useContext(AuthContext);
}