import React from 'react'

export const Footer = () => {
    return (
        <div className=''>
            <div className='flex max-md:flex-col max-md:gap-5 max-md:items-start items-center justify-between px-10 p-10 border-b border-gray-300'>
                <div className='flex w-[14rem] md:w-sm mx-auto justify-between md:justify-center  gap-3 items-center capitalize max-md:border-none border-r border-gray-300'>
                    <span className='text-amber-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m22.031 10.875l-2.136-3.543a1.76 1.76 0 0 0-1.497-.846h-1.677v-.249a2.73 2.73 0 0 0-.804-1.935a2.75 2.75 0 0 0-1.94-.802H3.994a2.73 2.73 0 0 0-2.541 1.687a2.7 2.7 0 0 0-.204 1.05v8.958a1.74 1.74 0 0 0 1.507 1.722q-.007.135 0 .269a3.15 3.15 0 0 0 .948 2.279A3.24 3.24 0 0 0 6 20.46a3.28 3.28 0 0 0 2.285-.956a3.26 3.26 0 0 0 .96-2.279a2 2 0 0 0 0-.248h5.509a2 2 0 0 0 0 .248a3.15 3.15 0 0 0 .948 2.28A3.24 3.24 0 0 0 18 20.5a3.28 3.28 0 0 0 2.285-.956a3.26 3.26 0 0 0 .959-2.279a2 2 0 0 0 0-.249H22a.76.76 0 0 0 .749-.746v-2.876c0-.89-.25-1.762-.719-2.519m-14.293 6.31a1.7 1.7 0 0 1-.519 1.225a1.79 1.79 0 0 1-2.466 0a1.73 1.73 0 0 1-.508-1.234a1.6 1.6 0 0 1 .14-.687c.132-.313.359-.577.648-.757a1.74 1.74 0 0 1 .998-.288c.338 0 .668.1.948.288c.287.183.513.446.65.757c.098.215.15.45.149.687zm3.244-4.976h-4.99a1 1 0 0 1-.999-.995a.994.994 0 0 1 .998-.996h4.991a1 1 0 0 1 .998.996a.994.994 0 0 1-.998.995m0-3.424h-4.99a1 1 0 0 1-.999-.995a.994.994 0 0 1 .998-.995h4.991a1 1 0 0 1 .998.995a.994.994 0 0 1-.998.995m8.734 8.4a1.7 1.7 0 0 1-.52 1.225a1.79 1.79 0 0 1-2.465 0a1.73 1.73 0 0 1-.509-1.234a1.64 1.64 0 0 1 .33-1.006c.246-.327.599-.56.998-.657h.25a.3.3 0 0 1 .139 0h.2c.303.035.592.148.838.329c.247.181.44.425.559.707c.099.215.15.45.15.686z" /><path fill="currentColor" d="M17.96 15.434a.3.3 0 0 0-.14 0z" /></svg>                    </span>
                    <p className='max-md:w-full'>free shipping</p>
                </div>
                <div className='flex w-[14rem] md:w-sm mx-auto justify-between md:justify-center  gap-3 items-center capitalize max-md:border-none border-r border-gray-300'>
                    <span className='text-amber-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m21 15.46l-5.27-.61l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z" /></svg>
                    </span>
                    <p className='max-md:w-full'>Support 24/7 At Anytime</p>
                </div>
                <div className='flex w-[14rem] md:w-sm mx-auto justify-between md:justify-center  gap-3 items-center capitalize max-md:border-none border-r border-gray-300'>
                    <span className='text-amber-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32Zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30ZM424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56" /></svg>                    </span>
                    <p className='max-md:w-full'>Secure Payment</p>
                </div>
                <div className='flex w-[14rem] md:w-sm mx-auto justify-between md:justify-center  gap-3 items-center capitalize'>
                    <span className='text-amber-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m20.749 12l1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1h-2.199l-1.103-1.909a1 1 0 0 0-.607-.466a1 1 0 0 0-.759.1L12 3.251l-1.91-1.105a1 1 0 0 0-1.366.366L7.62 4.422H5.421a1 1 0 0 0-1 1v2.199l-1.91 1.104a1 1 0 0 0-.365 1.367L3.25 12l-1.104 1.908a1.004 1.004 0 0 0 .364 1.367l1.91 1.104v2.199a1 1 0 0 0 1 1h2.2l1.104 1.91a1.01 1.01 0 0 0 .866.5c.174 0 .347-.046.501-.135l1.908-1.104l1.91 1.104a1 1 0 0 0 1.366-.365l1.103-1.91h2.199a1 1 0 0 0 1-1v-2.199l1.91-1.104a1 1 0 0 0 .365-1.367zM9.499 6.99a1.5 1.5 0 1 1-.001 3.001a1.5 1.5 0 0 1 .001-3.001m.3 9.6l-1.6-1.199l6-8l1.6 1.199zm4.7.4a1.5 1.5 0 1 1 .001-3.001a1.5 1.5 0 0 1-.001 3.001" /></svg>                    </span>
                    <p className='max-md:w-full'>Best Offers</p>
                </div>
            </div>

            {/* company and user details */}
            <div className='p-10 md:p-20 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center capitalize'>
                <div className='flex flex-col items-start max-md:items-center justify-start w-[14rem] md:w-full  mx-auto'>
                    <h2 className='w-full text-xl'>Company</h2>
                    <ul className='w-full flex flex-col items-start max-md:items-center mt-2 md:mt-5 text-gray-500'>
                        <li className='w-full'>About us</li>
                        <li className='w-full'>contact us</li>
                        <li className='w-full'>privacy policy</li>
                        <li className='w-full'>terms and conditions</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start max-md:items-center justify-start w-[14rem] md:w-full  mx-auto'>
                    <h2 className='w-full text-xl'>my account</h2>
                    <ul className='w-full flex flex-col items-start max-md:items-center mt-2 md:mt-5 text-gray-500'>
                        <li className='w-full'>dashboard</li>
                        <li className='w-full'>my order</li>
                        <li className='w-full'>recent order</li>
                        <li className='w-full'>update profile</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start max-md:items-center justify-start w-[14rem] md:w-full  mx-auto'>
                    <h2 className='w-full text-xl'>Company</h2>
                    <ul className='w-full flex flex-col items-start max-md:items-center mt-2 md:mt-5 text-gray-500'>
                        <li className='w-full'>About us</li>
                        <li className='w-full'>contact us</li>
                        <li className='w-full'>privacy policy</li>
                        <li className='w-full'>terms and conditions</li>
                    </ul>
                </div>
            </div>

            {/* social media */}
            <div className='flex max-md:flex-col  gap-5 justify-evenly w-full rounded-md bg-gray-100 items-center p-10'>
                <div className='flex gap-5 items-center'>
                    <div className='p-3 w-fit rounded-full text-white bg-blue-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" /></svg>
                    </div>
                    <div className='p-3 w-fit rounded-full text-white bg-blue-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" /></svg>
                    </div>
                    <div className='p-3 w-fit rounded-full text-white bg-red-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1200 1200"><path fill="currentColor" d="M600 0c356.454 6.666 597.673 280.025 600 600c-6.375 340.923-280.025 597.673-600 600c-59.191-.229-116.981-9.442-169.763-24.622q16.846-27.214 33.692-60.259c23.688-48.151 34.503-99.721 46.652-149.028q7.776-31.75 22.03-83.585q15.55 29.805 56.372 51.835c71.035 34.562 159.039 23.145 222.246-9.071c88.677-50.367 140.639-128.602 168.467-216.413c53.582-203.643-15.51-399.439-200.217-478.187c-222.716-67.084-471.27 16.639-557.883 215.768c-37.816 133.072-35.578 303.927 95.896 359.61q10.372 3.888 18.79 0c12.34-7.05 26.651-68.155 23.975-80.993q-1.296-5.833-9.071-16.198c-72.663-98.369-28.379-244.763 39.524-318.144c115.467-99.179 295.177-115.283 401.08-20.734c93.934 109.584 72.6 280.13 12.311 388.77c-33.312 53.126-78 93.273-138.013 93.952c-63.17-1.398-110.815-54.854-94.601-115.334c13.779-70.979 52.015-146.255 53.132-212.527c-3.053-55.122-30.656-90.083-81.643-90.713c-81.388 10.263-114.242 86.357-115.335 155.508c2.603 33.23 4.618 67.054 19.438 94.602q-25.918 104.968-40.173 169.114c-14.567 75.873-43.132 155.229-47.3 228.726q-1.945 36.283-.648 67.387C136.638 1044.027 1.314 838.081 0 600C6.476 253.707 280.025 2.327 600 0" /></svg>
                    </div>
                    <div className='p-3 w-fit rounded-full text-white bg-blue-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" /></svg>                </div>
                    <div className='p-3 w-fit rounded-full text-white bg-green-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" /></svg>
                    </div>
                </div>
                <div className='text-center'>
                    <h2>Call Us Today!</h2>
                    <p className='text-2xl text-amber-600/50 font-bold'>+91 63 5705 5705</p>
                </div>
            </div>

            {/* company mark */}
            <p className='text-center text-gray-500  p-5'>© 2025 Purecots | Developed By @<span className='text-amber-600/50'>Fintook</span>, All rights reserved.</p>
        </div>

    )
}
