import React from 'react'
import Dashboard from '../Dashboard'
import TopHome from './TopHome'
import MiddleHome from './MiddleHome'
import BottomHome from './BottomHome'
import FootHome from './FootHome'

function Home() {
  return (
    <div className='min-h-screen flex flex-col'> {/*Sticks contents to the bottom of screen*/}
      <div className='flex-grow'> {/*Allows middle section to expand*/}
        <TopHome/>
        <MiddleHome />
        <BottomHome />
      </div>
      <FootHome />
    </div>
  )
}

export default Home