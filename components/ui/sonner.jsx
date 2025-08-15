"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    (<Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        style: {
          background: 'rgb(17, 24, 39)',
          border: '1px solid rgb(75, 85, 99)',
          color: 'rgb(243, 244, 246)',
          fontSize: '14px',
          fontWeight: '500',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        },
        className: 'group toast group-[.toaster]:bg-gray-900 group-[.toaster]:text-gray-100 group-[.toaster]:border-gray-600 group-[.toaster]:shadow-lg',
      }}
      {...props} />)
  );
}

export { Toaster }
