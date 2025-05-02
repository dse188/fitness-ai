import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FitnessLevel from './components/Button_jsx/FitnessLevel'
import Background from './components/Background'


import FitnessBG from './components/FitnessBG'

function App() {
  const [theme, setTheme] = useState('ai');

  return (
    <div>
      <FitnessBG />
      <FitnessLevel />
    </div>
  );
}

export default App;