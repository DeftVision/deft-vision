import React, { createContext, useState, useContext, useEffect } from 'react';
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('toke'));
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || null);

    useEffect(() => {
        const handleStorageChange = () => {
            const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
            setIsAuthenticated(!!localStorage.getItem('token'));
            setCurrentUser(storedCurrentUser || null);
        };

        // Initialize `currentUser` and `isAuthenticated` on app load
        const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
        setIsAuthenticated(!!sessionStorage.getItem('token'));
        setCurrentUser(currentUser || null);

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);


    const login = (token, currentUserData) => {
        localStorage.setItem('token', token);
        localStorage.setItem('currentUser', JSON.stringify(currentUserData));
        setIsAuthenticated(true);
        setCurrentUser(currentUserData);
        console.log(currentUserData);
    }

    const logout = (navigate) => {
        localStorage.clear();
        setIsAuthenticated(false);
        setCurrentUser(null);

        // delay to allow state to clear before navigation
        setTimeout(() => {
            navigate('/login', { replace: true }); // Ensure absolute path
        }, 0);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}