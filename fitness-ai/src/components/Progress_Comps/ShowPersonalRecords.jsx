import React, { useContext, useState, useEffect } from 'react';
import { WorkoutContext } from '../LogWorkout_comps/WorkoutContext';
import { parseISO, format } from 'date-fns';
import { searchExerciseName } from '../../services/api';
import { FaQuestion } from 'react-icons/fa';

function ShowPersonalRecords() {
  const { workouts } = useContext(WorkoutContext);
  const [commonExercises, setCommonExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Get common exercises from API and custom workouts
  useEffect(() => {
    const fetchCommonExercises = async () => {
      try {
        setIsLoading(true);
        setApiError(false);
        
        // Get popular exercises from API
        const apiExercises = await searchExerciseName('popular');
        const apiExerciseNames = apiExercises.map(ex => ex.name);
        
        // Get unique exercises from workout history
        const customExercises = [...new Set(
          workouts.flatMap(workout => workout.exercises.map(ex => ex.name))
        )];
        
        // Combine and deduplicate, prioritizing custom exercises
        const combined = [
          ...new Set([...customExercises, ...apiExerciseNames])
        ].slice(0, 12); // Limit to top 12 exercises
        
        setCommonExercises(combined);
      } catch (error) {
        console.error("Error fetching exercises:", error);
        setApiError(true);
        // Fallback to just custom exercises
        const customExercises = [...new Set(
          workouts.flatMap(workout => workout.exercises.map(ex => ex.name))
        )];
        setCommonExercises(customExercises.slice(0, 12));
      } finally {
        setIsLoading(false);
      }
    };

    fetchCommonExercises();
  }, [workouts]);

  // Calculate 1RM using Epley formula
  const calculateOneRepMax = (weight, reps) => {
    return weight * (1 + (reps / 30));
  };

  // Process workout data to find PRs
  const calculatePRs = () => {
    const prs = {};
    
    workouts.forEach(workout => {
      workout.exercises.forEach(exercise => {
        if (!prs[exercise.name]) {
          prs[exercise.name] = {
            maxWeight: 0,       // Heaviest weight actually lifted
            date: workout.date,  // Date of heaviest lift
            estimated1RM: 0,     // Estimated 1RM using Epley formula
            estimated1RMDate: workout.date // Date of best estimated 1RM
          };
        }

        // Find heaviest set in this workout
        const setsWithWeights = exercise.sets.filter(set => set.weight > 0);
        if (setsWithWeights.length === 0) return;

        const workoutMax = Math.max(...setsWithWeights.map(set => set.weight));
        const workout1RM = Math.max(...setsWithWeights.map(set => 
          calculateOneRepMax(set.weight, set.reps)));

        // Update PR if this workout has higher numbers
        if (workoutMax > prs[exercise.name].maxWeight) {
          prs[exercise.name].maxWeight = workoutMax;
          prs[exercise.name].date = workout.date;
        }
        if (workout1RM > prs[exercise.name].estimated1RM) {
          prs[exercise.name].estimated1RM = workout1RM;
          prs[exercise.name].estimated1RMDate = workout.date;
        }
      });
    });

    return prs;
  };

  const handleQuestionClick = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY - 40
    });
    setShowTooltip(true);
  };

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (showTooltip) {
        setShowTooltip(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showTooltip]);

  const personalRecords = calculatePRs();

  if (isLoading) {
    return (
      <div className='PR-contents border rounded-md bg-white p-6'>
        <h1 className='text-2xl font-semibold'>Personal Records</h1>
        <p className='text-sm text-gray-500'>Loading your best performances...</p>
      </div>
    );
  }

  return (
    <div className='max-w-7xl'>
      <div className='PR-contents border rounded-md bg-white p-6'>
        <h1 className='text-2xl font-semibold'>Personal Records</h1>
        <p className='text-sm text-gray-500'>Your best performances for key exercises</p>

        {apiError && (
          <p className="text-sm text-yellow-600 mb-2">
            Note: Using limited exercise list as API is temporarily unavailable
          </p>
        )}

        {workouts.length === 0 ? (
          <div className="pt-4 text-gray-500">
            No workout data available. Log some workouts to see your personal records.
          </div>
        ) : commonExercises.length === 0 ? (
          <div className="pt-4 text-gray-500">
            No exercises found in your workout history.
          </div>
        ) : (
          <div className='Exercises'>
            {commonExercises.map(exercise => {
              const pr = personalRecords[exercise];
              if (!pr || pr.estimated1RM === 0) return null;

              return (
                <div key={exercise}>
                  <div className='pt-6 pb-2 flex justify-between'>
                    <div>
                      <h3 className='font-semibold'>{exercise}</h3>
                      <p className='text-sm text-gray-500'>
                        {format(parseISO(pr.date), 'MMM d, yyyy')}
                      </p>
                    </div>
                    <div className='text-right grid grid-cols-2 gap-5'>
                      <div className=''>
                        <h2 className='text-xl font-bold'>
                          {Math.round(pr.maxWeight)} lbs
                        </h2>
                        <p className='text-xs text-gray-500'>heaviest lifted</p>
                      </div>
                      
                      <div className='Expected-one-rep-max flex justify-end items-center gap-1'>
                        <div>
                          <h2 className='text-xl font-bold'>
                            {Math.round(pr.estimated1RM)} lbs
                          </h2>
                          <p className='text-xs text-gray-500'>estimated 1RM</p>
                        </div>
                        <button 
                          className='border rounded-full p-1 bg-zinc-100 hover:bg-zinc-300'
                          onClick={handleQuestionClick}
                        >
                          <FaQuestion className='text-xs text-gray-500'/>
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr className='my-2' />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {showTooltip && (
        <div 
          className='fixed bg-white border rounded-md shadow-lg p-3 text-sm max-w-xs z-[100] transition-opacity duration-200'
          style={{
            left: `${Math.min(tooltipPosition.x, window.innerWidth - 300)}px`,
            top: `${Math.max(tooltipPosition.y, 20)}px`,
            opacity: showTooltip ? 1 : 0
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h4 className='font-semibold mb-1'>1RM Estimation Formula</h4>
          <p className='mb-1'>We use the Epley formula to estimate your one-rep max:</p>
          <p className='font-mono bg-gray-100 p-1 rounded mb-1'>1RM = weight × (1 + reps/30)</p>
          <p>This gives a good estimate based on your performance with higher reps.</p>
          <button 
            className='mt-2 text-blue-500 text-xs'
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default ShowPersonalRecords;