import React from 'react'
import Navbar from '../components/LogWorkout_comps/Navbar'
import ProgressContainer from '../components/Progress_Comps/ProgressContainer'
import ShowPersonalRecords from '../components/Progress_Comps/ShowPersonalRecords'
import ShowMonthyStats from '../components/Progress_Comps/ShowMonthyStats'

function Progress() {
  return (
    <div className='min-h-screen flex flex-col bg-zinc-50'>
        <Navbar />
        <ProgressContainer />
        <div className='min-h-screen flex p-8 justify-between gap-5'>
            <div className='Personal-Records    w-full'>
              <ShowPersonalRecords />
            </div>
            <div className='Monthly-Stats    w-full'>
              <ShowMonthyStats />
            </div>
        </div>
        
    </div>
  )
}

export default Progress