'use client'

import { createContext, ReactNode, useEffect, useState } from 'react';

export function ThemeProvider({ childred }: { children: ReactNode }) {
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
    })
}