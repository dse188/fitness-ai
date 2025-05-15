import React from 'react'
import Navbar from '../components/LogWorkout_comps/Navbar'
import HistoryContents from '../components/History_comps/HistoryContents'

function History() {
  return (
    <div className='min-h-screen flex flex-col bg-zinc-50'>
        <Navbar />
        <HistoryContents />
    </div>
  )
}

export default History