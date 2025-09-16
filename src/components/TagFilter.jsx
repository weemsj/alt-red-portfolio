import React from 'react'

export default function TagFilter({ allTags, active, onToggle, onSearch }){
  return (
    <div className="flex flex-wrap items-center gap-2">
      <input
        type="search"
        placeholder="Search…"
        className="px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-altred-ink"
        onChange={(e)=>onSearch(e.target.value)}
        aria-label="Search projects"
      />
      {allTags.map(tag => (
        <button
          key={tag}
          onClick={()=>onToggle(tag)}
          className={`px-3 py-2 rounded-full border text-sm ${active.includes(tag) ? 'bg-altred-primary text-white border-altred-primary' : 'border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10'}`}
          aria-pressed={active.includes(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
