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
        <ScrollPageSection className='flex flex-col items-center justify-center'>
          <h3 className="mt-8 max-w-[80%]">
            A boba milk tea used to be $2.50. Now we pay up to $8. What happened?
          </h3>
        </ScrollPageSection>
        <ScrollPageSection>
          <div className="flex flex-col items-center my-32">
            <span className="text-3xl font-bold animate-bounce mb-4">↓</span>
            <p className="text-xl text-gray-600">scroll down, it's one of those kinds of websites</p>
          </div>
        </ScrollPageSection>
      </section>

      <ScrollPageSection className="flex flex-col items-center justify-center">
        <h3 className="max-w-[80%] text-center">
          It's going to be as <b>small</b> as a vending machine, and <b>cheap</b> enough that it can be placed everywhere.
        </h3>
      </ScrollPageSection>

      <ScrollPageSection className="flex flex-col items-center justify-center my-16">
        <img src="/all-markets.png" style={{ width: '75%' }} />
        </ScrollPageSection>  

      <ScrollPageSection className="flex flex-col items-center justify-center">
        <h3 className="max-w-[80%] text-center">
          Originally from Taiwan, boba milk tea has grown to become popular in US cities, especially
          with students and young adults. The market is at a healthy <b>7.22% CAGR</b> in the US.<sup>*</sup>
        </h3>
      </ScrollPageSection>

      <ScrollPageSection className="flex flex-col items-center justify-center">
        <img src="/student-and-bobamabob.png" style={{ width: '75%' }} />
      </ScrollPageSection>


      <footer className='text-grey-400 mt-80'>
        * according to Fortune Business Insights report FBI101564</footer>
    </main>
  )
}

export default App
