import React from 'react'
import {useState} from "react"

function MidLog() {
    const [searchQuery, setSearchQuery] = useState("");

    const workouts = [
        {value: "bench press", title: "Bench Press"},
        {value: "deadlift", title: "Deadlift"},
        {value: "squats", title: "Squats"},
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    };


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
                <input type="text" 
                className='text-sm bg-slate-100 w-full rounded-md border border-gray-200 pt-2 pb-2 pl-3 pr-3
                focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
                placeholder='e.g. Push Day, Leg Day'></input>
            </div>
            <div className='pb-5 '>
                <h4 className='font-semibold text-sm pb-2'>Duration (minutes)</h4>
                <input type="number" min="0" max="1000" 
                className='text-sm bg-slate-100 w-full rounded-md border border-gray-200 pt-2 pb-2 pl-3 pr-3
                focus:outline-none focus:ring-2 focus: ring-sky-500 focus:ring-offset-2'></input>
            </div>
            <div className=''>
                <h4 className='font-semibold text-sm pb-2'>Notes</h4>
                <textarea
                rows="4" 
                className='text-sm bg-slate-100 w-full rounded-md border border-gray-200 pt-2 pl-3 pr-3
                focus:outline-none focus:ring-2 focus: ring-sky-500 focus:ring-offset-2'
                placeholder='How was your workout? Any PRs?'>
                </textarea>
            </div>
        </div>
        <div className='pt-6'>
            <div className='bg-white shadow-sm rounded-md p-6 border border-gray-200 '>
                <h1 className='text-black text-2xl font-semibold '>Exercises</h1>
                <p className='text-gray-500 text-sm'>Add exercises to your workout</p>
                
                {/*Search bar*/}
                <form onSubmit={handleSearch} className='search-form pt-6'>
                    <input
                        type="text"
                        placeholder="Search for exercises..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='search-input w-full pt-2 pb-2 pl-4 pr-4 text-sm font-semibold bg-slate-100 rounded-md border border-gray-200
                        focus:outline-none hover:bg-blue-500'>
                    </input>
                </form>

                <div className='workout-card '>
                    {workouts.map(
                        (workout) =>
                        workout.title.toLowerCase().startsWith(searchQuery)
                    )}
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default MidLog