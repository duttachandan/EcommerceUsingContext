import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Items from "../../assets/Images";
import { FaStar } from 'react-icons/fa';

function ItemPageJson() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const item = Items.find(item => item.id === parseInt(id));
        setProduct(item);
    }, [id]);

    return (
        <div className='h-full w-full flex justify-center md:px-10 px-5 py-2 bg-[#cce7d0]'>
            {product ? (
                <div className='h-fit w-[90vw] mx-auto px-5 
                py-5 flex flex-col md:flex-row mt-10 gap-4 sm:gap-8 flex-wrap'>
                    <div className='flex md:basis-[40%] w-full 
                    justify-center items-center h-full pt-10'>
                        <img className='h-[250px] sm:h-[400px] aspect-auto object-contain rounded-lg overflow-hidden' src={product.image} alt="" />
                    </div>
                    <div className='md:basis-[50%] py-10 w-full flex flex-col items-start justify-center gap-3'>
                        <h2 className='text-2xl font-bold text-blue-600'>{product.title}</h2>
                        <h4 className='text-lg font-semibold text-gray-700 '>{product.description}</h4>
                        <p className='text-xl font-bold text-black flex flex-row items-center'>
                            <FaStar className='text-yellow-500' /> {product.rating}
                        </p>
                        <p className='text-xl font-bold text-green-900'>${product.price}</p>
                        <button 
                        className='text-xl bg-green-400 hover:bg-green-700 
                        rounded-md text-white py-2 px-5'
                        onClick={()=>alert("This product is not optimized for cart, select any product from products section ")}>
                            Add To cart
                        </button>
                    </div>
                </div>
            ) : (
                <p className='flex h-full w-full justify-center px-10 py-5 bg-[#cce7d0] mt-10 text-2xl font-bold'>Loading...</p>
            )}
        </div>
    );
}

export default ItemPageJson;
