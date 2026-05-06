'use client';

import { useEffect, useState } from 'react';

export function useTimeTracker() {
  const [canCollect, setCanCollect] = useState(false);
  const [secondsUntilNext, setSecondsUntilNext] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/user/update-time')
        .then((res) => res.json())
        .then((data) => {
            setCanCollect(data.canCollect);
            setSecondsUntilNext(data.secondsUntilNext);
            setLoading(false);
        });
}, []);

  useEffect(() => {
    if (canCollect) return;
    const interval = setInterval(async () => {
      try {
        const result = await fetch('/api/user/update-time', { method: 'POST' });
        const data = await result.json();
        setSecondsUntilNext(data.secondsUntilNext);
        setCanCollect(data.canCollect);
        setLoading(false);
      } catch (err) {
        console.error('Time update failed:', err);
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [canCollect]);

  useEffect(() => {
    if (canCollect) return;
    const countdown = setInterval(() => {
      setSecondsUntilNext((prev) => (prev && prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, [canCollect]);

  function markCollected() {
    setCanCollect(false);
  }

  return { canCollect, markCollected, loading, secondsUntilNext };
}