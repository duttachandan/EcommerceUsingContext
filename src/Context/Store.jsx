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

    // remove Item from the store
    function removeItem(){
        setCart([]);
    }

    //Add to cart Button functionality
    function addToCart(product) {
        const productId = cart.findIndex(element => element.id == product.id)
        if (productId !== -1) {
            const updatedCart = [...cart];
            // updatedCart[productId].quantity++;
            updatedCart[productId].quantity+1;
            return setCart(updatedCart);
            
        } else {
            const initialvalue = 1;
            const updatedCart = [...cart,{...product,quantity:initialvalue}]
            return setCart(updatedCart);
        }
    }
    //Add to cart button functionality ends here

    return (

        <AppContext.Provider value={{ data, cart, setCart, url, addToCart, removeItem }}>
            {props.children}
        </AppContext.Provider>

    )
}

