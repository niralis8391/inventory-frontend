import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cartAction } from '../store/cart-slice';
import { orderAction } from '../store/order-slice';
import { useNavigate } from 'react-router-dom';

export const Cart = ({ onCloseCart }) => {

    const cartItems = useSelector(state => state.cart.items)
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const [storedItems, setStoredItems] = useState([])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const stored = localStorage.getItem("cart");
        if (stored) {
            setStoredItems(JSON.parse(stored));
        }
    }, [cartItems]);

    function placeOrderHandler(items) {
        const placeOrder = {
            items,
            totalAmount
        }
        onCloseCart()
        dispatch(orderAction.placeOrder(placeOrder))
        navigate('/user/checkout')
    }



    return (
        <div className='relative z-50 bg-white h-full'>
            <div className='flex itmes-center justify-between p-5 bg-gray-200'>
                <h2 className='text-xl font-bold flex gap-2'>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4" /><path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 18L12 9m7.5 9l-7-8.5m-8 .5L12 21l7.5-11" /><path stroke-linecap="round" d="M3.864 16.455c.546 2.183.819 3.274 1.632 3.91C6.31 21 7.435 21 9.685 21h4.63c2.25 0 3.375 0 4.19-.635c.813-.636 1.086-1.727 1.631-3.91c.858-3.432 1.287-5.147.387-6.301C19.622 9 17.853 9 14.316 9H9.685c-3.538 0-5.306 0-6.207 1.154c-.529.677-.6 1.548-.394 2.846" /></g></svg>
                    </p>
                    Shopping Cart</h2>
                <button className='cursor-pointer flex items-center text-gray-500' onClick={onCloseCart}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="m12 13.414l5.657 5.657a1 1 0 0 0 1.414-1.414L13.414 12l5.657-5.657a1 1 0 0 0-1.414-1.414L12 10.586L6.343 4.929A1 1 0 0 0 4.93 6.343L10.586 12l-5.657 5.657a1 1 0 1 0 1.414 1.414z" /></g></svg>
                    Close
                </button>
            </div>
            <div className='flex flex-col'>
                {storedItems.length > 0 ?
                    <div className=''>
                        {storedItems.map((items) => {
                            return <div className='flex gap-3 items-center p-2'>
                                <img src={items.image} className='w-20 h-20' />
                                <div>
                                    <p className='font-semibold'>{items.productName}</p>
                                    <p className='text-gray-500'>Rs. {items.price}</p>
                                    <span className='flex gap-5 items-center px-1 rounded-md text-lg border border-gray-300'>
                                        <button className='text-2xl cursor-pointer' onClick={() => dispatch(cartAction.removeItem(items))}>-</button>
                                        <p>{items.quantity}</p>
                                        <button className='text-2xl cursor-pointer' onClick={() => dispatch(cartAction.addItem(items))}>+</button>
                                    </span>
                                </div>
                            </div>
                        })}
                        <p className='m-2 rounded-md capitalize p-3 bg-amber-800 flex items-center justify-between cursor-pointer text-white text-md' onClick={() => placeOrderHandler(storedItems)}>Proceed to checkout
                            <div className='flex flex-col items-center text-sm'>
                                <span className='bg-white text-black p-2 rounded-md w-fit'>Rs. {totalAmount}</span>
                            </div>
                        </p>
                    </div>

                    :
                    <p className='capitalize flex gap-3 flex-col items-center justify-center mt-44'>
                        <p className='p-3 text-white rounded-full bg-orange-300'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 16 16"><path fill="currentColor" d="M2.5 2a.5.5 0 0 0 0 1h.246a.5.5 0 0 1 .48.363l1.586 5.55A1.5 1.5 0 0 0 6.254 10h4.569a1.5 1.5 0 0 0 1.393-.943l1.474-3.686A1 1 0 0 0 12.762 4H4.448l-.261-.912A1.5 1.5 0 0 0 2.746 2zm3.274 6.637L4.734 5h8.028l-1.475 3.686a.5.5 0 0 1-.464.314H6.254a.5.5 0 0 1-.48-.363M6.5 14a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m4 1a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1" /></svg>
                        </p>
                        <p className='capitalize text-lg'>your cart is empty</p>
                        <p className='w-full px-10 text-center text-gray-500 text-sm'>No items added in your cart. Please add product to your cart list.</p>
                    </p>
                }

            </div>
        </div>
    )
}
