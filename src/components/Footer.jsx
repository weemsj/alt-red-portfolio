import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600 dark:text-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Alt_Red. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:underline" href="mailto:jacqueweems24@gmail.com">Email</a>
          <a className="hover:underline" href="https://github.com/weemsj" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:underline" href="https://www.linkedin.com/weemsj" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
