import React, {useState, useEffect} from 'react';
import Title from '../Title';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';

const films = [ 
    { id: 1, image:"https://images.squarespace-cdn.com/content/v1/5efa4984f7696d2122f23acc/1610166343218-8V551Y9K56OBOZ73HFP7/Resina7.jpg?format=1000w"},
    { id: 2, image:"https://ae01.alicdn.com/kf/H9e1325b747c142fdb145566d8530f2edB/Llavero-con-letras-de-resina-epoxi-para-hombre-y-mujer-llavero-con-dise-o-de-cielo.jpg_Q90.jpg_.webp"},
    { id: 3, image:"https://images.squarespace-cdn.com/content/v1/5efa4984f7696d2122f23acc/1610166347096-H9O5CSXTNP56TB44N11D/Resina16.jpg?format=1000w"},

];


export const ItemsListContainer = () => {
    const [data, setData] = userState([]);
    
    useEffect(() =>{
        const getData =new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 3000);
        })
        getData.them(res => setData(res));
    }, [])

    
    const onAdd = (quantity) =>{
        console.log(`Compraste $(quantity) unidades`)
    }

    return(
        <div> <Title greeting='Shiumi' />
        <>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemList data = {data} />
        </>
        </div>
    );

}

export default ItemsListContainer;