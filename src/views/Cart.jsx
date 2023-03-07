import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Cart() {
    return (
        <div className='d-flex align-items-center'>
            <Container className="bg-white col-10 col-sm-6 col-md-3 m-auto container-form">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Trekking valle nevado</Card.Title>
                        <Card.Text>
                            Uno de los senderos mas visitados de la zona 
                        </Card.Text>
                        <Button className="textcenter" variant="primary">Ver más</Button>
                    </Card.Body>
                </Card>
            </Container>

        </div >
    )
}