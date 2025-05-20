import React from 'react'
import Navbar from '../components/LogWorkout_comps/Navbar'
import MidLog from '../components/LogWorkout_comps/MidLog'

function LogWorkout() {
  return (
    <div className='min-h-screen flex flex-col bg-zinc-50'>
        <Navbar />
        <div className='mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8'>
          <MidLog />
        </div>
    </div>
  )
}

export default LogWorkout