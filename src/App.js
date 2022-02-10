import MainCard from './MainCard'
import SubCard from './SubCard'

function App() {
  return (
    <div className='App container'>
      <div className='grid'>
        <MainCard />
        <SubCard
          title='Work'
          icon='images/icon-work.svg'
          currentTime='7hrs'
          lastTime='32hrs'
        />
        <SubCard
          title='Play'
          icon='images/icon-play.svg'
          currentTime='7hrs'
          lastTime='32hrs'
        />
        <SubCard
          title='Study'
          icon='images/icon-study.svg'
          currentTime='7hrs'
          lastTime='32hrs'
        />
        <SubCard
          title='Exercise'
          icon='images/icon-exercise.svg'
          currentTime='7hrs'
          lastTime='32hrs'
        />
        <SubCard
          title='Social'
          icon='images/icon-social.svg'
          currentTime='7hrs'
          lastTime='32hrs'
        />
        <SubCard
          title='Self Care'
          icon='images/icon-self-care.svg'
          currentTime='7hrs'
          lastTime='32hrs'
        />
      </div>
    </div>
  )
}

export default App
