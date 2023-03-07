import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from './views/Login'
import Register from './views/Register'
import NotFound from './views/NotFound'
import Home from './views/Home'
import Tours from './views/Tours'
import Context from '../Context'
import Cart from './views/Cart'

function App() {
  return (
    <div className="App">
      <Context.Provider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
      
    </div>
  )
}

export default App
