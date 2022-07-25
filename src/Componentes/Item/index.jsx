import './item.css';

import React from 'react';

const Item = ({info}) => {
    return (
        <a href="" className='film'>
            <img scr={info.image}></img>
            <p>Llaveros</p>

        </a>
    )
}

export default Item;