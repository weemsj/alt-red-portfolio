import React from 'react'
export default function Button({ as:As='a', className='', ...props }){
  return <As {...props} className={`inline-flex items-center justify-center rounded-full px-4 py-2 bg-altred-primary text-white hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-altred-primary ${className}`} />
}
