import React, {useState, useEffect} from 'react';
import Title from '../Title';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import './listc.css'; 

export const ItemsListContainer = () => {
    const [data, setData] = useState([]);
    
    const {categoriaId} = useParams();
  
  
    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
       
        if (categoriaId){
            const queryFilter = query (queryCollection, where('category','==',categoriaId))
            getDocs(queryFilter)
            .them(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }else{
            getDocs(queryCollection)
            .them(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }

        
    }, [categoriaId])

    
    

    return(
        <div> <Title greeting='Shiumi' />
        <>
        <ItemList data = {data} />
        </>
        </div>
    );

}

export default ItemsListContainer;