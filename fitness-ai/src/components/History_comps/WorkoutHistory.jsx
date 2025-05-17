import React, { useContext } from 'react'
import { FaClock, FaCalendar, FaTrashAlt } from 'react-icons/fa'
import { WorkoutContext } from '../LogWorkout_comps/WorkoutContext'
import ShowWorkout from './ShowWorkout'

function WorkoutHistory({exercises, sets, volume}) {
    
    const { workouts, removeWorkout } = useContext(WorkoutContext);

    const handleRemoveWorkout = (workoutId) => {
        if(window.confirm('Are you sure you want to delete this workout?')) {
            removeWorkout(workoutId);
        }
    };

  return (
    <div className='space-y-4'>
        {workouts.map(workout => (
            <div key={workout.id} className='Workout-history-card    border rounded-md pb-8'>
                <div className='pl-5 pr-5'>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-semibold pt-5'>{workout.title}</h1>
                        <div>
                            <button 
                                className='p-2 rounded-md hover:bg-blue-500 mt-5'
                                onClick={() => handleRemoveWorkout(workout.id)}
                            >
                                <FaTrashAlt/>
                            </button>
                        </div>
                    </div>
                    <div className='Date-and-duration   flex gap-5 text-sm text-gray-500'>

                        <div className='Date    flex gap-1'>
                            <FaCalendar className='text-sm m-auto'/>
                            <h6>{new Date(workout.date).toLocaleDateString()}</h6>
                        </div>
                        <div className='Duration    flex gap-1'>
                            <FaClock className='text-sm mt-1'/>
                            <h6>{workout.duration} min</h6>
                        </div>
                    </div>

                    <div className='Exercise-numbers    pt-6'>
                        <div className='grid grid-cols-4 text-sm text-gray-500'>
                            <h6>Exercises</h6>
                            <h6>Sets</h6>
                            <h6>Volume</h6>
                        </div>
                        <div className='grid grid-cols-4 text-sm text-black font-semibold'>
                            <h6>{workout.exercises.length}</h6>
                            <h6>{workout.exercises.reduce((total, ex) => total + ex.sets.length, 0)}</h6>
                            <h6>{workout.exercises.reduce((total, ex) =>
                                total + ex.sets.reduce((sum, set) => sum + set.volume, 0), 0)} lbs</h6>
                        </div>
                    </div>


                    {/* Show exercise and amount of workout done */}
                    {workout.exercises.map(exercise => (
                        <ShowWorkout
                            key={exercise.id}
                            exercise={exercise}
                        />
                    ))}
                </div>
            </div> 
        ))}
        
    </div>
  );
}

export default WorkoutHistory