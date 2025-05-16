import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import FitnessBG from './components/FitnessBG'
import MainContent from './components/MainContent'
import Home from './pages/Home'
import History from './pages/History'
import Printer from './components/Practice/Printer'
import LogWorkout from './pages/LogWorkout'
import {Routes, Route} from "react-router-dom"
import { WorkoutProvider } from './components/LogWorkout_comps/WorkoutContext'

function App() {

  return (
    <WorkoutProvider>
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/LogWorkout" element={<LogWorkout />}/>
          <Route path="/History" element={<History />}/>
        </Routes>
      </main>
    </WorkoutProvider>
  );
}

export default App;

/*
<main className='min-h-screen flex flex-col bg-gradient-to-r 
from-slate-800 to-slate-950 text-white text-sm sm:text-base'> 
*/