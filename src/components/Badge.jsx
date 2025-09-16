import React from 'react'
export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-altred-primary/10 text-altred-primary border border-altred-primary/20 mr-2 mb-2">
      {children}
    </span>
  )
}
