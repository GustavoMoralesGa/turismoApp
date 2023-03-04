import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import "../assets/css/style.css"


export default function Login() {
    return (
        <div className='bg-img d-flex align-items-center'>
            <Container className="bg-white col-10 col-sm-6 col-md-3 m-auto container-form">
                <div className='mt-3'>
                    <h1>Iniciar Sesión</h1>
                </div>
                <Form className='text-left'>
                    <Form.Group className="mt-3" controlId="formBasicEmail">
                        <Form.Label>Dirección de Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu Email" />
                    </Form.Group>

                    <Form.Group className="mt-1" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu Contraseña" />
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="formBasicCheckbox">
                        <Form.Check className="text-start" type="checkbox" label="Recuérdame" />
                        <Alert.Link className="d-flex justify-content-end" href="#">¿No tienes una cuenta? Regístrate aquí</Alert.Link>
                    </Form.Group>
                    <Button variant="dark mb-4" type="submit">
                        Acceder
                    </Button>
                </Form>
            </Container>

        </div >
    )
}