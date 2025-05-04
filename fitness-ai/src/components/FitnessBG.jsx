import React from 'react'

import FitnessBackground from '../assets/Fitness-background.jpg'

const FitnessBG = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full -z-10  min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden" 
      style={{ backgroundImage: `url(${FitnessBackground})` }}
    >
    </div>
  )
}

export default FitnessBG