import React from 'react'
import { FaClock, FaCalendar } from 'react-icons/fa'

function WorkoutHistory({exercises, sets, volume, reps, weight}) {

    const numbers = {
        exercises: "2",
        sets: "6",
        volume: "4140 lbs"
    }

    const historySet1 = {
        set: "1", weight: "95 lbs", reps: "12", volume: "1,140 lbs"
    }

    const historySet2 = {
        set: "2", weight: "105 lbs", reps: "10", volume: "1,050 lbs"
    }

    const historySet3 = {
        set: "3", weight: "105 lbs", reps: "8", volume: "920 lbs"
    }

  return (
    <div className='Workout-history-card    border rounded-md'>
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

            <div className='Workout-card    pt-4'>
                <hr className='pb-2'/>
                <h3 className='Workout-title    text-black text-lg font-semibold'>Shoulder Press</h3>
                <div className='History-info     grid grid-cols-5 text-sm text-gray-500 font-semibold pt-2'>
                    <h6>Set</h6>
                    <h6>Weight</h6>
                    <h6>Reps</h6>
                    <h6>Volume</h6>
                </div>
                <div className='History-numbers     '>
                    <div className='History-info-set1     grid grid-cols-5 text-sm text-black font-semibold pt-2'>
                        <h6>{historySet1.set}</h6>
                        <h6>{historySet1.weight}</h6>
                        <h6>{historySet1.reps}</h6>
                        <h6>{historySet1.volume}</h6>
                    </div>
                    <div className='History-info-set2     grid grid-cols-5 text-sm text-black font-semibold pt-2'>
                        <h6>{historySet2.set}</h6>
                        <h6>{historySet2.weight}</h6>
                        <h6>{historySet2.reps}</h6>
                        <h6>{historySet2.volume}</h6>
                    </div>
                    <div className='History-info-set3     grid grid-cols-5 text-sm text-black font-semibold pt-2'>
                        <h6>{historySet3.set}</h6>
                        <h6>{historySet3.weight}</h6>
                        <h6>{historySet3.reps}</h6>
                        <h6>{historySet3.volume}</h6>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default WorkoutHistory