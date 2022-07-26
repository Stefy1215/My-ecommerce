import ItemDetail from "../ItemDetail";
import React, {useEffect, useState} from "react";

const film = { id: 1, image:"https://images.squarespace-cdn.com/content/v1/5efa4984f7696d2122f23acc/1610166343218-8V551Y9K56OBOZ73HFP7/Resina7.jpg?format=1000w"};

export const ItemDetailContainer = () => {
    const [data, setData ] = useState ({});

    useEffect(() => {
        const getData =new Promise(resolve =>{ 
            setTimeout(() => {
                resolve (film);
            }, 3000);
        });

        getData, then(res => setData(res));
    }, [])
 

    return (
        <ItemDetail />
    );
}

export default ItemDetailContainer; 