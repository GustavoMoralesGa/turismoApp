import { React, useContext, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { Navbar, Container, Button, Modal } from "react-bootstrap"
import Context from '../../Context';
import '../assets/css/style.css'

const setActive = ({ isActive }) => (isActive ? "active" : "noactive")

export default function Navigation() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const { usuario, setUsuario } = useContext(Context);
    const logout = () => {
        setUsuario(null);
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <>
            <Navbar bg="light" variant="success" className='sm-12'>
                <Container className="justify-content-start">
                    <Navbar.Brand className={"text-dark ms-3 text-decoration-none"}><img src="https://jorgeendigital.com/wp-content/uploads/2023/03/Logotipo-asesoria-financiera-de-finanzas-moderno-geometrico-lila-e1677804069660.png" alt="Logo" width="250" /></Navbar.Brand>
                    <NavLink to="/" className={setActive} end>
                        Inicio
                    </NavLink>
                    <NavLink to="/tours" className={setActive}>
                        Tours
                    </NavLink>
                </Container>
                {
                    !usuario ? (
                        <Container className="justify-content-end">
                            <NavLink to="/login" className={setActive}>
                                Iniciar sesión
                            </NavLink>
                            <NavLink to="/register" className={setActive}>
                                Registrarse
                            </NavLink>
                            <NavLink className={setActive} onClick={handleShow}><img src="https://cdn-icons-png.flaticon.com/512/4202/4202388.png" alt="Logo" width="30" />
                            </NavLink>
                        </Container>
                    ) : (
                        <div>
                            <NavLink to="/profile">
                                <button className="btn btn-dark">Mi Perfil</button>
                            </NavLink>
                            <button onClick={logout} className="btn btn-danger me-3">
                                Salir
                            </button>
                        </div>
                    )
                }
            </Navbar>


            <Modal
                className='modalcart'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Trekking
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Eliminar Tour
                    </Button>
                    <NavLink to="/carrito" clasName={setActive}><Button variant="primary" onClick={handleClose}>Ir a pagar</Button></NavLink>

                </Modal.Footer>
            </Modal>
        </>
    )
}