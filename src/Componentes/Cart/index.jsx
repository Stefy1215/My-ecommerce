import React from "react";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if(cart.length === 0) {
        return(
            <>
                <p>No hay elementos en el carrito</p>
                <link to='/'>Hacer compras</link>
            </>
        )
    }
    
    
    
    return (
     <>
     {
        cart.map(product => <ItemCart key={product.id} product={product} />)
     }
     <p>
        total: {totalPrice()}
     </p>
     </>   
    )
}

export default Cart