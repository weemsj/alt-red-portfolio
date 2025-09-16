import React from 'react'

export default function About(){
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>About Alt_Red</h1>
      <p>
        Hi — I'm Jacqueline. Alt_Red is my creative alter-ego: the space where I ship
        bold, useful things at the intersection of business and tech.
      </p>
      <h2>Informal Resume</h2>
      <ul>
        <li>Software & Data Projects — React, Python, Flask, SQL, GCP</li>
        <li>Community — Community Unite Foundation co-founder</li>
        <li>Photography — Sony A-series enthusiast</li>
      </ul>
      <p>
        <a className="inline-flex items-center rounded-full px-4 py-2 bg-altred-primary text-white" href="/resume.pdf" download>
          Download Resume (PDF)
        </a>
      </p>
    </section>
  )
}
