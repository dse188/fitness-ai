import React, { useContext, useState, useEffect } from 'react';
import { WorkoutContext } from '../LogWorkout_comps/WorkoutContext';
import { parseISO, format } from 'date-fns';
import { searchExerciseName } from '../../services/api';

function ShowPersonalRecords() {
  const { workouts } = useContext(WorkoutContext);
  const [commonExercises, setCommonExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get common exercises from API and custom workouts
  useEffect(() => {
    const fetchCommonExercises = async () => {
      try {
        // Get popular exercises from API
        const apiExercises = await searchExerciseName('');
        const apiExerciseNames = apiExercises.map(ex => ex.name);
        
        // Get unique exercises from workout history
        const customExercises = [...new Set(
          workouts.flatMap(workout => workout.exercises.map(ex => ex.name))
        )];
        
        // Combine and deduplicate
        const combined = [
          ...new Set([...apiExerciseNames, ...customExercises])
        ].slice(0, 12); // Limit to top 12 exercises
        
        setCommonExercises(combined);
      } catch (error) {
        console.error("Error fetching exercises:", error);
        // Fallback to just custom exercises if API fails
        const customExercises = [...new Set(
          workouts.flatMap(workout => workout.exercises.map(ex => ex.name))
        )];
        setCommonExercises(customExercises);
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
            maxWeight: 0,
            date: workout.date,
            estimated1RM: 0
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
        }
      });
    });

    return prs;
  };

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
    <div>
      <div className='PR-contents border rounded-md bg-white p-6'>
        <h1 className='text-2xl font-semibold'>Personal Records</h1>
        <p className='text-sm text-gray-500'>Your best performances for key exercises</p>

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
                    <div>
                      <h2 className='text-xl font-bold'>
                        {Math.round(pr.estimated1RM)} lbs
                      </h2>
                      <p className='text-xs text-gray-500 text-right'>1 rep max</p>
                    </div>
                  </div>
                  <hr className='my-2' />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowPersonalRecords;