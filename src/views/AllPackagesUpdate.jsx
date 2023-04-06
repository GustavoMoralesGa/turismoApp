import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AllPackagesUpdate({ tour }) {

    const navigate = useNavigate();

    const [paquete, setPaqueteLocal] = useState({});
    const { title, valuePerPerson } = paquete;

    const handleSetPackage = ({ target: { value, name } }) => {
        const field = {};
        field[name] = value;
        setPaqueteLocal({ ...paquete, ...field });
        console.log("handle set package")
    };

    const onFormSubmit = async (event) => {
        event.preventDefault()
        console.log("onform")
        const urlServer = "http://localhost:3001";
        const endpoint = `/package/${tour && tour.id}`;
        console.log("onform 2")
        try {
            console.log("en try")
            if (!title || !valuePerPerson) return alert("Completa los 2 campos");
            const respuesta = await axios.put(urlServer + endpoint, paquete);
            console.log("respuesta")

            alert("Cambios Realizados");
            navigate("/profile");

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Container className="bg-white p-5 col-10 col-sm-6 col-md-12 m-auto">
            <Form className='text-left' onSubmit={onFormSubmit} >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder={tour?.title} name='title' value={title} onChange={handleSetPackage} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Valor por Persona</Form.Label>
                    <Form.Control type="text" placeholder={tour?.valuePerPerson} name='valuePerPerson' value={valuePerPerson} onChange={handleSetPackage} />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Guardar
                </Button>

            </Form>
        </Container >
    )
}
