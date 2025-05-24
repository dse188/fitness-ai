import React, { useContext, useState } from 'react'
import { FaClock, FaCalendar, FaTrashAlt, FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { WorkoutContext } from '../LogWorkout_comps/WorkoutContext'
import ShowWorkout from './ShowWorkout'

function WorkoutHistory({ searchTerm, showNotes }) {
    const { workouts, removeWorkout } = useContext(WorkoutContext);
    const [expandedWorkouts, setExpandedWorkouts] = useState({});

    const handleRemoveWorkout = (workoutId) => {
        if(window.confirm('Are you sure you want to delete this workout?')) {
            removeWorkout(workoutId);
            setExpandedWorkouts(prev => {
                const newState = {...prev};
                delete newState[workoutId];
                return newState;
            });
        }
    };

    const toggleWorkout = (workoutId) => {
        setExpandedWorkouts(prev => ({
            ...prev,
            [workoutId] : !prev[workoutId]
        }));
    };

    // Filter workouts by exercise name if searchTerm is provided
    const filteredWorkouts = searchTerm
      ? workouts.filter(workout =>
          workout.exercises.some(ex =>
            ex.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      : workouts;

  return (
    <div className='space-y-4 pb-12'>
        {filteredWorkouts.map(workout => (
            <div key={workout.id} className='Workout-history-card border rounded-md pb-8 bg-white'>
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
                    <div className='Date-and-duration flex gap-5 text-sm text-gray-500'>
                        <div className='Date flex gap-1'>
                            <FaCalendar className='text-sm m-auto'/>
                            <h6>{new Date(workout.date).toLocaleDateString()}</h6>
                        </div>
                        <div className='Duration flex gap-1'>
                            <FaClock className='text-sm mt-1'/>
                            <h6>{workout.duration} min</h6>
                        </div>
                    </div>
                    {showNotes && workout.notes && (
                        <div className='pt-2 pb-2'>
                            <span className='text-gray-600 text-sm font-semibold'>Notes: </span>
                            <span className='text-gray-700 text-sm'>{workout.notes}</span>
                        </div>
                    )}
                    <div className='Exercise-numbers pt-6'>
                        <div className='grid grid-cols-4 gap-x-72 text-sm text-gray-500'>
                            <h6>Exercises</h6>
                            <h6>Sets</h6>
                            <h6>Volume</h6>
                        </div>
                        <div className='grid grid-cols-4 gap-x-72 text-sm text-black font-semibold'>
                            <h6>{workout.exercises.length}</h6>
                            <h6>{workout.exercises.reduce((total, ex) => total + ex.sets.length, 0)}</h6>
                            <h6>{workout.exercises.reduce((total, ex) =>
                                total + ex.sets.reduce((sum, set) => sum + set.volume, 0), 0)} lbs
                            </h6>
                            <div className=''>
                                <button 
                                    className='rounded-md hover:bg-blue-500 p-2'
                                    onClick={() => toggleWorkout(workout.id)}
                                >
                                    {expandedWorkouts[workout.id] ? <FaAngleUp/> : <FaAngleDown/>}
                                </button>
                            </div>
                        </div>
                    </div>
                    {expandedWorkouts[workout.id] && workout.exercises.map(exercise => (
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