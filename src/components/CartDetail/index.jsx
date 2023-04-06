import React from "react"
import { useCartContext } from "../../../CartContext"
import { Link } from "react-router-dom"
import ItemCart from "../ItemCart"
import './cartDetail.css'

const CartDetail = () => {
    const { cart, totalPrice } = useCartContext()

    if(cart.length === 0) {
        return(
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/tours'>Hacer las compras</Link>
            </>
        )
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="columna col col-md-3 col-lg-3 col-xl-3">
                        {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p className="textoTotal">
                <strong>Total: ${totalPrice()}</strong> 
            </p>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default CartDetail;