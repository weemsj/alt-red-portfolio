import React from 'react'
import ProjectCard from './ProjectCard.jsx'

export default function ProjectGrid({ projects }){
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
    </div>
  )
}
