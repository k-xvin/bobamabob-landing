import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>BOBAMABOB</h1>
      
      <img src="/boba machine man.png" style={{ height: '30rem' }} />

      <h3 className="mt-8">
        A boba milk tea used to be $2.50. Now we pay up to $8. What happened?
      </h3>
    </>
  )
}

export default App
