import React, { useState } from 'react'
import MainCard from './MainCard'
import SubCard from './SubCard'
import cardData from './data.json'

function App() {
  const [timeType, setTimeType] = useState('weekly')

  return (
    <div className='App container'>
      <div className='grid'>
        <MainCard timeType={timeType} setTimeType={setTimeType} />
        {cardData.map((card) => (
          <SubCard
            key={card.title}
            title={card.title}
            icon={`images/icon-${card.title
              .toLowerCase()
              .replaceAll(' ', '-')}.svg`}
            timeType={timeType}
            currentTime={card.timeframes[timeType].current + 'hrs'}
            lastTime={card.timeframes[timeType].previous + 'hrs'}
          />
        ))}
      </div>
    </div>
  )
}

export default App
