import React from 'react'

export default function Hero() {
  return (
    <section className="">
    <div className=" container mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          All your Products
          <strong className="font-extrabold text-primary sm:block"> In One Click. </strong>
        </h1>
  
        <p className="mt-4 sm:text-xl/relaxed">
          Start Exploring And Look For what You need Now!.
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            href="#"
          >
            Get Started
          </a>
  
          <a
            className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}
