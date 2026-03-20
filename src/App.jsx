import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Greeting from './pages/Greeting'
import './App.css'

function AnimatedRoutes({ name, setName }) {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home name={name} setName={setName} />} />
        <Route path="*" element={<Greeting name={name} setName={setName} />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [name, setName] = useState('')

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-0">
      <BrowserRouter>
        <AnimatedRoutes name={name} setName={setName} />
      </BrowserRouter>
    </div>
  )
}

export default App
