import React from 'react'
import { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

function AddSet({ id, setNumber, onRemove, onSetChange, initialWeight, initialReps }) {
    const [weight, setWeight] = useState(initialWeight);
    const [reps, setReps] = useState(initialReps);

    useEffect(() => {
        const weightNum = parseFloat(weight) || 0;
        const repsNum = parseInt(reps) || 0;
        const volume = weightNum * repsNum;
        
        onSetChange({
            id,
            setNumber,
            weight: weightNum,
            reps: repsNum,
            volume
        });
    }, [weight, reps, id, setNumber, onSetChange]);



  return (
    <div className='sets-content grid grid-cols-4 pt-2 gap-2 text-sm'>
        <div className='font-semibold'>{setNumber}</div>
        <input 
          type="number" 
          min={0} 
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className='bg-zinc-100 border rounded-md p-1 pl-3 pr-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2' 
          placeholder='Weight'
        />
        <input 
          type="number" 
          min={0} 
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className='bg-zinc-100 border rounded-md p-1 pl-3 pr-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2' 
          placeholder='Reps'
        />
        <div>
            <button 
              className='p-2 rounded-md hover:bg-blue-500'
              onClick={onRemove}
            >
              <FaTrashAlt/>
            </button>
        </div>
    </div>
  );
}

export default AddSet