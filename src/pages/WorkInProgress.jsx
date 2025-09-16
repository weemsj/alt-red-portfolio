import React from 'react'

const wip = [
  { title: 'Alt_Red Design System', status: 'Exploring tokens + components', eta: 'Q4 2025' },
  { title: 'Portfolio v2 Animations', status: 'Framer Motion sequencing', eta: 'Q4 2025' }
]

export default function WorkInProgress(){
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Work In Progress</h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        {wip.map((item, i) => (
          <li key={i} className="rounded-2xl border border-black/10 dark:border-white/10 p-4 bg-white dark:bg-altred-ink">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.status}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">ETA: {item.eta}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
