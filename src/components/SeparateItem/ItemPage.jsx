import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/Store';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

function ItemPage() {
    const data = useContext(AppContext);
    const [product, setProduct] = useState()
    const { userId } = useParams();
    // console.log(userId);
    const { url, addToCart } = data;
    useEffect(() => {
        const fetchData = () => axios.get(`${url}/${userId}`)
            .then((res) => {
                setProduct(res.data);
                // console.log(res.data);
            })
        fetchData();
    }, [userId, url])

    return (
        <div
            className='h-full w-full flex justify-center 
        md:px-10 px-5 py-2 bg-[#cce7d0]'>
            {product ? (
                <div className='h-fit w-[90vw] mx-auto px-5 py-5 flex flex-col 
                md:flex-row mt-10 gap-4 flex-wrap'>
                    <div 
                    className='flex md:basis-[40%] w-full
                    justify-center items-center h-full pt-10'>
                        <img 
                        className='h-[400px] aspect-auto 
                        object-contain rounded-xl' src={product.image} alt="" />
                    </div>
                    <div className='md:basis-[50%] py-10 w-full flex flex-col
                    items-start justify-center gap-3'>
                        <h2 
                        className='text-2xl font-bold text-blue-600'>
                        {product.title}
                        </h2>
                        <h4 
                        className='text-lg font-semibold text-gray-700 '>
                        {product.description}
                        </h4>
                        <p className='text-xl font-bold text-black flex flex-row items-center'>
                        <FaStar className='text-yellow-500'/>{product.rating.rate}
                        </p>
                        <p 
                        className='text-xl font-bold text-green-900'>
                        ${product.price}
                        </p>
                        <NavLink 
                        onClick={addToCart(product)}
                        to="/EcommerceUsingContext/cart"
                        className='text-xl bg-green-400 hover:bg-green-700
                        rounded-md text-white py-2 px-5'>
                        Add To cart
                        </NavLink>
                    </div>
                    {/* Render other product details */}
                </div>
            ) : (
                <p className='flexh-full w-full flex justify-center 
        px-10 py-5 bg-[#cce7d0] mt-10 text-2xl font-bold'>Loading...</p>
            )}
        </div>
    )
}

export default ItemPage
