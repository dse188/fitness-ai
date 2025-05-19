import React from 'react'

function ShowPersonalRecords() {
  return (
    <div>
        <div className='PR-contents     border rounded-md bg-white p-6'>
            <h1 className='text-2xl font-semibold'>Personal Records</h1>
            <p className='text-sm text-gray-500'>Your best performances for key exercises</p>

            <div className='Exercises   '>
                <div>
                    <div className='pt-6 pb-2 flex justify-between'>
                        <div>
                            <h3 className='font-semibold'>Bench Press</h3>
                            <p className='text-sm text-gray-500'>May 1, 2025</p>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>185 lbs</h2>
                            <p className='text-xs text-gray-500 text-right'>1 rep max</p>
                        </div>
                    </div>
                    <hr/>
                </div>

                <div>
                    <div className='pt-4 pb-2 flex justify-between'>
                        <div>
                            <h3 className='font-semibold'>Squat</h3>
                            <p className='text-sm text-gray-500'>May 1, 2025</p>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>225 lbs</h2>
                            <p className='text-xs text-gray-500 text-right'>1 rep max</p>
                        </div>
                    </div>
                    <hr/>
                </div>

                <div>
                    <div className='pt-4 pb-2 flex justify-between'>
                        <div>
                            <h3 className='font-semibold'>Deadlift</h3>
                            <p className='text-sm text-gray-500'>May 1, 2025</p>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>315 lbs</h2>
                            <p className='text-xs text-gray-500 text-right'>1 rep max</p>
                        </div>
                    </div>
                    <hr/>
                </div>

                <div>
                    <div className='pt-4 pb-2 flex justify-between'>
                        <div>
                            <h3 className='font-semibold'>Shoulder Press</h3>
                            <p className='text-sm text-gray-500'>May 1, 2025</p>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>115 lbs</h2>
                            <p className='text-xs text-gray-500 text-right'>1 rep max</p>
                        </div>
                    </div>
                    <hr/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ShowPersonalRecords