import React from 'react'
import ShowProgress from './ShowProgress'
import ShowPersonalRecords from './ShowPersonalRecords'

function ProgressContainer() {
  return (
    <div className='min-h-screen flex justify-center p-8'>
      <div className='w-full max-w-7xl'> {/* This container matches the width of Progress-main-content */}
        <h1 className='text-2xl font-bold pb-8 text-left'>
          Progress Tracking
        </h1>
        
        <div className="border rounded-md shadow-sm p-6 bg-white">
          {/* Progress contents */}
          <ShowProgress />

        </div>
      </div>
    </div>
  )
}

export default ProgressContainer