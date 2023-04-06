import React from "react";
import './itemCart.css'
import { useCartContext } from "../../../CartContext";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemCart = ({ product }) => {

    const { removeProduct } = useCartContext()

    return(
        <>
            <Card className="itemCart">
                <Card>
                    <Card.Img variant="top" src={product.image} alt={product.title}/>
                </Card>
                <Card.Body>
                    <Card.Title>Titulo: {product.title}</Card.Title>
                    <Card.Text>
                        Cantidad: {product.quantity}
                    </Card.Text>
                    <Card.Text>
                        Precio unitario: {product.price}
                    </Card.Text>
                    <Card.Text>
                        Subtotal: ${product.quantity * product.price}
                    </Card.Text>
                    <Button variant="primary" onClick={() => removeProduct(product.id)}>Eliminar</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemCart;