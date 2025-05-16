import React, { useState, useCallback } from 'react'
import { FaTrashAlt, FaPlus } from 'react-icons/fa'
import AddSet from './AddSet';

function WorkoutBox({ removeWorkout, exerciseName, muscle }) {

    const [sets, setSets] = useState([{ 
        id: 1, 
        setNumber: 1, 
        weight: 0, 
        reps: 0, 
        volume: 0 
    }]);

    const addSet = () => {
        const newId = sets.length > 0 ? Math.max(...sets.map(set => set.id)) + 1 : 1;
        setSets([...sets, { 
            id: newId,
            setNumber: newId,
            weight: 0, 
            reps: 0, 
            volume: 0 
        }]);
    }

    const removeSet = (id) => {
        if(sets.length > 1) {
            setSets(sets.filter(set => set.id !== id));
        }
    };

    const handleSetChange = useCallback((updatedSet) => {
        setSets(prevSets => 
            prevSets.map(set => 
                set.id === updatedSet.id ? { 
                    ...set, 
                    weight: updatedSet.weight, 
                    reps: updatedSet.reps, 
                    volume: updatedSet.volume 
                } : set
            )
        );
    }, []);
    

  return (
    <div className='pt-4'>
        <div className='Workout-box shadow-sm border rounded-md'>
            <div className='Workout-contents p-4'>
                <div className='top-section flex flex-wrap justify-between'>
                    <h1 className='text-xl font-semibold'>{exerciseName}</h1>
                    {muscle !== 'custom' && (
                        <span className='text-gray-500 text-xs'>{muscle}</span>
                    )}
                    <button className='p-2 rounded-md hover:bg-blue-500' onClick={removeWorkout}><FaTrashAlt/></button> 
                </div>

                <div className='workout-numbers '>
                    <div className='set-weight-reps grid grid-cols-4 pt-4 text-gray-500 text-sm font-semibold'>
                        <h6>Set</h6>
                        <h6>Weight (lbs)</h6>
                        <h6>Reps</h6>
                    </div>

                    {sets.map((set) => (
                        <AddSet
                            key={set.id}
                            id={set.id}
                            setNumber={set.setNumber}
                            onRemove={() => removeSet(set.id)}
                            onSetChange={handleSetChange}
                            initialWeight={set.weight}
                            initialReps={set.reps}
                        />
                    ))}

                    <div className='pt-3'>
                        <button 
                            className='w-full flex justify-center gap-2 p-1 border rounded-md bg-zinc-100 hover:bg-sky-500 hover:text-white'
                            onClick={addSet}
                        >+ Add Set</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default WorkoutBox