import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ProductTab from './ProductTab'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <img src={reactLogo} className="logo react" alt="React logo" />
    <ProductTab/>
    {/* <h1>Gourav</h1> */}
    </>
  )
}

export default App



// fun (a+b)


// sum()

// npm create vite@latest
// npm run dev
