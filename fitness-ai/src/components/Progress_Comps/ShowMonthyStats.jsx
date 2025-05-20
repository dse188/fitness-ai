import React, { useContext } from 'react';
import { WorkoutContext } from '../LogWorkout_comps/WorkoutContext';
import { format, startOfMonth, endOfMonth, isWithinInterval, parseISO } from 'date-fns';

function ShowMonthlyStats() {
  const { workouts } = useContext(WorkoutContext);

  // Get current month's workouts
  const getCurrentMonthWorkouts = () => {
    const now = new Date();
    const monthStart = startOfMonth(now);
    const monthEnd = endOfMonth(now);
    
    return workouts.filter(workout => 
      isWithinInterval(parseISO(workout.date), { start: monthStart, end: monthEnd })
    );
  };

  // Calculate monthly stats
  const calculateMonthlyStats = () => {
    const monthWorkouts = getCurrentMonthWorkouts();
    
    return {
      workoutCount: monthWorkouts.length,
      totalTime: monthWorkouts.reduce((sum, workout) => sum + (workout.duration || 0), 0),
      totalVolume: monthWorkouts.reduce((sum, workout) => {
        return sum + workout.exercises.reduce((exerciseSum, exercise) => {
          return exerciseSum + exercise.sets.reduce((setSum, set) => {
            return setSum + (set.weight * set.reps);
          }, 0);
        }, 0);
      }, 0),
      exerciseCount: monthWorkouts.reduce((sum, workout) => sum + workout.exercises.length, 0)
    };
  };

  const { workoutCount, totalTime, totalVolume, exerciseCount } = calculateMonthlyStats();

  // Format time (minutes to hours)
  const formatTime = (minutes) => {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  // Format large numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div>
      <div className='MS-contents border rounded-md bg-white p-6'>
        <h1 className='text-2xl font-semibold'>Monthly Stats</h1>
        <p className='text-sm text-gray-500'>Your fitness progress this month</p>

        {workouts.length === 0 ? (
          <div className="pt-4 text-gray-500">
            No workout data available for this month.
          </div>
        ) : (
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-zinc-50 p-3 mt-4 rounded-md shadow-sm'>
              <h6 className='text-sm text-gray-500'>Workouts</h6>
              <h2 className='text-xl font-bold'>{workoutCount}</h2>
            </div>

            <div className='bg-zinc-50 p-3 mt-4 rounded-md shadow-sm'>
              <h6 className='text-sm text-gray-500'>Total Time</h6>
              <h2 className='text-xl font-bold'>{formatTime(totalTime)}</h2>
            </div> 

            <div className='bg-zinc-50 p-3 mt-4 rounded-md shadow-sm'>
              <h6 className='text-sm text-gray-500'>Total Volume</h6>
              <h2 className='text-xl font-bold'>{formatNumber(totalVolume)} lbs</h2>
            </div> 

            <div className='bg-zinc-50 p-3 mt-4 rounded-md shadow-sm'>
              <h6 className='text-sm text-gray-500'>Exercises</h6>
              <h2 className='text-xl font-bold'>{exerciseCount}</h2>
            </div>    
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowMonthlyStats;