import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Context from '../../Context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Register() {
    const { setUsuario, setUserData } = useContext(Context);
    const navigate = useNavigate();
    const [usuario, setUsuarioLocal] = useState({});

    const { name, lastName, NationalId, email, password } = usuario;


    const handleSetUsuario = ({ target: { value, name } }) => {
        const field = {};
        field[name] = value;
        setUsuarioLocal({ ...usuario, ...field });
    };

    const onFormSubmit = async (event) => {
        event.preventDefault()
        const urlServer = "http://localhost:3001";
        const endpoint = "/user/register";

        try {
            if (!name || !lastName || !NationalId || !email || !password) return alert("Todos los campos son obligatorios");
            const respuesta = await axios.post(urlServer + endpoint, usuario);
            alert("Usuario registrado con éxito");
            setUserData(respuesta.data)
            setUsuario(true)
            navigate("/profile");

        } catch ({ response: { data: message } }) {
            alert(message + " 🙁");
            console.log(message);
        }
    };

    return (
        <>
            <div className='bg-img d-flex align-items-center'>
                <Container className="bg-white p-5 col-10 col-sm-6 col-md-3 m-auto">
                    <div className='mt-3'>
                        <h1>Registrarse</h1>
                    </div>
                    <Form className='text-left' onSubmit={onFormSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar tu Nombre" name='name' value={name} onChange={handleSetUsuario} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar tu Apellido" name='lastName' value={lastName} onChange={handleSetUsuario} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Rut o Pasaporte (Sin puntos ni guión)</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu Rut o Pasaporte" name='NationalId' value={NationalId} onChange={handleSetUsuario} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu Email" name='email' value={email} onChange={handleSetUsuario} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" >
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa tu Contraseña" name='password' value={password} onChange={handleSetUsuario} />
                        </Form.Group>
                        <Alert.Link className="d-flex justify-content-end m-2" href="/login">¿Ya tienes una cuenta? Inicia Sesión aquí</Alert.Link>
                        <Button variant="dark" type="submit">
                            Registrar
                        </Button>
                    </Form>
                </Container>
            </div>
        </>

    )
}