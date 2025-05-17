import React from 'react'
import {useState, useContext, useCallback} from "react"
import Select from "react-select"
import SearchBarExercise from './SearchBarExercise';
import WorkoutBox from './WorkoutBox';
import { WorkoutContext } from './WorkoutContext';

function MidLog() {
    const [searchQuery, setSearchQuery] = useState("");
    const [workout, setWorkout] = useState([]);
    const [workoutTitle, setWorkoutTitle] = useState("");
    const [workoutDuration, setWorkoutDuration] = useState(0);
    const [workoutNotes, setWorkoutNotes] = useState("");
    const [setsData, setSetsData] = useState({}); // To track sets data for each exercise


    const { saveWorkout } = useContext(WorkoutContext);



    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    };

    const handleExerciseSelect = (exercise) => {
        const newId = workout.length > 0 ? Math.max(...workout.map(w => w.id)) + 1 : 1;
        setWorkout([...workout, {
            id: newId,
            name: exercise.name,
            muscle: exercise.muscle,
            type: exercise.type || 'custom',
            sets: [] // Initialize empty sets array
        }]);
    }


    const removeWorkout = (id) => {
        setWorkout(workout.filter(item => item.id !== id));
        const newSetsData = {...setsData};
        delete newSetsData[id];
        setSetsData(newSetsData);
    };

    const handleSetChange = useCallback((exerciseId, updatedSets) => {
        setSetsData(prev => {
            // Only update if the sets actually changed
            if (JSON.stringify(prev[exerciseId]) === JSON.stringify(updatedSets)) {
                return prev;
            }
            return {
                ...prev,
                [exerciseId]: updatedSets
            };
        });
    }, []);

    const handleSaveWorkout = () => {
        if (!workoutTitle) {
            alert("Please enter a workout title");
            return;
        }

        if (workout.length === 0) {
            alert("Please add at least one exercise");
            return;
        }

        const newWorkout = {
            id: Date.now(),
            title: workoutTitle,
            date: new Date().toISOString(),
            duration: workoutDuration,
            notes: workoutNotes,
            exercises: workout.map(exercise => ({
                id: exercise.id,
                name: exercise.name,
                muscle: exercise.muscle,
                type: exercise.type,
                sets: setsData[exercise.id] || []
            }))
        };

        saveWorkout(newWorkout);


        // Reset the form
        setWorkout([]);
        setWorkoutTitle("");
        setWorkoutDuration(0);
        setWorkoutNotes("");
        setSetsData({});

        alert("Workout saved successfully!");
    };

    const handleRemoveWorkout = () => {
        
    }


  return (
    <div className='pl-16 pr-16 pt-10'>
        <h1 className='text-black text-2xl font-bold pb-6'>Log a Workout</h1>
        <div className='bg-white shadow-sm rounded-md p-6 border border-gray-200'>
            <div className='pb-5'>
                <h1 className='text-black text-2xl font-semibold '>Workout Details</h1>
                <p className='text-gray-500 text-sm'>Enter the details of your workout session</p>
            </div>
            <div className='pb-5'>
                <h4 className='font-semibold text-sm pb-2'>Workout Name</h4>
                <input 
                    type="text"
                    value={workoutTitle}
                    onChange={(e) => setWorkoutTitle(e.target.value)}
                    className='text-sm bg-slate-100 w-full rounded-md border border-gray-200 pt-2 pb-2 pl-3 pr-3
                    focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 placeholder:text-gray-500'
                    placeholder='e.g. Push Day, Leg Day'
                />
            </div>
            <div className='pb-5 '>
                <h4 className='font-semibold text-sm pb-2'>Duration (minutes)</h4>
                <input 
                    type="number" 
                    min="0" 
                    max="1000" 
                    value={workoutDuration || ''}
                    onChange={(e) => setWorkoutDuration(parseInt(e.target.value) || 0)}  // Fixed this line
                    className='text-sm bg-slate-100 w-full rounded-md border border-gray-200 pt-2 pb-2 pl-3 pr-3
                    focus:outline-none focus:ring-2 focus: ring-sky-500 focus:ring-offset-2'
                />
            </div>
            <div className=''>
                <h4 className='font-semibold text-sm pb-2'>Notes</h4>
                <textarea
                    rows="4"
                    value={workoutNotes}
                    onChange={(e) => setWorkoutNotes(e.target.value)}
                    className='text-sm bg-slate-100 w-full rounded-md border border-gray-200 pt-2 pl-3 pr-3
                    focus:outline-none focus:ring-2 focus: ring-sky-500 focus:ring-offset-2 placeholder:text-gray-500'
                    placeholder='How was your workout? Any PRs?'
                />
            </div>
        </div>
        <div className='Exercises-box pt-6'>
            <div className='bg-white shadow-sm rounded-md p-6 border border-gray-200 '>
                <h1 className='text-black text-2xl font-semibold '>Exercises</h1>
                <p className='text-gray-500 text-sm pb-5'>Add exercises to your workout</p>
                
                {/*Search bar*/}
                <SearchBarExercise onExerciseSelect={handleExerciseSelect}/>

                {workout.length === 0 && (
                    <p className='text-gray-500 text-center pt-8 pb-20'>
                        No exercise added yet. Use the search above to add exercises.
                    </p>
                )}
                

                
                {/* Workout name, amount of sets, weight, reps */}
                {workout.map((workoutItem) => (
                    <WorkoutBox
                        key={workoutItem.id}
                        exerciseId={workoutItem.id}
                        exerciseName={workoutItem.name}
                        muscle={workoutItem.muscle}
                        removeWorkout={() => removeWorkout(workoutItem.id)}
                        onSetChange={(sets) => handleSetChange(workoutItem.id, sets)}
                    />
                ))}


                {/* 
                - On Click add workout card with: 3 columns, each column has a category Set, Weight, Reps
                - replace the text "No exercise added yet. Use the search above to add exercises"
                */}

                    <button 
                        className='w-full border p-2 rounded-md bg-sky-400 text-white text-sm font-semibold hover:bg-blue-600'
                        onClick={handleSaveWorkout} 
                    >
                        Save Workout
                    </button>


            </div>
        </div>
    </div>
  )
}

export default MidLog