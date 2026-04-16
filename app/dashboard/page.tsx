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
                    {/* topbar */}
                    <TopBar />
                    {/* main */}
                    <div className="grow">
                        <div className="grid grid-cols-10 min-h-full">
                            <div className="col-span-6 bg-grey-700 h-full">
                                <div className="flex flex-col">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="col-span-4 bg-grey-800 h-full">
                                <div className="flex flex-col">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}