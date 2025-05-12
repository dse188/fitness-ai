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

function App() {

  return (
    <main>
      <LogWorkout />
    </main>
  );
}

export default App;

/*
<main className='min-h-screen flex flex-col bg-gradient-to-r 
from-slate-800 to-slate-950 text-white text-sm sm:text-base'> 
*/