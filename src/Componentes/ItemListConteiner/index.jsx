import React, {useState, useEffect} from 'react';
import Title from '../Title';

import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import './ListC.css'; 

const films = [ 
    { id: 1, category:'llaveros', title:"Coso", image:"https://images.squarespace-cdn.com/content/v1/5efa4984f7696d2122f23acc/1610166343218-8V551Y9K56OBOZ73HFP7/Resina7.jpg?format=1000w"},
    { id: 2, category:'llaveros', title:"Coso",image:"https://ae01.alicdn.com/kf/H9e1325b747c142fdb145566d8530f2edB/Llavero-con-letras-de-resina-epoxi-para-hombre-y-mujer-llavero-con-dise-o-de-cielo.jpg_Q90.jpg_.webp"},
    { id: 3, category:'llaveros', title:"Coso", image:"https://images.squarespace-cdn.com/content/v1/5efa4984f7696d2122f23acc/1610166347096-H9O5CSXTNP56TB44N11D/Resina16.jpg?format=1000w"},
    { id: 4, category:'collares', title:"Coso", image:"https://m.media-amazon.com/images/I/61ZiU7S7+lL._AC_UY675_.jpg"},
    {id: 5,category:'collares', title:"Coso", image:"https://www.mendoza.gov.ar/wp-content/uploads/sites/49/2019/09/LAS-POLE-10.jpg"},
];

export const ItemsListContainer = () => {
    const [data, setData] = useState([]);
    
    const {CategoriaId} = useParams();
  
  
    useEffect(() => {

        const getData =new Promise(resolve =>{ 
            setTimeout(() => {
                resolve (films);
            }, 3000);
        });
        if(CategoriaId){
            getData.then(res => setData(res.filter(films => films.category === CategoriaId)));
        }else{
            getData.then(res => setData(res));
        }

        
    }, [CategoriaId])

    
    

    return(
        <div> <Title greeting='Shiumi' />
        <>
        <ItemList data = {data} />
        </>
        </div>
    );

}

export default ItemsListContainer;