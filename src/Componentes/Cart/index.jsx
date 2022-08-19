import {addDoc, collection, getFirestore} from 'firebase/firestore';
import React from "react";
import {Link} from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import ItemCart from '../ItemCart';

const Cart = () => {
    const {Carrrito, totalPrice} = useCartContext();
    const order= {
        buyer: {
            name:'pablo',
            email:'pitufo@gmail.com',
            phone: '156154156',
            address:'ddd'
        },
        items: Carrrito.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)
        .them(({id}) => console.log(id))
    }

    if(Carrrito.length === 0) {
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
        Carrrito.map(product => <ItemCart key={product.id} product={product} />)
     }
     <p>
        total: {totalPrice()}
     </p>
     <button onClick={handleClick}>Emitir compra</button>
     </>   
    )
}

export default Cart