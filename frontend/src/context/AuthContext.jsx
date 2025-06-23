import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const parseJSON = (value) => {
    try {
        return JSON.parse(value);
    } catch {
        return null;
    }
};

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const [currentUser, setCurrentUser] = useState(parseJSON(localStorage.getItem('currentUser')));

    useEffect(() => {
        const handleStorageChange = () => {
            const storedCurrentUser = parseJSON(localStorage.getItem('currentUser'));
            setIsAuthenticated(!!localStorage.getItem('token'));
            setCurrentUser(storedCurrentUser || null);
        };

        handleStorageChange(); // Call once on mount

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);


    const login = (token, currentUserData) => {
        localStorage.setItem('token', token);
        localStorage.setItem('currentUser', JSON.stringify(currentUserData));
        setIsAuthenticated(true);
        setCurrentUser(currentUserData);
        console.log(currentUserData);
    };

    const logout = (navigate) => {
        localStorage.clear();
        setIsAuthenticated(false);
        setCurrentUser(null);
        setTimeout(() => navigate('/login', { replace: true }), 0);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
