import React from 'react'

export default function Button({ as: As = 'a', className = '', children, ...props }) {
  const base = 'font-sans text-smd inline-flex items-center justify-center rounded-full px-4 py-2 bg-altred-primary text-white !text-white no-underline hover:opacity-90 hover:no-underline transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-altred-primary'
  return (
    <As {...props} className={`${base} ${className}`.trim()}>
      {children}
    </As>
  )
}
