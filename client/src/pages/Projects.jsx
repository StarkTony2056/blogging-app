import React from 'react'
import CallToAction from '../components/CallToAction.jsx'

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex flex-col justify-center items-center gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p className='text-md text-gray-500'>Check out the projects that I am working on, and the ones that I have completed!</p>
      <CallToAction/>
    </div>
  )
}
