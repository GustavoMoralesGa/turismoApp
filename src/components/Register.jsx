import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

export default function Register () {
    return (
        <>
        <Container className="mt-2 p-2">
            <Form className='text-center'>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar Nombre completo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Rut/Pasaporte</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar Rut/Pasaporte" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar Telefono" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingresar Contraseña" />
                    </Form.Group>
                    <Form.Group className="d-flex mb-3" controlId="formBasicCheckbox">
                        <Form.Check className='text-start' type="checkbox" label="Confirmo que he leído y acepto la" />
                        <Alert.Link className='text-start mx-1' href="#">Política de privacidad</Alert.Link>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Registrar
                    </Button>
            </Form>
        </Container>
           
        </>
    )
}