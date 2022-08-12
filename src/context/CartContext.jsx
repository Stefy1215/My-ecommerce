import React, { useState, useContext } from "react";

const CartContext = React.createContext('');

export const  useCartContext = () => useContext(CartContext);

const CartProvider = ({Children}) => {
    const [Cart, setCart] = useState([]);

    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter (prod => prod.id !== item.id);
        newCart.push({...item, quantity: newQuantity});
        setCart(newCart)
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const clearCart = () => setCart([]);

    const isInCart = (id) => Cart.find(product =>product.id === id) ? true : false;

    const  removeProduct = (id) => setCart(cart.filter(product =>product.id !== id));

   return(
        <CartContext.Provider value= {{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {Children}
        </CartContext.Provider>
    )
}

export default CartContext