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

    useEffect(() => {
        async function fetchCustomerDate() {
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
            }
        }
        fetchCustomerDate()
    }, []);

    return (
        <div className="max-w-md  bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Account Information</h2>

            <div className="space-y-4">
                <div className="flex items-center">
                    <span className="text-gray-600 w-20">Name:</span>
                    <span className="text-gray-900 font-medium">{userData.name}</span>
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

    )
}
