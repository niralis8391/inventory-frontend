import React, { useEffect, useState } from 'react'
import { categoryAction } from '../store/category-slice'
import { useDispatch, useSelector } from 'react-redux';
import { uiSliceAction } from '../store/ui-slice'
import { useNavigate } from 'react-router-dom';
import { Cart } from '../pages/Cart';
import logo from '../assets/purecotslogo.png.jpg'
import API from '../API/API';

export const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartSelector = useSelector(state => state.ui.cart)

    const [name, setName] = useState("")

    const token = localStorage.getItem("token")

    function changeHandler(e) {
        const { name, value } = e.target;
        dispatch(categoryAction.getCategory(value))
        dispatch(uiSliceAction.handleBuyNowref('buy'))
    }

    function showCartHandler() {
        dispatch(uiSliceAction.showCart(true))
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



    return (
        <div className=' w-full' style={{
            fontFamily: '"Nunito", sans-serif'
        }}>
            <div>
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
            </div>

            <div className='flex items-center justify-between p-10'>
                <img src={logo} className='w-40 h-fit cursor-pointer' onClick={() => navigate('/')} />
                <div className='flex gap-5 items-center justify-center'>
                    <select
                        name="category"
                        value=""
                        onChange={changeHandler}
                        className="rounded-md p-2 w-fit"
                    >
                        <option value="" className='bg-white text-black' disabled>Category</option>
                        <option value="fashion" className="bg-white text-black">Fashion</option>
                        {/* <option value="electronics" className="bg-white text-black">Electronics</option> */}
                        <option value="jewellery" className="bg-white text-black">Jewellery</option>
                    </select>

                    <div className='flex items-center'>
                        <input type='search' className='bg-white border focus:outline-none focus:ring-1 focus:ring-amber-500 border-gray-300 p-2 w-xl rounded-l-md' placeholder='Search this blog' />
                        <button type='button' className='p-2 bg-amber-600/60 rounded-r-md cursor-pointer text-white border border-amber-600/60'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" /></svg>
                        </button>
                    </div>
                    <select defaultValue="" className='bg-white rounded-md p-2'>
                        <option value="" disabled>Language</option>
                        <option value="english">English</option>
                        <option value="french">French</option>
                        <option value="german">German</option>
                    </select>
                </div>
                <div className='flex items-center gap-3'>
                    <button type='button' className='flex gap-2 items-center  text-black font-semibold cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 56 56"><path fill="currentColor" d="M20.008 39.649H47.36c.913 0 1.71-.75 1.71-1.758s-.797-1.758-1.71-1.758H20.406c-1.336 0-2.156-.938-2.367-2.367l-.375-2.461h29.742c3.422 0 5.18-2.11 5.672-5.461l1.875-12.399a7 7 0 0 0 .094-.89c0-1.125-.844-1.899-2.133-1.899H14.641l-.446-2.976c-.234-1.805-.89-2.72-3.28-2.72H2.687c-.937 0-1.734.822-1.734 1.76c0 .96.797 1.781 1.735 1.781h7.921l3.75 25.734c.493 3.328 2.25 5.414 5.649 5.414m31.054-25.454L49.4 25.422c-.188 1.453-.961 2.344-2.344 2.344l-29.906.023l-1.993-13.594ZM21.86 51.04a3.766 3.766 0 0 0 3.797-3.797a3.78 3.78 0 0 0-3.797-3.797c-2.132 0-3.82 1.688-3.82 3.797c0 2.133 1.688 3.797 3.82 3.797m21.914 0c2.133 0 3.82-1.664 3.82-3.797c0-2.11-1.687-3.797-3.82-3.797c-2.109 0-3.82 1.688-3.82 3.797c0 2.133 1.711 3.797 3.82 3.797" /></svg>
                        <button className='cursor-pointer' onClick={showCartHandler}>Cart</button>
                    </button>
                    {name ? <p className='capitalize font-bold bg-white w-8 text-2xl h-8 rounded-full flex justify-center items-center cursor-pointer' onClick={() => navigate('/user')}>{name}</p> : <button className='cursor-pointer text-black' onClick={() => navigate('/user')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4" /></svg>
                    </button>}
                </div>
            </div>

            {/* Cart */}
            <div className={`fixed ${cartSelector ? ' right-0' : ' -right-full'} transition-all duration-300 ease-in-out top-0 h-screen w-1/4 shadow-2xl z-60`}>
                {cartSelector && <div className='fixed inset-0 backdrop:blur-2xl bg-black/30 z-40'></div>}
                <Cart onCloseCart={closeCartHandler} />
            </div>

        </div>
    )
}
