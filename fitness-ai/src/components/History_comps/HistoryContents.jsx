import React from 'react'
import SearchBarExercise from '../LogWorkout_comps/SearchBarExercise'
import WorkoutHistory from './WorkoutHistory'

function HistoryContents() {
  return (
    <div>
        <div className='Main-content pl-14 pr-14'>
            <h1 className='text-2xl font-bold text-gray-800 pt-8'>
                Workout History
            </h1>
            <p className='text-gray-700 text-sm font-semibold pt-8'>Filter by exercise</p>

            <div className=' pt-2'>
              <SearchBarExercise />
            </div>

            {/*Workout history goes here */}
            <div className='pt-4'>
              <WorkoutHistory />
            </div>
            
        </div>
    </div>
  )
}

export default HistoryContents