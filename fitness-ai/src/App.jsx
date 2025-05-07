import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FitnessLevel from './components/Button_jsx/FitnessLevel'

import FitnessBG from './components/FitnessBG'
import MainContent from './components/MainContent'
import Home from './components/Home_comps/Home'
import Dashboard from './components/Dashboard'
import Logworkout from './components/Logworkout'
import History from './components/History'
import Progress from './components/Progress'
import Printer from './components/Practice/Printer'

function App() {
  const [theme, setTheme] = useState('ai');

  return (
    <main>
      <Home />
    </main>
  );
}

export default App;

/*
<main className='min-h-screen flex flex-col bg-gradient-to-r 
from-slate-800 to-slate-950 text-white text-sm sm:text-base'> 
*/