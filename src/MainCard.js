import React from 'react'

const MainCard = ({ timeType, setTimeType }) => {
  const timeTypes = ['Daily', 'Weekly', 'Monthly']

  const handleTimeTypeChange = (timeType) => {
    setTimeType((prev) => timeType.toLowerCase())
  }

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
          {timeTypes.map((type) => (
            <li key={type}>
              <button
                className={`btn-link ${
                  timeType === type.toLowerCase() ? 'active' : ''
                }`}
                onClick={(e) => handleTimeTypeChange(e.target.outerText)}
              >
                {type}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MainCard
