import React from 'react'

function ShowWorkout({ exercise }) {

  return (
    <div className='Workout-card    pt-4'>
        <hr className='pb-2'/>
        <h3 className='Workout-title    text-black text-lg font-semibold'>{exercise.name}</h3>
        <div className='History-info     grid grid-cols-5 text-sm text-gray-500 font-semibold pt-2'>
            <h6>Set</h6>
            <h6>Weight</h6>
            <h6>Reps</h6>
            <h6>Volume</h6>
        </div>
        <div className='History-numbers     '>
            {exercise.sets.map(set => (
                <div key={set.setNumber} className='grid grid-cols-5 text-sm text-black pt-2'>
                    <h6>{set.setNumber}</h6>
                    <h6>{set.weight}</h6>
                    <h6>{set.reps}</h6>
                    <h6>{set.volume}</h6>
                </div>
            ))}
        </div>
    </div>
  );
}

export default ShowWorkout