export default function Card({ children, className = '' }: { children?: React.ReactNode, className?: string }) {
  return (
    <div className={`shadow-sm border rounded-xl border-gray-300 bg-white dark:bg-[#0e1525] dark:border-[#1e2841] ${className}`}>
      {children}
    </div>
  )
}