import { TimeTracker } from '@/app/components/TimeTracker';
import { NavProvider } from '@/app/context/NavContext';
import type { Metadata } from "next";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavProvider>
      <TimeTracker />
      {children}
    </NavProvider>
  )
}