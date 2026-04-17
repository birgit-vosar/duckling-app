'use client'

import { createContext, useContext, ReactNode, useState } from "react"

type NavContextType = {
    menuState: boolean;
    toggleNav: () => void;
    mobileMenu: boolean;
    toggleMobileNav: () => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
    const [menuState, setMenuState] = useState(true);
    const [mobileMenu, setMobileMenu] = useState(false)

    const toggleNav = () => {
        setMenuState(!menuState);
    }

    const toggleMobileNav = () => {
        setMobileMenu(!mobileMenu);
    }

    return (
        <NavContext.Provider value={{ menuState, toggleNav, mobileMenu, toggleMobileNav }}>
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