import React from 'react'

function ShowWorkout({set, volume, reps, weight}) {

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
                    <div className='History-info-set1     grid grid-cols-5 text-sm text-black  pt-2'>
                        <h6>{historySet1.set}</h6>
                        <h6>{historySet1.weight}</h6>
                        <h6>{historySet1.reps}</h6>
                        <h6>{historySet1.volume}</h6>
                    </div>
                    <div className='History-info-set2     grid grid-cols-5 text-sm text-black  pt-2'>
                        <h6>{historySet2.set}</h6>
                        <h6>{historySet2.weight}</h6>
                        <h6>{historySet2.reps}</h6>
                        <h6>{historySet2.volume}</h6>
                    </div>
                    <div className='History-info-set3     grid grid-cols-5 text-sm text-black  pt-2'>
                        <h6>{historySet3.set}</h6>
                        <h6>{historySet3.weight}</h6>
                        <h6>{historySet3.reps}</h6>
                        <h6>{historySet3.volume}</h6>
                    </div>
                </div>
            </div>
  )
}

export default ShowWorkout