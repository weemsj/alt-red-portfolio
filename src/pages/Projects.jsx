import React from 'react'
import { useState, useMemo } from 'react'
import TagFilter from '../components/TagFilter.jsx'
import ProjectGrid from '../components/ProjectGrid.jsx'
import projects from '../data/projects.json'

export default function Projects(){
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags || []))).sort()
  const [active, setActive] = useState([])
  const [q, setQ] = useState('')

  const toggle = (tag)=> setActive(prev => prev.includes(tag) ? prev.filter(t=>t!==tag) : [...prev, tag])

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchTags = active.length === 0 || (p.tags || []).some(t => active.includes(t))
      const matchQ = q.trim() === '' || (p.title + ' ' + p.blurb + ' ' + (p.tech||[]).join(' ')).toLowerCase().includes(q.toLowerCase())
      return matchTags && matchQ
    })
  }, [active, q])

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <TagFilter allTags={allTags} active={active} onToggle={toggle} onSearch={setQ} />
      <ProjectGrid projects={filtered} />
    </section>
  )
}
