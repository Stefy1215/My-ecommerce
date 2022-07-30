import React from "react";
import CartWidget from '../CartWidget'
import {NavLink} from 'react-router-dom'; 

export const navbar = () => {
    return (
        <div class="navar">
            <nav>
                <div class="titulo">
                    <a>SHIUMI</a>
                </div>
                <div class="opciones">
                    <ul>
                        <li>
                            <NavLink classname="nav_link" to='/sobre'>Sobre nosotros</NavLink>
                        </li>
                        <li>
                            <NavLink classname="nav_link" to='/categorias/llaveros'>Tienda de llaveros</NavLink>
                        </li>
                        <li>
                            <NavLink classname="nav_link" to='/categorias/collares'>Tienda de collares</NavLink>
                        </li>
                        <li>
                            <NavLink classname="nav_link" to='/cart'>
                            <CartWidget />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav> 

        </div>
    );
}

export default navbar; 