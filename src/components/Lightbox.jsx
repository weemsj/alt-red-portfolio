import React from 'react'

export default function Lightbox({ src, alt, onClose }){
  if (!src) return null
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose} role="dialog" aria-modal="true">
      <img src={src} alt={alt || ''} className="max-h-[85vh] rounded-2xl shadow-card" />
    </div>
  )
}
