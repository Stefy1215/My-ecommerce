import React, { useState, useContext } from "react";

const CartContext = React.createContext('');

export const  useCartContext = () => useContext(CartContext);


export const CartProvider = ({Children}) => {
    const [Carrrito, setCart] = useState([]);

    const addProduct = (item, newQuantity) => {
        const newCart = Carrrito.filter (prod => prod.id !== item.id);
        newCart.push({...item, quantity: newQuantity});
        setCart(newCart)
    }

    const totalPrice = () => {
        return Carrrito.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => Carrrito.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const clearCart = () => setCart([]);

    const isInCart = (id) => Carrrito.find(product =>product.id === id) ? true : false;

    const  removeProduct = (id) => setCart(Carrrito.filter(product =>product.id !== id));

   return(
        <CartContext.Provider value= {{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            Carrrito
        }}>
            {Children}
        </CartContext.Provider>
    )
}

export default CartContext
