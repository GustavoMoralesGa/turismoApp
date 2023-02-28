import React from 'react'
import { Link } from "react-router-dom"
import { Navbar, Container } from "react-bootstrap"

export default function Navigation () {
    return (
        <>
            <Navbar bg="success" variant="success">
                <Container className="justify-content-start">
                    <Navbar.Brand className="text-white ms-3 text-decoration-none">Marca</Navbar.Brand>
                    <Link to="/" className="text-white ms-3 text-decoration-none">
                        Home
                    </Link>
                    <Link to="/tours" className="text-white ms-3 text-decoration-none">
                        Tours
                    </Link>
                </Container>

                <Container className="justify-content-end">
                    <Link to="/login" className="text-white ms-3 text-decoration-none">
                        Iniciar sesión
                    </Link>
                    <Link to="/register" className="text-white ms-3 text-decoration-none">
                        Registrarse
                    </Link>
                </Container>            
            </Navbar>
        </>
    )
}