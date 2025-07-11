import { useState } from 'react'
import './App.css'
import ScrollPageSection from './components/ScrollPageSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div className='mt-30' />
      <h1 className="sticky top-8">BOBAMABOB</h1>
      <h3 className="mt-8">
        A boba milk tea used to be $2.50. Now we pay up to $8. What happened?
      </h3>

      <div className="flex justify-center items-center m-20">
        <img src="/boba machine man.png" className="" style={{ height: '30rem' }} />
      </div>

      <ScrollPageSection className="mt-12">
        <h2 className="text-3xl font-bold mb-4">The Boba Machine</h2>
      </ScrollPageSection>
      <ScrollPageSection className="mt-12">
        <h2 className="text-3xl font-bold mb-4">The Boba Machine</h2>
      </ScrollPageSection>
      <ScrollPageSection className="mt-12">
        <h2 className="text-3xl font-bold mb-4">The Boba Machine</h2>
      </ScrollPageSection>
    </main>
  )
}

export default App
