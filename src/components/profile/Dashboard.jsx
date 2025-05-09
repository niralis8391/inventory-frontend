import React from 'react'

export const Dashboard = () => {
    return (
        <div>
            <h2 className='text-xl font-semibold'>Dashboard</h2>
            <div className='flex items-center gap-5 mt-5 max-md:flex-col max-md:items-start'>
                <div className='flex items-center gap-3 p-5 border border-gray-300 rounded-md w-[15rem]'>
                    <p className='p-2 rounded-full bg-orange-300 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1"><circle cx="10" cy="19" r="1.5" /><circle cx="17" cy="19" r="1.5" /><path stroke-linecap="round" stroke-linejoin="round" d="M3.5 4h2l3.504 11H17" /><path stroke-linecap="round" stroke-linejoin="round" d="M8.224 12.5L6.3 6.5h12.507a.5.5 0 0 1 .475.658l-1.667 5a.5.5 0 0 1-.474.342z" /></g></svg>
                    </p>
                    <div>
                        <h3 className='text-gray-500'>Total Orders</h3>
                        <p className='font-semibold'>0</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 p-5 border border-gray-300 rounded-md w-[15rem]'>
                    <p className='p-2 rounded-full bg-orange-300 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M6.876 15.124A6.002 6.002 0 0 0 17.658 14h2.09a8.003 8.003 0 0 1-14.316 2.568L3 19v-6h6zm10.249-6.249A6.004 6.004 0 0 0 6.34 10H4.25a8.005 8.005 0 0 1 14.32-2.57L21 5v6h-6z" /></svg>
                    </p>
                    <div>
                        <h3 className='text-gray-500'>Pending Orders</h3>
                        <p className='font-semibold'>0</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 p-5 border border-gray-300 rounded-md w-[15rem]'>
                    <p className='p-2 rounded-full bg-orange-300 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="m21.47 11.185l-1.03-1.43a2.5 2.5 0 0 0-2.03-1.05h-4.38v-2.14a2.5 2.5 0 0 0-2.5-2.5H4.56a2.507 2.507 0 0 0-2.5 2.5v9.94a1.5 1.5 0 0 0 1.5 1.5h1.22a2.242 2.242 0 0 0 4.44 0h5.56a2.242 2.242 0 0 0 4.44 0h1.22a1.5 1.5 0 0 0 1.5-1.5v-3.87a2.5 2.5 0 0 0-.47-1.45M7 18.935a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 7 18.935m6.03-1.93H9.15a2.257 2.257 0 0 0-4.3 0H3.56a.5.5 0 0 1-.5-.5v-9.94a1.5 1.5 0 0 1 1.5-1.5h6.97a1.5 1.5 0 0 1 1.5 1.5Zm3.97 1.93a1.25 1.25 0 1 1 1.25-1.25a1.25 1.25 0 0 1-1.25 1.25m3.94-2.43a.5.5 0 0 1-.5.5h-1.29a2.257 2.257 0 0 0-4.3 0h-.82v-7.3h4.38a1.52 1.52 0 0 1 1.22.63l1.03 1.43a1.53 1.53 0 0 1 .28.87Z" /><path fill="currentColor" d="M18.029 12.205h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1" /></svg>
                    </p>
                    <div>
                        <h3 className='text-gray-500'>Processing Order</h3>
                        <p className='font-semibold'>0</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 p-5 border border-gray-300 rounded-md w-[15rem]'>
                    <p className='p-2 rounded-full bg-orange-300 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 2048 2048"><path fill="currentColor" d="m1491 595l90 90l-749 749l-365-365l90-90l275 275zM1024 0q141 0 272 36t245 103t207 160t160 208t103 245t37 272q0 141-36 272t-103 245t-160 207t-208 160t-245 103t-272 37q-141 0-272-36t-245-103t-207-160t-160-208t-103-244t-37-273q0-141 36-272t103-245t160-207t208-160T751 37t273-37m0 1920q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32q-123 0-237 32t-214 90t-182 141t-140 181t-91 214t-32 238q0 123 32 237t90 214t141 182t181 140t214 91t238 32" /></svg>
                    </p>
                    <div>
                        <h3 className='text-gray-500'>Complete Orders</h3>
                        <p className='font-semibold'>0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
