import React from 'react'
import { FaClock, FaCalendar } from 'react-icons/fa'
import ShowWorkout from './ShowWorkout'

function WorkoutHistory({exercises, sets, volume}) {

    const numbers = {
        exercises: "2",
        sets: "6",
        volume: "4140 lbs"
    }

    

  return (
    <div className='Workout-history-card    border rounded-md pb-8'>
        <div className='pl-5 pr-5'>
            <h1 className='text-2xl font-semibold pt-5'>Full Body Workout</h1>
            <div className='Date-and-duration   flex gap-5 text-sm text-gray-500'>

                <div className='Date    flex gap-1'>
                    <FaCalendar className='text-sm m-auto'/>
                    <h6>Month 00, 0000 </h6>
                </div>
                <div className='Duration    flex gap-1'>
                    <FaClock className='text-sm mt-1'/>
                    <h6>60 min</h6>
                </div>
            </div>

            <div className='Exercise-numbers    pt-6'>
                <div className='grid grid-cols-4 text-sm text-gray-500'>
                    <h6>Exercises</h6>
                    <h6>Sets</h6>
                    <h6>Volume</h6>
                </div>
                <div className='grid grid-cols-4 text-sm text-black font-semibold'>
                    <h6>{numbers.exercises}</h6>
                    <h6>{numbers.sets}</h6>
                    <h6>{numbers.volume}</h6>
                </div>
            </div>


            {/* Show exercise and amount of workout done */}
            <ShowWorkout />

            
            
        </div>
    </div>
  )
}

export default WorkoutHistory