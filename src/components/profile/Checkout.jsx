import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import API from '../../API/API';
import { useNavigate } from 'react-router-dom';
import { cartAction } from '../../store/cart-slice';
import PaymentMethod from '../PaymentMethod';

export const Checkout = () => {

    const cartItems = useSelector(state => state.cart.items)
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const dispatch = useDispatch()

    const token = localStorage.getItem("token")

    const navigate = useNavigate()

    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [shippingDetails, setShippingDetails] = useState({
        name: "",
        phone: null,
        address: "",
        method: ""
    });

    useEffect(() => {
        if (cartItems.length === 0) {
            navigate('/user/my-order');
        }
    }, [cartItems, navigate]);


    useEffect(() => {
        async function fetchCustomerDate() {
            try {
                const response = await API.get('/customer/customerData', {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                })
                const data = response.data.data;
                setUserData(data);
                setShippingDetails((prev) => ({
                    ...prev,
                    name: data.name || "",
                    phone: data.phone || "",
                    address: data.address || ""
                }));
            } catch (error) {
                console.log(error)
            }
        }
        fetchCustomerDate()
    }, []);

    function shippingDetailsChangeHandler(e) {
        const { name, value } = e.target
        setShippingDetails((predata) => ({
            ...predata,
            [name]: value
        }))
    }

    function getPaymentMethod(method) {
        setShippingDetails((predata) => ({
            ...predata,
            method: method
        }))
    }


    async function confirmOrder() {
        setLoading(true)
        try {
            const response = await API.post('/order/createOrder', { items: cartItems, totalAmount: totalAmount, shippingDetails: shippingDetails }, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
            if (response.status === 200) {
                navigate('/user/my-order')
                dispatch(cartAction.cleaneCart())
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <span className='w-full flex justify-center mt-5  md:mt-20 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><circle cx="12" cy="2" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(45 12 12)"><animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(90 12 12)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(135 12 12)"><animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(180 12 12)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(225 12 12)"><animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(270 12 12)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(315 12 12)"><animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle></svg>
        </span>
    }


    return (
        <div className='flex items-start w-full max-md:flex-col-reverse'>
            <div className='w-full flex flex-col items-start gap-5 max-md:mt-5'>
                <div className='max-sm:w-full'>
                    <form className='text-md'>
                        <h2 className='capitalize text-xl'>01. personal details</h2>
                        <div className='flex max-sm:flex-col w-full gap-5 max-sm:gap-3 text-gray-500 mt-3'>
                            <label>
                                Name:
                                <input type='text' value={shippingDetails.name || ""} name='name' className='border border-gray-300 text-black p-2 rounded-md block max-sm:w-full focus:outline-none focus:ring-1 focus:ring-amber-500' onChange={shippingDetailsChangeHandler} />
                            </label>
                            <label>
                                Email:
                                <input type='email' name='email' value={userData.email || ""} className='border border-gray-300 p-2 rounded-md block disabled:hover:cursor-not-allowed max-sm:w-full focus:outline-none focus:ring-1 focus:ring-amber-500' disabled />
                            </label>
                        </div>
                        <div className='mt-3'>
                            <label className='text-gray-500'>
                                Phone:
                                <input type='text' name='phone' value={shippingDetails.phone || ""} className='border text-black border-gray-300 p-2 rounded-md block max-sm:w-full focus:outline-none focus:ring-1 focus:ring-amber-500' onChange={shippingDetailsChangeHandler} />
                            </label>
                        </div>
                        <div className='mt-8'>
                            <h2 className='capitalize text-xl'>02. shipping details</h2>
                            <div className='mt-3 text-gray-500'>
                                <label>
                                    Address
                                    <textarea name="address" id="" onChange={shippingDetailsChangeHandler} value={shippingDetails.address || ""} className='border text-black border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-amber-500'>

                                    </textarea>
                                </label>
                            </div>
                        </div>
                        <PaymentMethod onPaymentMethod={getPaymentMethod} />
                    </form>
                    <div className='flex items-center gap-5 mt-5 '>
                        <button className='capitalize w-full p-3 rounded-md border-2 border-transparent hover:border-gray-300 bg-gray-200 text-lg text-gray-600 cursor-pointer flex items-center' onClick={() => navigate('/')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 9.5H7.41l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l3 3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-1.3-1.29H17a1 1 0 0 1 1 1v4a1 1 0 0 0 2 0v-4a3 3 0 0 0-3-3" /></svg>
                            Continue Shopping</button>
                        <button type='button' className='capitalize w-full p-3 rounded-md border-2 border-transparent bg-amber-800 text-white  transition-all duration-300 ease-in-out hover:bg-amber-600/70  text-lg cursor-pointer' onClick={confirmOrder}>confirm Order</button>
                    </div>
                </div>
            </div>
            <div className='w-full p-3 border border-gray-300 rounded-md '>
                <h2 className='capitalize text-xl font-semibold'>Order Summary</h2>
                <div className='flex flex-wrap'>
                    {cartItems.map((items) => {
                        return <div className='flex gap-3 items-center p-2 mt-5' key={items._id}>
                            <img src={items.image.url} className='w-20 h-20' />
                            <div>
                                <p className='font-semibold'>{items.productName}</p>
                                <p className='text-gray-500'>Rs. {items.price}</p>
                                <span className='flex gap-5 items-center px-1 rounded-md'>
                                    <p>Qty: {items.quantity}</p>
                                </span>
                            </div>
                        </div>
                    })}
                </div>
                <div className='p-3 font-semibold capitalize border-t border-gray-300 mt-5 flex items-center justify-between cursor-pointer  text-xl' onClick={() => placeOrderHandler(storedItems)}>Total Cost
                    <div className='flex flex-col items-center text-sm'>
                        <span className='bg-white text-black rounded-md w-fit font-bold text-2xl'>Rs. {totalAmount}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
