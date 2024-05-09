import { useEffect, useState, createContext } from 'react'
import axios from 'axios';


export const AppContext = createContext();

export const AppProvider = (props) => {
    const url = "https://fakestoreapi.com/products";
    // const url200 = "https://api.escuelajs.co/api/v1/products"
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data);
            });
    }, [])
    // const CartItem=(e)=>{
        
    // }

    return (

        <AppContext.Provider value={{data, cart, setCart}}>
            {props.children}
        </AppContext.Provider>

    )
}


