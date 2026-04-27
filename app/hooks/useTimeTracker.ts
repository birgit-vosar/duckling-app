'use client'

import { useEffect } from "react"

export function useTimeTracker() {
    useEffect(() => {
        const interval = setInterval(async() => {
            try {
                await fetch('/api/user/update-time', { method: 'POST' });
            } catch (err) {
                console.error('Time update failed:', err);
            }
        }, 60000)

        return () => clearInterval(interval)
    }, []);
}