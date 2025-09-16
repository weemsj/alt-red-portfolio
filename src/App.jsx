import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-altred-charcoal dark:text-white transition-colors">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
