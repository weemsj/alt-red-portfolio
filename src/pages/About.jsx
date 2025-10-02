import React from 'react'
import Button from '../components/Button'
import { Container } from 'postcss'

export default function About(){
  return (
    <section className="prose dark:prose-invert max-w-none">
      <div className="flex flex-col md:flex-row items-center gap-6 p-8">
        {/* Profile Image */}
        <img
          src={`${import.meta.env.BASE_URL}/IMG_5020-2.jpg`}
          alt="Jacqueline Weems — Alt_Red"
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-2xl shadow-card border-4 border-altred-primary"
        />

      {/* Text Content */}
      
      <div className='p-8'>
      <h1 className='font-sans text-3xl font-extrabold pb-8'>About Alt_Red</h1>
        <p className='font-mono text-md pb-4'>
          Hi — I'm Jacqueline. <strong>Alt_Red</strong> is my creative alter-ego: 
          the space where I ship bold, useful things at the intersection of business and tech.

          I'm a computer scientist, strategist, and creator who thrives at the intersection of tech, business, and bold ideas.
          With a B.S. in Computer Science from Oregon State University, I build projects that don't just run — they stand out.
          My work spans full-stack applications, data systems, and digital experiences that drive impact for nonprofits, community ventures, and beyond.
          My perspective is shaped by life across five countries, giving me an edge in adaptability and vision. 
          Whether I'm engineering backend systems in Flask and PostgreSQL, designing sleek, high-energy interfaces in React,
          or mapping out a roadmap for a grassroots initiative, I bring both precision and daring creativity.
          Outside the code, I co-founded the Community Unite Foundation, where I lead digital strategy to expand opportunities for underserved youth.
          I also explore storytelling through photography and design — creative outlets that fuel the energy behind Alt-Red.
          At the core, I believe innovation happens when you disrupt the ordinary. 
          Alt-Red is my space to showcase work that pushes boundaries — a mix of technology, strategy, and creativity built to inspire, connect, and challenge what's possible.
      </p>
        <h2 className='font-sans text-xl font-bold pb-4'>Informal Resume</h2>
          <ul>
            <li className='font-mono text-sm'>Software & Data Projects — React, Python, Flask, SQL, GCP</li>
            <li className='font-mono text-sm'>Community — Community Unite Foundation co-founder</li>
            <li className='font-mono text-sm'>Photography — Sony A-series enthusiast</li>
          </ul>
          <p className='py-8'>
            <Button className='font-mono text-sm' href={`${import.meta.env.BASE_URL}resume.pdf`} download> Download Resume (PDF)
            </Button>
          </p>
        </div>
      </div>
      
  </section>
  )
}
