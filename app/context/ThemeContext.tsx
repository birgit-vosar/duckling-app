'use client'

import { createContext, useContext, ReactNode, useEffect, useState } from 'react';

type ThemeContextType = {
    darkMode: boolean;
    setDarkMode: (dark: boolean) => void;
    toggleTheme: () => void;
    loading: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [darkMode, setDarkMode] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTheme = async () => {
            try {
                const response = await fetch('/api/user/theme');
                if (response.ok) {
                    const data = await response.json();
                    setDarkMode(data.darkMode);
                }
            } catch (err) {
                console.error('Failed to load theme:', err);
            } finally {
                setLoading(false);
            }
        }

        loadTheme();
    }, []);

    const toggleTheme = async () => {
        const newMode = !darkMode;
        setDarkMode(newMode);

        try {
            await fetch('/api/user/theme', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ darkMode: newMode })
            });
        } catch (err) {
            console.error('Failed to save theme:', err);
        }
    };

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode, toggleTheme, loading }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}