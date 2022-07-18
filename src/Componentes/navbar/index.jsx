import React from "react";
import CartWidget from '../CartWidget'
export const navbar = () => {
    return (
        <div class="navar">
            <nav>
                <div class="titulo">
                    <a>SHIUMI</a>
                </div>
                <div class="opciones">
                    <ul>
                        <li>Sobre nosotros</li>
                        <li>Contacto</li>
                        <li>Noticias</li>
                        <li>Tienda</li>
                        <li><CartWidget /></li>
                    </ul>
                </div>
            </nav> 

        </div>
    );
}

export default navbar; 