import React from 'react'
import Navbar from '../components/LogWorkout_comps/Navbar'
import MidLog from '../components/LogWorkout_comps/MidLog'

function LogWorkout() {
  return (
    <div className='flex flex-col bg-zinc-50'>
        <Navbar />
        <MidLog />
    </div>
  )
}

export default LogWorkout