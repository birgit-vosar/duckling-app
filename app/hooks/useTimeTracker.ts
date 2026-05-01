'use client';

import { useEffect, useState } from 'react';

export function useTimeTracker() {
  const [canCollect, setCanCollect] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/user/update-time', { method: 'POST' })
      .then((res) => res.json())
      .then((data) => {
        setCanCollect(data.canCollect);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (canCollect) return;
    const interval = setInterval(async () => {
      try {
        const result = await fetch('/api/user/update-time', { method: 'POST' });
        const data = await result.json();

        setCanCollect(data.canCollect);
        setLoading(false);
      } catch (err) {
        console.error('Time update failed:', err);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [canCollect]);

  return { canCollect, setCanCollect, loading };
}
