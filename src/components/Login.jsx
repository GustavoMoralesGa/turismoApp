import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';


export default function Login () {
    return (
        <>
            <Container className="mt-2 p-2">
                <Form className='text-center'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresar Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingresar Contraseña" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className="text-start" type="checkbox" label="Recordar cuenta" />
                        <Alert.Link className="d-flex justify-content-end" href="#">¿Has olvidado tu contraseña?</Alert.Link>
                    </Form.Group>
                    <Button variant="primary" type="submi}}}t">
                            Acceder
                    </Button>
                </Form>
            </Container>
               
        </>
    )
}