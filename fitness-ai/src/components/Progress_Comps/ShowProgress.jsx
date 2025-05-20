import React, { useState, useEffect, useContext } from 'react'
import DropDown from './DropDown'
import { LineChart } from '@mui/x-charts/LineChart';
import { parseISO, format } from 'date-fns';
import { WorkoutContext } from '../LogWorkout_comps/WorkoutContext';



function ShowProgress() {

    const { workouts } = useContext(WorkoutContext);

    const exerciseOptions = [...new Set(
        workouts.flatMap(workout => 
            workout.exercises.map(ex => ex.name)
        )
    )];

    const metricOptions = [
        'Max Weight',
        'Total Volume',
    ];

    const [selectedExercise, setSelectedExercise] = useState(null);
    const [selectedMetric, setSelectedMetric] = useState(null);
    const [chartData, setChartData] = useState({ dates: [], values: [] });

    useEffect(() => {
        if (selectedExercise && selectedMetric && workouts.length > 0) {
            const exerciseData = workouts
                .filter(workout => 
                    workout.exercises.some(ex => ex.name === selectedExercise))
                .map(workout => {
                    const exercise = workout.exercises.find(ex => ex.name === selectedExercise);
                    let value;
                    
                    switch(selectedMetric) {
                        case 'Max Weight':
                            value = exercise.sets.reduce((max, set) => 
                                Math.max(max, set.weight), 0);
                            break;
                            
                        case 'Total Volume':
                            value = exercise.sets.reduce((total, set) => 
                                total + (set.weight * set.reps), 0);
                            break;
                            
                        default:
                            value = 0;
                    }
                    
                    return {
                        date: workout.date,
                        value: value
                    };
                });
            
            if (exerciseData.length > 0) {
                exerciseData.sort((a, b) => new Date(a.date) - new Date(b.date));
                
                setChartData({
                    dates: exerciseData.map(item => format(parseISO(item.date), 'MMM d, yyyy')),
                    values: exerciseData.map(item => item.value)
                });
            } else {
                setChartData({ dates: [], values: [] });
            }
        }
    }, [selectedExercise, selectedMetric, workouts]);

    const handleExerciseSelect = (exercise) => {
        setSelectedExercise(exercise);
    };

    const handleMetricSelect = (metric) => {
        setSelectedMetric(metric);
    };


  return (
    <div className="space-y-6">
            <div>
                <h1 className='text-2xl font-semibold'>Strength Progress</h1>
                <p className='text-sm text-gray-500'>Track your strength gains over time</p>
            </div>

            <div className="relative min-h-[120px]">
                <div className='grid grid-cols-2 pt-2 text-sm gap-4'>
                    <h6>Select Exercise</h6>
                    <h6>Select Metric</h6>
                </div>
                <div className='grid grid-cols-2 pt-1 text-sm gap-4'>
                    <div className="relative z-10">
                        <DropDown
                            options={exerciseOptions}
                            onSelect={handleExerciseSelect}
                            placeholder="Select Exercise"
                        />
                    </div>
                    <div className="relative z-10">
                        <DropDown
                            options={metricOptions}
                            onSelect={handleMetricSelect}
                            placeholder="Select Metric"
                        />
                    </div>
                </div>
            </div>

            <div className='pt-4'>
                {chartData.dates.length > 0 ? (
                    <LineChart
                        xAxis={[{ 
                            data: chartData.dates,
                            scaleType: 'point',
                            label: 'Workout Date'
                        }]}
                        yAxis={[{
                            label: selectedMetric === 'Max Weight' ? 'Weight (lbs)' : 'Volume (lbs)'
                        }]}
                        series={[{
                            data: chartData.values,
                            label: `${selectedExercise} ${selectedMetric}`,
                            showMark: true,
                            color: '#3b82f6'
                        }]}
                        height={400}
                    />
                ) : (
                    <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
                        <p className="text-gray-500">
                            {selectedExercise && selectedMetric 
                                ? "No data available for this combination"
                                : "Select an exercise and metric to view progress"}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ShowProgress;