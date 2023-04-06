import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from './views/Login'
import Register from './views/Register'
import NotFound from './views/NotFound'
import Home from './views/Home'
import Tours from './views/Tours'
import Cart from './views/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartProvider from '../CartContext'
import { Profile } from './views/Profile'
import ProfileUpdateUsers from './views/ProfileUpdateUsers'
import TicketDetails from './views/TicketDetails'
import PackageUpdate from './views/PackageUpdate'
import Context from '../Context'
import Order from './views/Order'


function App() {
  const [usuario, setUsuario] = useState(null);
  const [userData, setUserData] = useState(null);

  return (
    <div className="App">
      <Context.Provider value={{ usuario, setUsuario, userData, setUserData }}>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/order" element={<Order />} />
              <Route path="/profileupdateusers" element={usuario ? (<ProfileUpdateUsers />) : (<NotFound />)} />
              <Route path="/ticketdetails" element={usuario ? (<TicketDetails />) : (<NotFound />)} />
              <Route path="/packageUpdate" element={usuario ? (<PackageUpdate />) : (<NotFound />)} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/profile" element={usuario ? (<Profile />) : (<NotFound />)} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </Context.Provider>

    </div>
  )
}

export default App
