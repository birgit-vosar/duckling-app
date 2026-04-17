'use client'

import { createContext, useContext, ReactNode, useState } from "react"

type NavContextType = {
    menuState: boolean;
    toggleNav: () => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
    const [menuState, setMenuState] = useState(true);

    const toggleNav = () => {
        setMenuState(!menuState);
    }

    return (
        <NavContext.Provider value={{ menuState, toggleNav }}>
            { children }
        </NavContext.Provider>
    )
}

export const useNav = () => {
    const context = useContext(NavContext);
    if (context === undefined) {
        throw new Error('useNav not functioning');
    }
    return context;
}