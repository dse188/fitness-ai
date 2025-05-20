import React from 'react'
import Navbar from '../components/LogWorkout_comps/Navbar'
import ProgressContainer from '../components/Progress_Comps/ProgressContainer'
import ShowPersonalRecords from '../components/Progress_Comps/ShowPersonalRecords'
import ShowMonthyStats from '../components/Progress_Comps/ShowMonthyStats'

function Progress() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-10"> {/* Added wrapper for Navbar */}
        <Navbar />
      </div>
      <div className="flex-1 bg-zinc-50">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8">
          <ProgressContainer />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 pl-12 pr-12">
            <div className='Personal-Records w-full'>
              <ShowPersonalRecords />
            </div>
            <div className='Monthly-Stats w-full'>
              <ShowMonthyStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progress