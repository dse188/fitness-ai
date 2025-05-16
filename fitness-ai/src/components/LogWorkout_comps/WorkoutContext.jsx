import React, { createContext, useState, useEffect } from 'react'

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        // Load saved workouts from localStorage or API
        const saved = localStorage.getItem('workouts');
        if(saved) setWorkouts(JSON.parse(saved));
    }, []);

    const saveWorkout = (workout) => {
        const updated = [...workouts, workout];
        setWorkouts(updated);
        localStorage.setItem('workouts', JSON.stringify(updated));
    };

    return (
        <WorkoutContext.Provider value={{ workouts, saveWorkout }}>
            {children}
        </WorkoutContext.Provider>
    );
};