import React from 'react'

function HomeCards({cards}) {
  return (
    <div className='card-container'>
        <div className='card-icon'>
            <img src={cards.url} alt={cards.title} />
        </div>

        <div className='card-info'>
            <h1>{cards.info}</h1>
        </div>
    </div>
  )
}

export default HomeCards