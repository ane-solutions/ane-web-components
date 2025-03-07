import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// IMPORT PAGES HERE
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <div>
      <h1>COMPONENTS</h1>
      <div>
        {/* IMPORT COMPONENTS HERE */}
      </div>
      
      <h1>PAGES</h1>
      <div>
        {/* IMPORT PAGES HERE */}
      </div>
     </div>
     
    </>
  )
}

export default App
