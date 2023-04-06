import React, { useState } from "react";
import { useCartContext } from "../../../CartContext";
import Card from 'react-bootstrap/Card';
import './itemDetail.css'
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false)

    const {addProduct} = useCartContext()

    const onAdd = (quantity) => {
        setGoToCart(true)
        addProduct(data, quantity)
    }

    return(
        <>
            <Card className="cardDetail">
                <Card.Img className="itemDetailImg" variant="top" src={data.image} />
                <Card.Body>
                <Card.Title className="mb-3">{data.title}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">{data.description}</Card.Subtitle>
                <Card.Text>
                    Precio por persona: {data.valuePerPerson}
                </Card.Text>
                <Card.Text>
                    Valor inicial Tour: {data.packageValue}
                </Card.Text>
                <Card.Text>
                    Grupo mínimo: {data.groupMin}
                </Card.Text>
                <Card.Text>
                    Grupo máximo: {data.groupMax}
                </Card.Text>
                <Card.Text>
                    Condiciones: {data.conditions}
                </Card.Text>
                <Card.Text>
                    Política de anulación y reprogramación: {data.schudules}
                </Card.Text>          
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Duración: {data.duration}</small>
                </Card.Footer>
                {
                    goToCart
                        ? <Link to="/carrito">Terminar Compra</Link>
                        : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                }
            </Card> 
      </>
    )
    
}

export default ItemDetail;