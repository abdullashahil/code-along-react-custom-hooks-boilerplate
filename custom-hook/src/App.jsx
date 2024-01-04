import { useState } from 'react'
import UseStorage from './Component/UseStorage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UseStorage/>
        
    </>
  )
}

export default App
