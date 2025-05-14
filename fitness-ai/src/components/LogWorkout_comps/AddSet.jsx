import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

function AddSet({ setNumber, onRemove }) {
  return (
    <div className='sets-content grid grid-cols-4 pt-2 gap-2 text-sm'>
        <div>{setNumber}</div>
        <input type="number" min={0} className='bg-zinc-100 border rounded-md p-1 pl-3 pr-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'></input>
        <input type="number" min={0} className='bg-zinc-100 border rounded-md p-1 pl-3 pr-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'></input>
        <div>
            <button 
            className='p-2 rounded-md hover:bg-blue-500'
            onClick={onRemove}
        >
            <FaTrashAlt/>
        </button>
        </div>
    </div>
  )
}

export default AddSet