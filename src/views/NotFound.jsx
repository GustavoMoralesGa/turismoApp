import React from 'react'
import Alert from 'react-bootstrap/Alert';


export default function NotFound() {
    return (
        <>
            <Alert variant="danger">
                <Alert.Heading>La ruta que intentas consultar no existe :/</Alert.Heading>
            </Alert>
        </>
    )
}