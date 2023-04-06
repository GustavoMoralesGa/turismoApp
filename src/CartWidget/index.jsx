import React from "react";
import { useCartContext } from "../../CartContext";
import './cartWidget.css'

export const CartWidget = () => {
    const { totalProducts } = useCartContext()

    return(
        <>
            <i className="cartWidget bi bi-cart3"></i>
            <span>{ totalProducts() || ''}</span>
        </>
        
    ) 
}

export default CartWidget;