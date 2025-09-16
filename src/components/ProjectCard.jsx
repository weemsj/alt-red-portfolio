import React from 'react'
import { Link } from 'react-router-dom'
import Badge from './Badge.jsx'

export default function ProjectCard({ project }) {
  const { title, slug, blurb, tags, images } = project
  const resolveSrc = (src) => {
    if (!src) return src
    if (/^https?:\/\//i.test(src)) return src
    const base = import.meta.env.BASE_URL || '/'
    return `${base.replace(/\/$/, '')}/${src.replace(/^\//, '')}`
  }

  const thumb = resolveSrc(images?.[0]) || 'https://via.placeholder.com/800x480?text=Alt_Red'
  return (
    <Link to={`/projects/${slug}`} className="group block border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-card transition bg-white dark:bg-altred-ink">
      <div className="aspect-video bg-black/5 dark:bg-black/20">
        <img src={thumb} alt={title} className="w-full h-full object-cover group-hover:opacity-90 transition" loading="lazy" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{blurb}</p>
        <div className="mt-3 flex flex-wrap">
          {(tags || []).map(t => <Badge key={t}>{t}</Badge>)}
        </div>
      </div>
    </Link>
  )
}
