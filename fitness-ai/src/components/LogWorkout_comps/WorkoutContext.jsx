import React, { createContext, useContext, useEffect, useState } from 'react';

export const WorkoutContext = createContext(); // <-- add export here

export function useWorkouts() {
  return useContext(WorkoutContext);
}

export function WorkoutProvider({ children }) {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWorkouts = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const res = await fetch('http://localhost:5000/api/workouts', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setWorkouts(data);
      }
    } catch {
      setWorkouts([]);
    }
    setLoading(false);
  };

  const saveWorkout = async (workout) => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch('http://localhost:5000/api/workouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(workout)
      });
      if (res.ok) {
        await fetchWorkouts();
        return true;
      }
    } catch {
      // handle error
    }
    return false;
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <WorkoutContext.Provider value={{ workouts, saveWorkout, loading, fetchWorkouts }}>
      {children}
    </WorkoutContext.Provider>
  );
}