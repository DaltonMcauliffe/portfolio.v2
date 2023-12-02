import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
   <div className='Container'>
    <ul>
      <li className='Home-Page'>
        <a href='Home'>Home</a>
      </li>
      <li>
        <a href='Contact'>Conatact</a>
      </li>
      <li>
        <a href='Projects'>Projects</a>
      </li>
    </ul>
   </div>
   <Header />
   <Routes>
    <Route path='Home' element={<Home />}>Dalton McAuliffe</Route>
    <Route path='Contact' element={<Contact />}>Contact</Route>
    <Route path='Projects' element={<Projects />}>About Me</Route>
    <Route path='*' element={<NotFound />}>Not Found</Route>
   </Routes>
   <Footer />
    </>
  )
}

export default App
