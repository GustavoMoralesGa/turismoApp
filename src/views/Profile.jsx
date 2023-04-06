import React from 'react'
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import Context from '../../Context';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ProfileUpdate from './ProfileUpdate';
import ProfileUpdateUsers from './ProfileUpdateUsers';
import AllPackagesUpdate from './AllPackagesUpdate';
import PackageUpdate from './PackageUpdate';

export const Profile = () => {
    const { userData } = useContext(Context);
    const role = userData && userData.role
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [userShow, setUserShow] = useState(false);
    const handleUserClose = () => setUserShow(false);
    const handleUserShow = () => setUserShow(true);

    const [totalUserShow, setTotalUserShow] = useState(false);
    const handleTotalUserClose = () => setTotalUserShow(false);
    const handleTotalUserShow = () => setTotalUserShow(true);


    const [UpdatePackageShow, setUpdatePackageShow] = useState(false);
    const handleUpdatePackageClose = () => setUpdatePackageShow(false);
    const handleUpdatePackageShow = () => setUpdatePackageShow(true);

    return (

        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center col-10 col-sm-6 col-md-3 m-auto container-form">
                Mis Datos
                <Button variant="dark" onClick={handleUserShow}>
                    Editar
                </Button>
                <Modal show={userShow} onHide={handleUserClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modificar Datos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body class="d-flex justify-content">
                        <ProfileUpdate />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleUserClose}>
                            Cerrar
                        </Button>

                    </Modal.Footer>
                </Modal>

            </li>
            {/*  <li class="list-group-item d-flex justify-content-between align-items-center col-10 col-sm-6 col-md-3 m-auto container-form">
                Historial de Compras
                <Button variant="dark" onClick={handleShow}>
                    Ver Detalle
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Detalle de Compra</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Aquí debe mostrar ek número del ticket, el nombre y el valor</Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>
                            Cerrar
                        </Button>

                    </Modal.Footer>
                </Modal>

            </li>*/}
            {
                role === "ADMIN" ? (
                    <>
                        <li class="list-group-item d-flex justify-content-between align-items-center col-10 col-sm-6 col-md-3 m-auto container-form">
                            Paquetes
                            <Button variant="dark" onClick={handleUpdatePackageShow}>
                                Editar
                            </Button>

                            <Modal show={UpdatePackageShow} onHide={handleUpdatePackageClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modificar Datos Paquete</Modal.Title>
                                </Modal.Header>
                                <Modal.Body class="d-flex">
                                    <PackageUpdate />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="dark" onClick={handleUpdatePackageClose}>
                                        Cerrar
                                    </Button>

                                </Modal.Footer>
                            </Modal>

                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center col-10 col-sm-6 col-md-3 m-auto container-form">
                            Usuarios
                            <Button variant="dark" onClick={handleTotalUserShow}>
                                Editar
                            </Button>

                            <Modal show={totalUserShow} onHide={handleTotalUserClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modificar Datos</Modal.Title>
                                </Modal.Header>
                                <Modal.Body class="d-flex">
                                    <ProfileUpdateUsers />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="dark" onClick={handleTotalUserClose}>
                                        Cerrar
                                    </Button>

                                </Modal.Footer>
                            </Modal>

                        </li>

                    </>
                ) : ("")
            }

        </ul >
    )
}
