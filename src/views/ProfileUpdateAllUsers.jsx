import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ProfileUpdateAllUsers({ user }) {
    const navigate = useNavigate();
    console.log("usuario seleccionado", user)

    const [usuario, setUsuarioLocal] = useState({});
    const { name, lastName, password } = usuario;

    const handleSetUsuario = ({ target: { value, name } }) => {
        const field = {};
        field[name] = value;
        setUsuarioLocal({ ...usuario, ...field });
    };

    const onFormSubmit = async () => {

        const urlServer = "http://localhost:3001";
        const endpoint = `/user/${user && user.id}`;

        try {
            if (!name || !lastName || !password) return alert("Completa los 3 campos");
            const respuesta = await axios.put(urlServer + endpoint, usuario);
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
                    <Form.Control type="text" placeholder={user?.name} name='name' value={name} onChange={handleSetUsuario} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder={user?.lastName} name='lastName' value={lastName} onChange={handleSetUsuario} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nueva Contraseña" name='password' value={password} onChange={handleSetUsuario} />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Guardar
                </Button>

            </Form>
        </Container >
    )
}
