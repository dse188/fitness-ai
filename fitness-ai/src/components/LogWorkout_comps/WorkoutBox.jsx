import React, { useState } from 'react'
import { FaTrashAlt, FaPlus } from 'react-icons/fa'
import AddSet from './AddSet';

function WorkoutBox({removeWorkout}) {

    const [sets, setSets] = useState([{ id: 1}]); // Start with one set

    const addSet = () => {
        const newId = sets.length > 0 ? Math.max(...sets.map(set => set.id)) + 1 : 1;
        setSets([...sets, { id: newId }]);
    }

    const removeSet = (id) => {
        if(sets.length > 1) { // Prevent removing the first set
            setSets(sets.filter(set => set.id !== id));
        }
    };
    

  return (
    <div className='pt-4'>
        <div className='Workout-box shadow-sm border rounded-md'>
            <div className='Workout-contents p-4'>
                <div className='top-section flex flex-wrap justify-between'>
                    <h1 className='text-xl font-semibold'>Push Up</h1>
                    <button className='p-2 rounded-md hover:bg-blue-500' onClick={removeWorkout}><FaTrashAlt/></button> 
                </div>

                <div className='workout-numbers '>
                    <div className='set-weight-reps grid grid-cols-4 pt-4 text-gray-500 text-sm font-semibold'>
                        <h6>Set</h6>
                        <h6>Weight</h6>
                        <h6>Reps</h6>
                    </div>

                    {sets.map((set, index) => (
                        <AddSet
                            key={set.id}
                            setNumber={index + 1}
                            onRemove={() => removeSet(set.id)}
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