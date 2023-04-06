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
import AllPackagesUpdate from './AllPackagesUpdate';

export default function PackageUpdate() {

    const [packages, setPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const getAllPackages = async () => {
        const urlServer = "http://localhost:3001";
        const endpoint = "/package/allPackages";
        try {
            const respuesta = await axios.get(urlServer + endpoint);
            setPackages(respuesta.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllPackages();
    }, []);

    const handleEditClick = (paquete) => {
        setSelectedPackage(paquete);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedPackage(null);
        setShowModal(false);
    };

    return (
        <ListGroup as="ul">
            {packages && packages.map((paquete) => (
                <ListGroup.Item
                    key={paquete.id}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto fw-bold">{paquete.title}</div>
                    <Button variant="dark" onClick={() => handleEditClick(paquete)}>Editar</Button>
                </ListGroup.Item>
            ))}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar Datos Paquete</Modal.Title>
                </Modal.Header>
                <Modal.Body class="d-flex justify-content">
                    <AllPackagesUpdate tour={selectedPackage} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleCloseModal}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </ListGroup>
    );
};
