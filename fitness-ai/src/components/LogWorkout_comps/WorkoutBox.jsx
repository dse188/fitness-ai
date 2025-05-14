import React from 'react'
import { FaTrashAlt, FaPlus } from 'react-icons/fa'

function WorkoutBox() {

    var setNumber = 1;
    var setValue = parseInt(setNumber);

    const NumberOfSets = (setNumber) => {
        setValue++;
        console.log(setValue);
    }
    

  return (
    <div className='pt-4'>
        <div className='Workout-box shadow-sm border rounded-md'>
            <div className='Workout-contents p-4'>
                <div className='top-section flex flex-wrap justify-between'>
                    <h1 className='text-xl font-semibold'>Push Up</h1>
                    <button className='p-2 rounded-md hover:bg-blue-500 '><FaTrashAlt/></button> 
                </div>

                <div className='workout-numbers '>
                    <div className='set-weight-reps grid grid-cols-4 pt-4 text-gray-500 text-sm font-semibold'>
                        <h6>Set</h6>
                        <h6>Weight</h6>
                        <h6>Reps</h6>
                    </div>
                    <div className='sets-content grid grid-cols-4 pt-2 gap-2 text-sm'>
                        {setValue}
                        <input type="number" min={0} className='bg-zinc-100 border rounded-md p-1 pl-3 pr-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'></input>
                        <input type="number" min={0} className='bg-zinc-100 border rounded-md p-1 pl-3 pr-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'></input>
                        <div>
                            <button className='p-2 rounded-md hover:bg-blue-500 '><FaTrashAlt/></button>
                        </div>
                    </div>
                    <div className='pt-3'>
                        <button 
                            className='w-full flex justify-center gap-2 p-1 border rounded-md bg-zinc-100 hover:bg-sky-500 hover:text-white'
                            onClick={NumberOfSets}
                        >+ Add Set</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default WorkoutBox