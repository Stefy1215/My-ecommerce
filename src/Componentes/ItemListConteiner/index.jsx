import React from "react";
import Title from '../Title';


export const ItemsListContainer = () => {

    const onAdd = (quantity) =>{
        console.log(`Compraste $(quantity) unidades`)
    }
    return(
        <div> <Title greeting='Shiumi' /></div>
    );
    <>
    <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </>
}

export default ItemsListContainer;