import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

export default function Register() {
    return (
        <>
            <div className='bg-img d-flex align-items-center'>
                <Container className="bg-white p-5 col-10 col-sm-6 col-md-3 m-auto">
                    <div className='mt-3'>
                        <h1>Registrarse</h1>
                    </div>
                    <Form className='text-left'>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre completo</Form.Label>
                            <Form.Control type="email" placeholder="Ingresar tu Nombre completo" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Rut o Pasaporte</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu Rut o Pasaporte" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu Teléfono" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa tu Contraseña" />
                        </Form.Group>
                        <Form.Group className="d-flex mb-3" controlId="formBasicCheckbox">
                            <Form.Check className='text-start' type="checkbox" label="Confirmo que he leído y acepto la" />
                            <Alert.Link className='text-start mx-1' href="#">Política de privacidad</Alert.Link>
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Registrar
                        </Button>
                    </Form>
                </Container>
            </div>
        </>

    )
}