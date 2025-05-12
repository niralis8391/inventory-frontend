import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'

import { categoryAction } from '../store/category-slice'
import { useDispatch, useSelector } from 'react-redux';
import { uiSliceAction } from '../store/ui-slice'

import { Cart } from '../pages/Cart';
import logo from '../assets/purecotslogo.png.jpg'
import API from '../API/API';

export const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartSelector = useSelector(state => state.ui.cart)

    const cartItems = useSelector(state => state.cart.items)
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const [name, setName] = useState("");
    const [menu, setMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const token = localStorage.getItem("token");

    const toggleDropdown = () => setShowDropdown(!showDropdown);


    function changeHandler(category) {
        dispatch(categoryAction.getCategory(category))
        setMenu(!menu)
        toggleDropdown()
    }

    function showCartHandler() {
        dispatch(uiSliceAction.showCart(true))
        setMenu(false)
    }

    function closeCartHandler() {
        dispatch(uiSliceAction.showCart(false))
    }

    useEffect(() => {
        async function fetchName() {
            try {
                const response = await API.get('/customer/customerData', {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
                if (response.status === 200) {
                    setName(response.data.data.name[0])
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchName()
    }, [])

    console.log(menu)


    return (
        <div className=' w-full' style={{
            fontFamily: '"Nunito", sans-serif'
        }}>
            {/* <div className='hidden md:block'>
                <div className="w-full bg-black text-white p-3">
                    <div className="py-2">
                        <div className="flex justify-center">
                            <ul className="flex flex-wrap gap-6 text-sm font-medium">
                                <li><a href="index.html" className="hover:text-amber-600">Best Sellers</a></li>
                                <li><a href="product_details.html" className="hover:text-amber-600">New Releases</a></li>
                                <li><a href="#" className="hover:text-amber-600">Today's Deals</a></li>
                                <li><a href="#" className="hover:text-amber-600">Customer Service</a></li>
                                <li><a href="register.html" className="hover:text-amber-600">Register</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='relative flex items-center justify-between p-10'>
                <img src={logo} className='w-50 h-fit cursor-pointer' onClick={() => navigate('/')} />
                <div className=' block md:hidden'>
                    {!menu && <button className='fixed z-60 top-8 right-5 p-1 rounded-md border-2' onClick={() => setMenu(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6h10M4 12h16M7 12h13M4 18h10" /></svg>
                    </button>}
                    {menu && <button className='fixed z-60 top-8 right-5' onClick={() => setMenu(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4" /></svg>
                    </button>}
                </div>
                <div className={`max-md:fixed max-md:h-full max-md:z-50 max-md:justify-start max-md:items-start max-md:w-xs max-md:p-5 max-md:shadow-2xl max-md:bg-white ${menu ? 'right-0' : '-right-full'} max-md:flex-col max-md:top-0 flex items-center justify-between gap-2 transition-all duration-300 ease-in-out`}>
                    <div className='flex gap-5 items-center justify-center'>
                        <div class="">
                            <div class="relative group transition-all duration-300 ease-in-out">
                                <button
                                    onClick={toggleDropdown}
                                    class="px-4 py-2 rounded-lg flex gap-1 items-start cursor-pointer"
                                >
                                    Categories
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z" /></svg>
                                </button>
                                {showDropdown && (
                                    <div className="absolute left-0 top-10 z-50 transition-all duration-300 ease-in-out w-40 bg-white shadow-lg rounded-lg border">
                                        <ul className="text-gray-800 divide-y divide-gray-200">
                                            <li className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer" onClick={() => changeHandler('fashion')}>Fashion</li>
                                            <li className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer" onClick={() => changeHandler('jewellery')}>Jewellery</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* floating category */}
                        {/* <div class="fixed left-4 top-1/3 transform -translate-y-1/2 z-50 transition-all duration-300 ease-in-out hidden max-[920px]:block">
                            <div class="relative group transition-all duration-300 ease-in-out">
                                <motion.button
                                    class="bg-amber-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-amber-700 flex gap-1 items-start cursor-pointer"
                                    animate={{ y: [0, 5, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 11L12 2l5.5 9zm11 11q-1.875 0-3.187-1.312T13 17.5t1.313-3.187T17.5 13t3.188 1.313T22 17.5t-1.312 3.188T17.5 22M3 21.5v-8h8v8zM17.5 20q1.05 0 1.775-.725T20 17.5t-.725-1.775T17.5 15t-1.775.725T15 17.5t.725 1.775T17.5 20M5 19.5h4v-4H5zM10.05 9h3.9L12 5.85zm7.45 8.5" /></svg>
                                    Categories
                                </motion.button>
                                <div class="absolute left-0 top-10 transition-all duration-300 ease-in-out w-40 hidden group-hover:block bg-white shadow-lg rounded-lg border">
                                    <ul class="text-gray-800 divide-y divide-gray-200">
                                        <li class="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer">Fashion</li>
                                        <li class="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer">Jewellery</li>
                                        <li class="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer">Electronics</li>
                                        <li class="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer">Home Decor</li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}


                        <div className='flex items-center max-[950px]:hidden'>
                            <input type='search' className='bg-white border focus:outline-none focus:ring-1 focus:ring-amber-500 border-gray-300 p-2 w-sm rounded-l-md' placeholder='Search this blog' />
                            <button type='button' className='p-2 bg-orange-200 rounded-r-md cursor-pointer text-white border border-orange-200'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" /></svg>
                            </button>
                        </div>
                        {/* <select defaultValue="" className='bg-white rounded-md p-2'>
                        <option value="" disabled>Language</option>
                        <option value="english">English</option>
                        <option value="french">French</option>
                        <option value="german">German</option>
                    </select> */}
                    </div>

                    <div className=''>
                        <div className='flex max-md:flex-col max-md:items-start items-center gap-3'>
                            <button type='button' className='flex gap-2 items-center  text-black font-semibold cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 56 56"><path fill="currentColor" d="M20.008 39.649H47.36c.913 0 1.71-.75 1.71-1.758s-.797-1.758-1.71-1.758H20.406c-1.336 0-2.156-.938-2.367-2.367l-.375-2.461h29.742c3.422 0 5.18-2.11 5.672-5.461l1.875-12.399a7 7 0 0 0 .094-.89c0-1.125-.844-1.899-2.133-1.899H14.641l-.446-2.976c-.234-1.805-.89-2.72-3.28-2.72H2.687c-.937 0-1.734.822-1.734 1.76c0 .96.797 1.781 1.735 1.781h7.921l3.75 25.734c.493 3.328 2.25 5.414 5.649 5.414m31.054-25.454L49.4 25.422c-.188 1.453-.961 2.344-2.344 2.344l-29.906.023l-1.993-13.594ZM21.86 51.04a3.766 3.766 0 0 0 3.797-3.797a3.78 3.78 0 0 0-3.797-3.797c-2.132 0-3.82 1.688-3.82 3.797c0 2.133 1.688 3.797 3.82 3.797m21.914 0c2.133 0 3.82-1.664 3.82-3.797c0-2.11-1.687-3.797-3.82-3.797c-2.109 0-3.82 1.688-3.82 3.797c0 2.133 1.711 3.797 3.82 3.797" /></svg>
                                <button className='cursor-pointer' onClick={showCartHandler}>Cart</button>
                            </button>
                            {name ? <p className='capitalize font-bold text-white p-2 w-10 h-10 bg-amber-800 text-2xl rounded-full flex justify-center items-center cursor-pointer' onClick={() => { navigate('/user'); setMenu(!menu) }}>{name}</p> : <button className='cursor-pointer text-black' onClick={() => navigate('/user')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4" /></svg>
                            </button>}
                        </div>
                    </div>

                    {/* floating cart */}
                    <motion.div
                        className="fixed w-24 h-30 right-4 top-1/3 z-50 bg-orange-200 rounded-md cursor-pointer"
                        onClick={showCartHandler}
                        animate={{ y: [0, 5, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <div className=" flex h-full flex-col justify-center items-center">
                            <span className='w-full h-full flex-col flex justify-center items-center text-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.298 9.566H4.702a1.96 1.96 0 0 0-1.535.744a1.94 1.94 0 0 0-.363 1.66l1.565 6.408a3.9 3.9 0 0 0 1.4 2.072c.682.519 1.517.8 2.376.8h7.708c.859 0 1.694-.281 2.376-.8a3.9 3.9 0 0 0 1.4-2.072l1.565-6.407a1.94 1.94 0 0 0-1.044-2.208a2 2 0 0 0-.854-.197M8.087 13.46v3.895M12 13.46v3.895m3.913-3.895v3.895m2.935-7.789a6.8 6.8 0 0 0-2.006-4.82A6.86 6.86 0 0 0 12 2.75a6.86 6.86 0 0 0-4.842 1.996a6.8 6.8 0 0 0-2.005 4.82" /></svg>
                                {cartItems.length} Items
                            </span>
                            <span className="w-full h-1/2 rounded-b-md flex justify-center items-center text-md bg-amber-800 text-white ">
                                Rs. {totalAmount}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Cart */}
            <div className={`fixed ${cartSelector ? ' right-0' : ' -right-full'} transition-all duration-300 ease-in-out top-0 h-screen w-xs shadow-2xl z-60`}>
                {cartSelector && <div className='fixed inset-0 backdrop:blur-2xl bg-black/30 z-40'></div>}
                <Cart onCloseCart={closeCartHandler} />
            </div>

        </div>
    )
}
