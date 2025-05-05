import React from 'react'
import Dashboard from '../Dashboard'
import TopHome from './TopHome'
import MiddleHome from './MiddleHome'

function Home() {
  return (
    <div> 
      <div>
        <TopHome/>
        <MiddleHome/>
      </div>
    </div>
  )
}

export default Home