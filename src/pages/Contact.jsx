import React from 'react'

export default function Contact(){
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p>Open to collaboration, freelance, and full-time opportunities.</p>
      <ul className="space-y-2">
        <li><a className="hover:underline" href="mailto:info@example.com">info@example.com</a></li>
        <li><a className="hover:underline" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a className="hover:underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
      </ul>
    </section>
  )
}
