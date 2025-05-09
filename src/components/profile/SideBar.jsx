import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const SideBar = () => {

    const navigate = useNavigate()

    return (
        <aside className='flex justify-center p-5 w-full'>
            <ul className='flex flex-col items-start gap-2'>
                <NavLink to="/user" end className={({ isActive }) => `flex items-center gap-2 cursor-pointer ${isActive ? ' bg-gray-200' : ' '}  rounded-md hover:bg-gray-200 p-3 w-full`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6zm2-10h4V5H5zm10 8h4v-6h-4zm0-12h4V5h-4zM5 19h4v-2H5zm4-2" /></svg>
                    Dashboard</NavLink>
                <NavLink to="/user/my-order" className={({ isActive }) => `flex items-center gap-2 cursor-pointer ${isActive ? ' bg-gray-200' : ' '}  rounded-md hover:bg-gray-200 p-3 w-full`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="2" stroke-dashoffset="2" d="M4 5h0.01"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.1s" values="2;0" /></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 5h12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.2s" values="14;0" /></path><path stroke-dasharray="2" stroke-dashoffset="2" d="M4 10h0.01"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.1s" values="2;0" /></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 10h12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="14;0" /></path><path stroke-dasharray="2" stroke-dashoffset="2" d="M4 15h0.01"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.1s" values="2;0" /></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 15h12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0" /></path><path stroke-dasharray="2" stroke-dashoffset="2" d="M4 20h0.01"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.1s" values="2;0" /></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 20h12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="14;0" /></path></g></svg>
                    My Order</NavLink>
                <NavLink to="/user/my-account" className={({ isActive }) => `flex items-center gap-2 cursor-pointer ${isActive ? ' bg-gray-200' : ' '}  rounded-md hover:bg-gray-200 p-3 w-full`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>
                    My Account</NavLink>
                <NavLink to="/user/update-profile" className={({ isActive }) => `flex items-center gap-2 cursor-pointer ${isActive ? ' bg-gray-200' : ' '}  rounded-md hover:bg-gray-200 p-3 w-full`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454q-.557-.31-.947-.664l-2.668 1.135l-1.865-3.25l2.306-1.739q-.045-.27-.073-.558q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626L3.258 9.126l1.865-3.212L7.771 7.03q.448-.373.97-.673q.52-.3 1.013-.464L10.134 3h3.732l.361 2.912q.575.202 1.016.463t.909.654l2.725-1.115l1.865 3.211l-2.382 1.796q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.393-.94.673t-.985.445L13.866 21zM11 20h1.956l.369-2.708q.756-.2 1.36-.549q.606-.349 1.232-.956l2.495 1.063l.994-1.7l-2.189-1.644q.125-.427.166-.786q.04-.358.04-.72q0-.38-.04-.72t-.166-.747l2.227-1.683l-.994-1.7l-2.552 1.07q-.454-.499-1.193-.935q-.74-.435-1.4-.577L13 4h-1.994l-.312 2.689q-.756.161-1.39.52q-.633.358-1.26.985L5.55 7.15l-.994 1.7l2.169 1.62q-.125.336-.175.73t-.05.82q0 .38.05.755t.156.73l-2.15 1.645l.994 1.7l2.475-1.05q.589.594 1.222.953q.634.359 1.428.559zm.973-5.5q1.046 0 1.773-.727T14.473 12t-.727-1.773t-1.773-.727q-1.052 0-1.776.727T9.473 12t.724 1.773t1.776.727M12 12" /></svg>
                    Update Profile</NavLink>
                <NavLink to="/user/change-password" className={({ isActive }) => `flex items-center gap-2 cursor-pointer ${isActive ? ' bg-gray-200' : ' '}  rounded-md hover:bg-gray-200 p-3 w-full`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 20V10h12v3.09c.33-.05.66-.09 1-.09s.67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2h7.81c-.35-.61-.59-1.28-.72-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm5 9c0 1.11-.89 2-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2m9 3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z" /></svg>
                    Change Password</NavLink>
                <button className='flex items-center gap-2 cursor-pointer rounded-md  hover:bg-gray-200 p-3 w-full' onClick={() => { localStorage.removeItem("token"); navigate('/') }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4t-.288.713T11 5H5v14h6q.425 0 .713.288T12 20t-.288.713T11 21zm12.175-8H10q-.425 0-.712-.288T9 12t.288-.712T10 11h7.175L15.3 9.125q-.275-.275-.275-.675t.275-.7t.7-.313t.725.288L20.3 11.3q.3.3.3.7t-.3.7l-3.575 3.575q-.3.3-.712.288t-.713-.313q-.275-.3-.262-.712t.287-.688z" /></svg>
                    Logout
                </button>
            </ul>
        </aside>
    )
}
