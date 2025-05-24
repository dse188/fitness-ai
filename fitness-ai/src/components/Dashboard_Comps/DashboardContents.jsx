import React, { useState, useEffect } from 'react';
import { FaBars, FaChartLine } from 'react-icons/fa';
import { useWorkouts } from '../LogWorkout_comps/WorkoutContext';
import WorkoutHistory from '../History_comps/WorkoutHistory';
import ShowProgress from '../Progress_Comps/ShowProgress';

function DashboardContents() {
  const { workouts } = useWorkouts();
  const [view, setView] = useState('overview');
  const [username, setUsername] = useState('User');

  // Fetch username from backend on mount
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      try {
        const res = await fetch('https://fitlog-eice.onrender.com/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setUsername(data.username);
        }
      } catch {
        // fallback or error handling
      }
    };
    fetchUser();
  }, []);

  // Get latest 3 workouts
  const latestWorkouts = [...workouts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  // Calculate stats for the logged-in user
  const totalWorkouts = workouts.length;
  const totalExercises = workouts.reduce(
    (sum, w) => sum + (w.exercises ? w.exercises.length : 0),
    0
  );
  const totalSets = workouts.reduce(
    (sum, w) =>
      sum +
      (w.exercises
        ? w.exercises.reduce(
            (s, ex) => s + (ex.sets ? ex.sets.length : 0),
            0
          )
        : 0),
    0
  );

  return (
    <div>
      <div>
        <h1 className='text-2xl font-bold'>Welcome back <span className='hover:text-sky-500'>{username}</span>,</h1>

        {/* Cards that show total workouts, total exercises, and total sets */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
          <div className='bg-white shadow-sm border rounded-lg p-4 px-6 pb-6'>
            <h4 className='text-sm font-semibold text-gray-500 py-3'>Total Workouts</h4>
            <p className='text-2xl font-bold'>{totalWorkouts}</p>
          </div>
          <div className='bg-white shadow-sm border rounded-lg p-4 px-6 pb-6'>
            <h4 className='text-sm font-semibold text-gray-500 py-3'>Total Exercises</h4>
            <p className='text-2xl font-bold'>{totalExercises}</p>
          </div>
          <div className='bg-white shadow-sm border rounded-lg p-4 px-6 pb-6'>
            <h4 className='text-sm font-semibold text-gray-500 py-3'>Total Sets</h4>
            <p className='text-2xl font-bold'>{totalSets}</p>
          </div>
        </div>

        {/* Buttons for Overview and Progress */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 p-1 mt-4 bg-zinc-100 rounded-md'>
          <button
            className={`flex gap-2 justify-center text-gray-500 hover:bg-white hover:shadow-sm hover:rounded-md hover:text-black ${
              view === 'overview' ? 'bg-white shadow-sm text-black rounded-md' : ''
            }`}
            onClick={() => setView('overview')}
          >
            <FaBars className='my-auto' />
            Overview
          </button>
          <button
            className={`flex gap-2 justify-center text-gray-500 hover:bg-white hover:shadow-sm hover:rounded-md hover:text-black ${
              view === 'progress' ? 'bg-white shadow-sm text-black rounded-md' : ''
            }`}
            onClick={() => setView('progress')}
          >
            <FaChartLine className='my-auto' />
            Progress
          </button>
        </div>

        <div className='border bg-white rounded-md shadow-sm pt-4 px-6 mt-4'>
          {view === 'overview' && (
            <div>
              <h3 className="text-2xl font-semibold ">Latest Workouts</h3>
              <p className="text-sm text-gray-500 mb-4">
                Here are your latest workouts
              </p>
              <WorkoutHistory workouts={latestWorkouts} />
            </div>
          )}

          {view === 'progress' && <ShowProgress />}
        </div>
      </div>
    </div>
  );
}

export default DashboardContents;