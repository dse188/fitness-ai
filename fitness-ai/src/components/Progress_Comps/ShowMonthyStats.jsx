import React from 'react'

function ShowMonthyStats() {
  return (
    <div>
        <div className='MS-contents     border rounded-md bg-white p-6'>
            <h1 className='text-2xl font-semibold'>Monthly Stats</h1>
            <p className='text-sm text-gray-500'>Your best performances for key exercises</p>

            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-zinc-50 p-3 mt-4'>
                <h6 className='text-sm text-gray-500'>Workouts</h6>
                <h2 className='text-xl font-bold'>3</h2>
              </div>

              <div className='bg-zinc-50 p-3 mt-4'>
                <h6 className='text-sm text-gray-500'>Total Time</h6>
                <h2 className='text-xl font-bold'>3.5 hrs</h2>
              </div> 

              <div className='bg-zinc-50 p-3 mt-4'>
                <h6 className='text-sm text-gray-500'>Total Volume</h6>
                <h2 className='text-xl font-bold'>24,525 lbs</h2>
              </div> 

              <div className='bg-zinc-50 p-3 mt-4'>
                <h6 className='text-sm text-gray-500'>Exercises</h6>
                <h2 className='text-xl font-bold'>6</h2>
              </div>    
            </div>

            
        </div>
    </div>
  )
}

export default ShowMonthyStats