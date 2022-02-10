import React from 'react'

const MainCard = () => {
  return (
    <div className='info-card'>
      <div className='info-card-top'>
        <img src='images/image-jeremy.png' alt='Jeremy' className='avatar' />
        <div className='avatar-description'>
          <small className='pre-title'>Report for</small>
          <h3 className='avatar-name'>Jeremy Robson</h3>
        </div>
      </div>
      <div className='info-card-bottom'>
        <ul>
          <li>
            <button className='btn-link'>Daily</button>
          </li>
          <li>
            <button className='btn-link active'>Weekly</button>
          </li>
          <li>
            <button className='btn-link'>Monthly</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MainCard
