import React from 'react'
import Navbar from '../components/LogWorkout_comps/Navbar'
import ProgressContainer from '../components/Progress_Comps/ProgressContainer'

function Progress() {
  return (
    <div className='min-h-screen flex flex-col bg-zinc-50'>
        <Navbar />
        <ProgressContainer />
    </div>
  )
}

export default Progress