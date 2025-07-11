import { useState } from 'react'
import './App.css'
import ScrollPageSection from './components/ScrollPageSection'
import VerticalSideBanner from './components/VerticalSideBanner'

function App() {

  return (
    <main>
      <VerticalSideBanner side="left" />
      <VerticalSideBanner side="right" />
      
      <section className='h-screen'>
        <div className="flex justify-center items-center m-10">
          <img src="/boba machine man.png" style={{ height: '20rem' }} />
        </div>
        <div className='mt-20' />


        <h1 className="sticky top-8">BOBAMABOB</h1>
        <ScrollPageSection>
          <h3 className="mt-8">
            A boba milk tea used to be $2.50. Now we pay up to $8. What happened?
          </h3>
        </ScrollPageSection>
        <div className="flex flex-col items-center my-32">
          <span className="text-3xl font-bold animate-bounce mb-4">↓</span>
          <p className="text-xl text-gray-600">scroll down, it's one of those kinds of websites</p>
        </div>
      </section>

      <h3 className="mt-30">
        Fortunately, us two dudes are working on the bobamabob. A cheap robot that makes cheap boba milk tea.
      </h3>
      <h3>
        It's going to be as <b style={{ color: '#8FF0F0' }}>small</b> as a vending machine, and <b style={{ color: '#8FF0F0' }}>cheap</b> enough that it can be placed everywhere.
      </h3>
      <footer className='text-grey-400 mt-80'>invest in the bobamabob, and your children will thank you</footer>
    </main>
  )
}

export default App
