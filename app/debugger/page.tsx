'use client'

import { useTheme } from '../context/ThemeContext';



export default function Debugger() {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <div className={darkMode ? 'bg-[#0b111e] min-h-screen' : 'bg-white min-h-screen'}>
            <div className="p-6">
                {/* header with toggle */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className={darkMode ? 'text-white text-2xl' : 'text-black text-2xl'}>
                        🦆 duck debugger
                    </h1>

                    {/* toggle button */}
                    <button
                        onClick={() => toggleTheme(!darkMode)}
                        className="px-4 py-2 rounded bg-gray-700 text-white"
                    >
                        {darkMode ? '☀️ light' : '🌙 dark'}
                    </button>
                </div>

                {/* main content area - placeholder for now */}
                <div className={darkMode ? 'bg-[#0e1525] border border-[#182543] rounded-lg p-6' : 'bg-gray-100 border border-gray-300 rounded-lg p-6'}>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        debugger content will go here
                    </p>
                </div>
            </div>
        </div>
    );
}