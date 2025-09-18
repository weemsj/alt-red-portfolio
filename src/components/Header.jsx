import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

const LinkItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({isActive}) =>
      `font-mono text-sm px-3 py-2 rounded-lg transition ${isActive ? 'bg-altred-primary text-white' : 'hover:bg-black/5 dark:hover:bg-white/10'}`
    }>
    {children}
  </NavLink>
)

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-altred-charcoal/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="font-extrabold tracking-tight text-xl">
          Alt_<span className="text-altred-primary">Red</span>
        </NavLink>
        <nav className="flex items-center gap-2">
          <LinkItem to="/projects">Projects</LinkItem>
          <LinkItem to="/about">About</LinkItem>
          <LinkItem to="/work-in-progress">WIP</LinkItem>
          <LinkItem to="/contact">Contact</LinkItem>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
