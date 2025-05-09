import React, { useEffect, useState } from 'react'
import API from '../../API/API';
import { useNavigate } from 'react-router-dom';

export const UpdataProfile = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const navigate = useNavigate()

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
                setFormData(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCustomerDate()
    }, []);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.put('/customer/updateProfile', formData, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            console.log(response)
            if (response.status === 200) {
                navigate('/user/my-account')
            }
        } catch (error) {
            console.log(error)
        }
        console.log('Updating Profile:', formData);
    };

    return (
        <div className=" bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Update Profile</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-600 mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-600 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-600 mb-1">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-600 mb-1">Address</label>
                    <textarea
                        name="address"
                        rows="3"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-fit px-5 cursor-pointer bg-amber-600/50  text-white py-2 rounded-lg hover:bg-amber-700 transition duration-200"
                >
                    Save Changes
                </button>
            </form>
        </div>)
}
