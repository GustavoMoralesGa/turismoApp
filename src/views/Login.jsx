import React, { useContext, useState } from 'react'
import Context from '../../Context';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import "../assets/css/style.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { decodeToken } from "react-jwt";

export default function Login() {
    const { setUsuario, setUserData } = useContext(Context);
    const navigate = useNavigate();
    const [usuario, setUsuarioLocal] = useState({});



    const { email, password } = usuario;


    const handleSetUsuario = ({ target: { value, name } }) => {
        const field = {};
        field[name] = value;
        setUsuarioLocal({ ...usuario, ...field });
    };

    const onFormSubmit = async (event) => {
        event.preventDefault()
        const urlServer = "http://localhost:3001";
        const endpoint = "/user/login";


        try {
            if (!email || !password) return alert("Email y password obligatorias");
            const respuesta = await axios.post(urlServer + endpoint, usuario);
            const myDecodedToken = decodeToken(respuesta.data);
            setUserData(myDecodedToken.user)


            alert("Usuario identificado con éxito 😀");
            setUsuario(true)
            navigate("/profile");

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='bg-img d-flex align-items-center'>
            <Container className="bg-white col-10 col-sm-6 col-md-3 m-auto container-form">
                <div className='mt-3'>
                    <h1>Iniciar Sesión</h1>
                </div>
                <Form className='text-left' onSubmit={onFormSubmit}>
                    <Form.Group className="mt-3" controlId="formBasicEmail">
                        <Form.Label>Dirección de Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu Email" name='email' value={email} onChange={handleSetUsuario} />
                    </Form.Group>

                    <Form.Group className="mt-1" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu Contraseña" name='password' value={password} onChange={handleSetUsuario} />
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="formBasicCheckbox">
                        <Form.Check className="text-start" type="checkbox" label="Recuérdame" />
                        <Alert.Link className="d-flex justify-content-end m-2" href="/register">¿No tienes una cuenta? Regístrate aquí</Alert.Link>
                    </Form.Group>
                    <Button variant="dark mb-4" type="submit">
                        Acceder
                    </Button>
                </Form>
            </Container>

        </div >
    )
}