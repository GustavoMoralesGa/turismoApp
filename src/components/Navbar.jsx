import React from 'react'
import { Link } from "react-router-dom"
import { Navbar, Container } from "react-bootstrap"

export default function Navigation() {
    return (
        <>
            <Navbar bg="light" variant="success">
                <Container className="justify-content-start">
                    <Navbar.Brand className="text-dark ms-3 text-decoration-none"><img src="https://jorgeendigital.com/wp-content/uploads/2023/03/Logotipo-asesoria-financiera-de-finanzas-moderno-geometrico-lila-e1677804069660.png" alt="Logo" width="250" /></Navbar.Brand>
                    <Link to="/" className="text-dark ms-3 text-decoration-none">
                        Inicio
                    </Link>
                    <Link to="/tours" className="text-dark ms-3 text-decoration-none">
                        Tours
                    </Link>
                </Container>

                <Container className="justify-content-end">
                    <Link to="/login" className="text-dark ms-3 text-decoration-none">
                        Iniciar sesión
                    </Link>
                    <Link to="/register" className="text-dark ms-3 text-decoration-none">
                        Registrarse
                    </Link>
                    <Link to="/carrito" className="text-dark ms-3 text-decoration-none"><img src="https://cdn-icons-png.flaticon.com/512/4202/4202388.png" alt="Logo" width="30" />
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}