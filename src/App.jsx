import React, { useState } from 'react'
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
import { Profile } from './views/Profile'
import ProfileUpdate from './views/ProfileUpdate'
import ProfileUpdateUsers from './views/ProfileUpdateUsers'
import TicketDetails from './views/TicketDetails'
import PackageUpdate from './views/PackageUpdate'


function App() {
  const [usuario, setUsuario] = useState(null);
  const [userData, setUserData] = useState(null);

  return (
    <div className="App">
      <Context.Provider value={{ usuario, setUsuario, userData, setUserData }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profileupdateusers" element={usuario ? (<ProfileUpdateUsers />) : (<NotFound />)} />
            <Route path="/ticketdetails" element={usuario ? (<TicketDetails />) : (<NotFound />)} />
            <Route path="/packageUpdate" element={usuario ? (<PackageUpdate />) : (<NotFound />)} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/profile" element={usuario ? (<Profile />) : (<NotFound />)} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>

    </div>
  )
}

export default App
