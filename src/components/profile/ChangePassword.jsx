import React from 'react'
import { useState } from 'react'
import API from '../../API/API'

export const ChangePassword = () => {

    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("");

    const token = localStorage.getItem("token")


    async function submitHandler(e) {
        e.preventDefault()
        try {
            const response = await API.post("/customer/reset", { email }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            if (response.status === 200) {
                setMessage("An Email Sent to your email to the Change Password")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Enter Your Email:</h2>
            <form onSubmit={submitHandler} className='border flex flex-col justify-start shadow-2xl mt-10 border-gray-300 w-1/2 max-md:w-xs mx-auto p-5 bg-white rounded-xl'>
                {message && <div className='w-full p-3 rounded-md text-center capitalize bg-orange-100 mb-5'>{message}</div>}
                <label className='text-xl flex flex-col items-start'>
                    Email:
                    <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} className='p-2 rounded-md border border-gray-300 block w-full focus:outline-none focus:ring-1 focus:ring-amber-500' />
                </label>
                <button className='w-fit bg-amber-800 px-5 py-2 rounded-md text-white my-3 cursor-pointer'>Submit</button>
            </form>
        </>
    )
}
