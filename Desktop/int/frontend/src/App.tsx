// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"

function App() {
  return (
    // <div className="geometric-pattern min-h-screen flex items-center justify-center">
    <div>
      {/* <h1 className="text-white text-4xl font-bold"> */}
        {/* Hello */}
      {/* </h1> */}

        <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    </div>
  )
}

export default App