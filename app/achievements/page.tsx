'use client'

import { useTheme } from "../context/ThemeContext"
import Nav from "../components/Nav"
import TopBar from "../components/TopBar"

export default function () {
    const { toggleTheme, darkMode } = useTheme()

    return (
        <div className="grid grid-cols-8 min-h-screen">
            <Nav />
            <div className="col-span-7 bg-stone-100 text-zinc-800 dark:bg-[#0b111e] dark:text-white h-full">
                <div className="flex flex-col h-screen">
                    <TopBar />
                    {/* main */}
                    <div>
                        <p className="ml-4 mt-4 text-lg">This is achievements page.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}