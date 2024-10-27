import React from 'react'

const Loader = ({loaderRef}) => {
  return (
    <div
        ref={loaderRef}
        className="flex items-center justify-center h-screen bg-white fixed inset-0 z-50"
      >
        <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
          EventSpotLite.
        </h1>
      </div>
  )
}

export default Loader