import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MainContainer from './components/MainContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='container'>
      
          <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/about">About</Link>
            </div>
           <div id="main-section">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/blue" element={<Blue/>} />
          <Route path="/red" element={<Red/>} />
          <Route path="/about" element={<About />} />
        </Routes>
        </div>
        <Footer/>
   
    </div>
    </>
  )
}
import { Form } from 'react-router-dom'

export default App
