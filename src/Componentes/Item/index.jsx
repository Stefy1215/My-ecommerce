import './item.css';

import {Link} from 'react-router-dom';

import React from 'react';

const Item = ({info}) => {

    const nombre = useContext(CartContext);

    return (
        <Link to={'/detalle/'+ info.id} className='film'>
            <img scr={info.image}></img>
            <p>{info.category}</p>

        </Link>
    )
}

export default Item;