import React, { createContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (credentials: { email: string; password: string }) => Promise<void>;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            verifyToken(token);
        }
    }, []);

    const verifyToken = async (token: string) => {
        try {
            const response = await axios.get('http://localhost:8000/verify-token', {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error('Token verification failed:', error);
            localStorage.removeItem('authToken');
            setIsAuthenticated(false);
        }
    };

    const login = async (credentials: { email: string; password: string }) => {
        try {
            const response = await axios.post('http://localhost:8000/login', credentials, {
                withCredentials: true,
            });
            const { token } = response.data;
            localStorage.setItem('authToken', token);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Login failed:', error);
            localStorage.removeItem('authToken');
            setIsAuthenticated(false);
            throw new Error('Login failed. Please check your credentials and try again.');
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
