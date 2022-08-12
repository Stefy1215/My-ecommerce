
import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail";

const films = [ 
    { id: 1, price: 100,  category:'llaveros', title:"Coso", image:"https://images.squarespace-cdn.com/content/v1/5efa4984f7696d2122f23acc/1610166343218-8V551Y9K56OBOZ73HFP7/Resina7.jpg?format=1000w"},
    { id: 2, price: 150, category:'llaveros', title:"Coso",image:"https://ae01.alicdn.com/kf/H9e1325b747c142fdb145566d8530f2edB/Llavero-con-letras-de-resina-epoxi-para-hombre-y-mujer-llavero-con-dise-o-de-cielo.jpg_Q90.jpg_.webp"},
    { id: 3, price: 700, category:'llaveros', title:"Coso", image:"https://images.squarespace-cdn.com/content/v1/5efa4984f7696d2122f23acc/1610166347096-H9O5CSXTNP56TB44N11D/Resina16.jpg?format=1000w"},
    { id: 4, price: 1500, category:'collares', title:"Coso", image:"https://m.media-amazon.com/images/I/61ZiU7S7+lL._AC_UY675_.jpg"},
    {id: 5, price: 2000, category:'collares', title:"Coso", image:"https://www.mendoza.gov.ar/wp-content/uploads/sites/49/2019/09/LAS-POLE-10.jpg"},
];

export const ItemDetailContainer = () => {
    const [data, setData ] = useState ({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getData =new Promise(resolve =>{ 
            setTimeout(() => {
                resolve (films);
            }, 3000);
        });

        getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
    }, [])
 
    return (
     <>
        <ItemDetail data = {data}/> 
     </>
        
    );
}

export default ItemDetailContainer; 