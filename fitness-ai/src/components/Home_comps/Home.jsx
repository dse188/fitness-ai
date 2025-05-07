import React from 'react'
import Dashboard from '../Dashboard'
import TopHome from './TopHome'
import MiddleHome from './MiddleHome'
import BottomHome from './BottomHome'

function Home() {
  return (
    <div> 
      <div>
        <TopHome/>
        <MiddleHome />
        <BottomHome />
      </div>
    </div>
  )
}

export default Home