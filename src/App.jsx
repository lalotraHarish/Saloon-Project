import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import Newdesign from './Pages/Newdesign'
import Pricing from './Pages/Pricing'
import About from './Pages/About'
import Enquery from './Pages/Enquery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Newdesign />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/enquery" element={<Enquery />} />
      {/* <Route path="/" element={<Layout />} /> */}
      {/* <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<RecentActivity />} />
        <Route path="project/:id" element={<Project />} />
      </Route> */}
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
