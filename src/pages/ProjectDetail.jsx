import React from 'react'
import { useParams } from 'react-router-dom'
import projects from '../data/projects.json'
import Badge from '../components/Badge.jsx'
import Lightbox from '../components/Lightbox.jsx'

export default function ProjectDetail(){
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  const [lightbox, setLightbox] = React.useState(null)

  if (!project) return <p>Project not found.</p>

  const { title, blurb, tech, youtubeId, images = [], repoUrl, demoUrl } = project

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold">{title}</h1>
        <p className="text-gray-600 dark:text-gray-300">{blurb}</p>
        <div className="flex flex-wrap mt-2">{(tech||[]).map(t => <Badge key={t}>{t}</Badge>)}</div>
        <div className="flex gap-4 text-sm">
          {repoUrl && <a className="hover:underline" href={repoUrl} target="_blank" rel="noreferrer">GitHub Repo ↗</a>}
          {demoUrl && <a className="hover:underline" href={demoUrl} target="_blank" rel="noreferrer">Live Demo ↗</a>}
        </div>
      </header>

      {youtubeId && (
        <div className="aspect-video rounded-2xl overflow-hidden border border-black/10 dark:border-white/10">
          <iframe
            title={`${title} — demo video`}
            src={`https://www.youtube.com/embed/${youtubeId}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {images.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <button key={i} onClick={()=>setLightbox(src)} className="block rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
              <img src={src} alt={`${title} screenshot ${i+1}`} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      <Lightbox src={lightbox} onClose={()=>setLightbox(null)} />
    </article>
  )
}
