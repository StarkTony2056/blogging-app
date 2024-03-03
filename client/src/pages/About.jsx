import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div className="">
          <h1 className='font-semibold text-3xl text-center my-7'>About Mainak's Blog</h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Mainak's Blog is a blog webapp that I created to share my ideas and insights in the field of computer science and software engineering.<br />
              I am a computer science student doing a specialization in information technology and machine learning systems, and I want to write about my experiences in the field of education and research.<br />
              I hope you enjoy reading my blog!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
