import React from 'react'
import ShowProgress from './ShowProgress'

function ProgressContainer() {
  return (
    <div>
        <div className='p-8 pl-14 pr-14'>
            <h1 className='text-2xl font-bold pb-8'>
                Progress Tracking
            </h1>

            <div className="Progress-main-content   border rounded-md shadow-sm p-6 bg-white">
                {/* Progess contents */}
                <ShowProgress />
            </div>
        </div>
    </div>
  )
}

export default ProgressContainer