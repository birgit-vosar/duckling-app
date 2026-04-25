'use client'

export default function DebuggerLoading() {
  return (
    <div className="flex items-center gap-1 px-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800 w-fit">
      <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce [animation-delay:-0.3s]" />
      <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce [animation-delay:-0.15s]" />
      <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" />
    </div>
  )
}