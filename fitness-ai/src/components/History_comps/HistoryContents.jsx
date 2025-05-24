import React, { useState } from 'react'
import WorkoutHistory from './WorkoutHistory'

function HistoryContents() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <div className='Main-content pl-14 pr-14 max-h-screen'>
        <h1 className='text-2xl font-bold text-gray-800'>
          Workout History
        </h1>
        <p className='text-gray-700 text-sm font-semibold pt-8'>Filter by exercise</p>

        {/* Controlled search input */}
        <div className='pt-4'>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            placeholder="Type exercise name..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filtered workout history */}
        <div className='pt-4'>
          <WorkoutHistory searchTerm={searchTerm} showNotes={true} />
        </div>
      </div>
    </div>
  )
}

export default HistoryContents