import './item.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ info }) => {
    
    return(
        <>
            <Card className='carditem' style={{ width: '22rem'}}>
                <Card.Img variant="top" src={info.image} />
                <Card.Body>
                    <Card.Title>{info.title}</Card.Title>
                    <Card.Text>
                        {info.description}
                    </Card.Text>
                    <Card.Text>
                        Desde ${info.packageValue}
                    </Card.Text>
                    <Link to={`/detalle/${info.id}`}>                
                        <Button variant="primary">Ver Más</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item;