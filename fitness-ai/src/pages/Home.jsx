import React from 'react'
import TopHome from '../components/Home_comps/TopHome'
import MiddleHome from '../components/Home_comps/MiddleHome'
import BottomHome from '../components/Home_comps/BottomHome'
import FootHome from '../components/Home_comps/FootHome'

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