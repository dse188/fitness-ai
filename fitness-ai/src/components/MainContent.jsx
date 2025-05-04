import React from 'react'
import FitnessLevel from './Button_jsx/FitnessLevel'

const MainContent = ({ children }) => {
  return (
    <div className="content">
        <div className="flex items-center justify-center">
          <div className="w-[110rem] h-[60rem] grid grid-rows-[6rem_54rem] grid-cols-[28rem_1fr] bg-white bg-opacity-80
          overflow-hidden mx-auto mt-10 justify-center rounded shadow-[0_2rem_4rem_rgba(0,0,0,0.6)]"
          >
            {children}
          </div>
        </div>
    </div>
  );
};

export default MainContent

/*
<div className="content">
        <div className="flex items-center justify-center">
          <div className="w-[110rem] h-[60rem] grid grid-rows-[6rem_54rem] grid-cols-[28rem_1fr] 
                 rounded shadow-[0_2rem_4rem_rgba(0,0,0,0.6)] overflow-hidden mx-auto mt-10 
                 bg-white bg-opacity-80 justify-center"
          >
            {children}
          </div>
        </div>
    </div>
*/