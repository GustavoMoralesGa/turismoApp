import React, { useContext, useState } from 'react'
import Context from '../../Context';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import "../assets/css/style.css"
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const { setUsuario } = useContext(Context);
    const navigate = useNavigate();
    const [usuario, setUsuarioLocal] = useState({});
    const DBUser = {
        dbEmail: 'jmolinaa@hotmail.es',
        dbPassword: '1234'
    };
    const { email, password } = usuario;
    const { dbEmail, dbPassword } = DBUser;

    const handleSetUsuario = ({ target: { value, name } }) => {
        const field = {};
        field[name] = value;
        setUsuarioLocal({ ...usuario, ...field });
    };

    const iniciarSesion = /* async */ () => {
        // const urlServer = "http://localhost:3000";
        // const endpoint = "/login";
        try {
            if (!email || !password) return alert("Email y password obligatorias");
            // const { data: token } = await axios.post(urlServer + endpoint, usuario);
            if (email === dbEmail && password === dbPassword) {
                alert("Usuario identificado con éxito 😀");
                // localStorage.setItem("token", token);
                setUsuario(true)
                navigate("/profile");
            }
        } catch ({ response: { data: message } }) {
            alert(message + " 🙁");
            console.log(message);
        }
    };
    return (
        <div className='bg-img d-flex align-items-center'>
            <Container className="bg-white col-10 col-sm-6 col-md-3 m-auto container-form">
                <div className='mt-3'>
                    <h1>Iniciar Sesión</h1>
                </div>
                <Form className='text-left'>
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
                        <Alert.Link className="d-flex justify-content-end m-2" href="#">¿No tienes una cuenta? Regístrate aquí</Alert.Link>
                    </Form.Group>
                    <Button variant="dark mb-4" type="submit" onClick={iniciarSesion}>
                        Acceder
                    </Button>
                </Form>
            </Container>

        </div >
    )
}