
import { useEffect, useState } from 'react';
import cafeApi from "../api/cafeApi";


export const useInfo = () => {
    
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {

        const cat = async () => {
            let resp:any = await cafeApi.get('/categorias');
            console.log(resp.data.categorias);
            setCategorias(resp.data.categorias)
        }

        cat();

    }, [])
    
   

    return {
        categorias
    }

}