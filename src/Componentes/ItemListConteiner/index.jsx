import React from "react";
import Title from '../Title';
import ItemCount from "../ItemCount";


export const ItemsListContainer = () => {

    const onAdd = (quantity) =>{
        console.log(`Compraste $(quantity) unidades`)
    }
    return(
        <div> <Title greeting='Shiumi' />
        <>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </>
        </div>
    );

}

export default ItemsListContainer;