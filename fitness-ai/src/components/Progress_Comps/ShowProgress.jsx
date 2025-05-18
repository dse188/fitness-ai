import React from 'react'
import DropDown from './DropDown'

function ShowProgress() {

    const exerciseOptions = [
        'Bench Press',
        'Deadlift',
        'Squats',
        'Overhead Press',
        'Pull Ups'
        // Eventually, only show exercise option that the user has previously done
    ];

    const metricOptions = [
        'One Rep Max',
        'Total Volume',
        'Total Reps'
    ];

    const handleExerciseSelect = (selectedExercise) => {
        console.log('You have selected ', selectedExercise);
        // Logic
    };

    const handleMetricSelect = (selectedMetric) => {
        console.log('You have selected', selectedMetric);
        // Logic
    };

  return (
    <div>
        <div>
            <h1 className='text-2xl font-semibold'>Strength Progress</h1>
            <p className='text-sm text-gray-500'>Track your strength gains over time for different exercises</p>

            <div className='grid grid-cols-2 pt-6 text-sm gap-4'>
                <h6>Select Exercise</h6>
                <h6>Select Metric</h6>
            </div>
            <div className='Dropdowns    grid grid-cols-2 pt-1 text-sm gap-4'>
                <div>
                    <DropDown
                        options={exerciseOptions}
                        onSelect={handleExerciseSelect}
                        className='Exercise-dropdown       '
                    />
                </div>
                
                <div>
                    <DropDown
                        options={metricOptions}
                        onSelect={handleMetricSelect}
                        className='Metric-dropdown      '
                    />
                </div>
            </div>

            <div className='Charts'>
                
            </div>
        </div>
    </div>
  )
}

export default ShowProgress