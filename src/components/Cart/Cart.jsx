import { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { AppContext } from '../../Context/Store';

function Cart() {
    const data = useContext(AppContext);
    const { cart, setCart, removeItem } = data;
    

    // Increment or decrement button
    function increaseQuantity(id) {
        const updatedCart = cart.map((element) => {
            if (element.id == id) {
                return { ...element, quantity: element.quantity + 1 }
            }
            return element;
        })
        setCart(updatedCart);
    }
    
    // Decrement button
    function decreaseQuantity(id) {
        const updatedCart = cart.map((element) => {
            if (element.id == id) {
                if (element.quantity > 0) {
                return { ...element, quantity: element.quantity - 1 };
            } else {
                // If quantity becomes zero, return null to filter out this item
                return null;
            }
            }
            return element;
        }).filter(Boolean);

        setCart(updatedCart);
    }
    //!Increment or decrement button

    {/* total Value */ }
    const totalValue = cart.reduce((total, item) => {
        let itemTotal = 0;
        if (item.quantity) {
            itemTotal = parseFloat(item.price) * parseInt(item.quantity);
        } else {
            itemTotal = parseFloat(item.price);
        }
        return total + itemTotal;
    }, 0);

    // Round the total to 2 decimal places
    const roundedTotal = totalValue.toFixed(2);

    // !total value ends in here


    return (
        <div
            className='bg-white h-full w-full md:mt-16 mt-[3.5rem]'>
            <div className='flex flex-row justify-between item-center w-full px-5'>
                <h1
                    className='text-black/50 md:text-5xl  text-2xl
            flex flex-row items-center basis-{40%}'>
                    <FaCartShopping />
                    Cart
                </h1>
                <div className='basis-1/2 flex items-center justify-end'>
                    <button
                        className='flex justify-center 
                items-center px-2 md:px-6 py-1 rounded-md
                md:text-xl text-sm font-[200] md:font-semibold text-white bg-red-500'
                        onClick={() => removeItem()}>
                        Clear Cart
                    </button>
                </div>
            </div>
            <div
                className='h-fit w-[90vw] bg-white/30 
            flex flex-col justify-center items-center 
            gap-4 mx-auto mt-4'>
                {
                    (!cart) ?
                        <div className='text-black font-extrabold'>
                            No items to display
                        </div>
                        :
                        cart.map((element) => {
                            return (
                                <div
                                    className='w-[90%] h-fit flex 
                            flex-row justify-between items-center py-2 gap-4 bg-black/5' 
                                    key={element.id}>
                                    <div className='basis-[30%] md:basis-[20%] h-full ps-4'>
                                        <img
                                            className='aspect-2/3 h-full'
                                            src={element.image}
                                            alt="Product Image" />
                                    </div>
                                    <div className='basis-[50%]  md:flex-grow-[2] flex flex-col gap-1 h-full'>
                                        <h2>{element.title}</h2>
                                        <h3>{element.price}</h3>
                                        <div className='flex flex-row gap-3 items-center '>
                                            <button
                                                onClick={() => increaseQuantity(element.id)}
                                                className='text-sm md:text-2xl font-semibold text-white bg-green-700 rounded-md px-3'>
                                                +
                                            </button>
                                            <p>{(!element.quantity) ? `0` : `${element.quantity}`}</p>
                                            <button
                                                onClick={() => decreaseQuantity(element.id)}
                                                className='text-sm md:text-2xl font-semibold text-white bg-red-700 rounded-md px-3'>
                                                -
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
            <div
                className='h-[10vh] w-full flex 
            px-5 justify-between items-center'>
                <p
                    className='text-sm md:text-3xl font-semibold text-black'>
                    Total Value: ${roundedTotal}
                </p>
                <button
                    className='bg-green-500 py-2 px-6 text-sm rounded-lg md:text-xl font-semibold'
                onClick={()=>alert("order confirm")}>
                    Order Now
                </button>
            </div>
        </div>
    )
}

export default Cart
