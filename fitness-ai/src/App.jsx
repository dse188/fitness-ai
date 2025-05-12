import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import FitnessBG from './components/FitnessBG'
import MainContent from './components/MainContent'
import Home from './pages/Home'
import Logworkout from './components/Logworkout'
import History from './components/History'
import Progress from './components/Progress'
import Printer from './components/Practice/Printer'
import LogWorkout from './pages/LogWorkout'
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/LogWorkout" element={<LogWorkout />}/>
      </Routes>
    </main>
  );
}

export default App;

/*
<main className='min-h-screen flex flex-col bg-gradient-to-r 
from-slate-800 to-slate-950 text-white text-sm sm:text-base'> 
*/