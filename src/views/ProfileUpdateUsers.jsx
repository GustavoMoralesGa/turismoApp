import React, { useContext, useState, useEffect } from 'react';
import Context from '../../Context';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import "../assets/css/style.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import ProfileUpdateAllUsers from './ProfileUpdateAllUsers';

export default function ProfileUpdateUsers() {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const getAllUsers = async () => {
        const urlServer = "http://localhost:3001";
        const endpoint = "/user/allUsers";
        try {
            const respuesta = await axios.get(urlServer + endpoint);
            setUsers(respuesta.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
        setShowModal(false);
    };

    return (
        <ListGroup as="ol" numbered>
            {users && users.map((user) => (
                <ListGroup.Item
                    key={user.id}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto fw-bold">{user.name}</div>
                    <div className="ms-2 me-auto fw-bold">{user.apellido}</div>
                    <Button variant="dark" onClick={() => handleEditClick(user)}>Editar</Button>
                </ListGroup.Item>
            ))}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar Datos</Modal.Title>
                </Modal.Header>
                <Modal.Body class="d-flex justify-content">
                    <ProfileUpdateAllUsers user={selectedUser} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleCloseModal}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </ListGroup>
    );
};
