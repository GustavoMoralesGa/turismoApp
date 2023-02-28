import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from './components/Login'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Tours from './components/Tours'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tours" element={<Tours/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<NotFound/>}/> 
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
