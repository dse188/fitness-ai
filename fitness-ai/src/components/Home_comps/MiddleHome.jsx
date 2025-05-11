import React from 'react'
import Cards from './Cards'
import { FaGamepad, FaCode, FaObjectGroup } from 'react-icons/fa';

const cards = [
    {
        title: "Log Workouts",
        info: "Easily record your exercises, sets, reps, and weights to keep track of your training",
        icon: <FaGamepad className="text-blue-500 text-3xl"/>,
        id: 1
    },
    {
        title: "Track Progress",
        info: "Visualize your strength gains and improvements over time with detailed charts.",
        icon: <FaGamepad className='text-blue-500 text-3xl'/>,
        id: 2
    },
    {
        title: "View History",
        info: "Access your complete workout history and filter by exercise or date.",
        icon: <FaGamepad className='text-blue-500 text-3xl'/>,
        id: 3
    }
];


function MiddleHome() {
  return (
    <div className=''>
        <div className='p-14'>
          <div>
            <h2 
                className='text-3xl font-bold text-black text-center '>
                Everything You Need to Track Your Progress
            </h2>

                {/* Cards insert here*/}
                <div className='flex justify-center w-full px-4 pt-8'>
                  <div className='PrintStuff flex flex-wrap justify-center gap-8 p-4'>
                    {cards.map((card) => (
                    <Cards 
                      key={card.id}
                      icon={card.icon}
                      title={card.title}
                      info={card.info}
                    />
                    ))}
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MiddleHome