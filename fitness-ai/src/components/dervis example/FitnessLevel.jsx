import React from 'react'
import { useState } from 'react'
const FitnessLevel = () => {
    const [count, setCount] = useState(0)
    const [workouts, setWorkouts] = useState(
      [
        {
          name: "curls",
          reps: "6"
        },
        {
          name: "bench",
          reps: "6"
        },
      ]
    )


  return (
    <div className='bg-gray-500 bg-cover bg-center bg-no-repeat'>
        {workouts.map(workout => <div ><p className='text-red-600'>{workout.name}</p>reps{workout.reps}</div>)}
    </div>
  )
}

export default FitnessLevel