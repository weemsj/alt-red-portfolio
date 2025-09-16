import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import ProjectGrid from '../components/ProjectGrid.jsx'
import projects from '../data/projects.json'

export default function Home(){
  const featured = projects.slice(0, 6)
  return (
    <section className="space-y-10">
      <div className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Alt_<span className="text-altred-primary">Red</span>
        </h1>
        <p className="font-mono text-sm text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Edgy, sleek, outgoing portfolio of projects spanning web and data—where the alternate ego ships.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button href="/projects">View Projects</Button>
          <Button href="/about" className="bg-black/80 dark:bg-white/10">About Me</Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured Projects</h2>
          <Link to="/projects" className="hover:underline">See all →</Link>
        </div>
        <ProjectGrid projects={featured} />
      </div>

      <div className="mt-12 rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white dark:bg-altred-ink">
        <h3 className="text-lg font-semibold">Work In Progress</h3>
        <p className="font-mono text-sm text-gray-600 dark:text-gray-300">Peek at what's brewing on the bench—early ideas and experiments.</p>
        <Link to="/work-in-progress" className="inline-block mt-3 hover:underline">Explore WIP →</Link>
      </div>
    </section>
  )
}
