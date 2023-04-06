import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList'
import axios from 'axios';


export const ItemListContainer = () => {
   

    const [data, setData] = useState([]);

    const getAllPackages = async () => {
        const urlServer = "http://localhost:3001";
        const endpoint = "/package/allPackages";
        try {
            const respuesta = await axios.get(urlServer + endpoint);
            setData(respuesta.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllPackages();
    }, []);

    

    return(
        <> 
        <ItemList data={data} />           
        </>
    )
}

export default ItemListContainer;
