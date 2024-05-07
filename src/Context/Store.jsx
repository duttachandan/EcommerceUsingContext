import { useEffect, useState, createContext } from 'react'
import axios from 'axios';


export const AppContext = createContext();

export const AppProvider = (props) => {
    const url = "https://fakestoreapi.com/products";
    // const url200 = "https://api.escuelajs.co/api/v1/products"
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data);
            });
    }, [])

    return (

        <AppContext.Provider value={data}>
            {props.children}
        </AppContext.Provider>

    )
}


