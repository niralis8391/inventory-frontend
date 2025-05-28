import React, { useEffect, useState } from 'react'
import API from '../../API/API';

export const MyAccount = () => {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const token = localStorage.getItem("token")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchCustomerDate() {
            setLoading(true)
            try {
                const response = await API.get('/customer/customerData', {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                })
                setUserData(response.data.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchCustomerDate()
    }, []);

    if (loading) {
        return <span className='w-full flex justify-center mt-5  md:mt-20 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><circle cx="12" cy="2" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(45 12 12)"><animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(90 12 12)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(135 12 12)"><animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(180 12 12)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(225 12 12)"><animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(270 12 12)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(315 12 12)"><animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle></svg>
        </span>
    }


    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Account Information</h2>
            <div className="max-w-md  bg-white rounded-2xl shadow-md p-6">
                <div className="space-y-4">
                    <div className="flex items-center">
                        <span className="text-gray-600 w-20">Name:</span>
                        <span className="text-gray-900 font-medium capitalize">{userData.name}</span>
                    </div>

                    <div className="flex items-center">
                        <span className="text-gray-600 w-20">Email:</span>
                        <span className="text-gray-900 font-medium">{userData.email}</span>
                    </div>

                    <div className="flex items-center">
                        <span className="text-gray-600 w-20">Phone:</span>
                        <span className="text-gray-900 font-medium">{userData.phone}</span>
                    </div>

                    <div className="flex items-start">
                        <span className="text-gray-600 w-20">Address:</span>
                        <span className="text-gray-900 font-medium text-right max-w-[60%]">
                            {userData.address}
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}
