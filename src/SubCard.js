import React from 'react'

const SubCard = ({ title, icon, currentTime, lastTime }) => {
  return (
    <div className={`subcard bg-${title.toLowerCase().replaceAll(' ', '-')}`}>
      <div className='top'>
        <img src={icon} alt={title} className='icon' />
      </div>
      <div className='bottom'>
        <div className='title'>
          <p>{title}</p>
          <img src='images/icon-ellipsis.svg' alt='' />
        </div>
        <div className='body'>
          <h3 className='current-hours'>{currentTime}</h3>
          <small className='previous-hours'>Last Week - {lastTime}</small>
        </div>
      </div>
    </div>
  )
}

export default SubCard
