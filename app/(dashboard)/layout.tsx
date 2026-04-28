import { TimeTracker } from '@/app/components/TimeTracker'
import { NavProvider } from '@/app/context/NavContext'

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