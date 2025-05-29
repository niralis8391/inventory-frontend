import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const SideBar = ({ onCloseDashBoardHandler, onshowDashBoard }) => {

    const navigate = useNavigate()

    return (
        <aside className='flex justify-center max-md:justify-start w-full p-5 relative h-full'>
            {onshowDashBoard && <span className='absolute top-3 right-3 z-60' onClick={onCloseDashBoardHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4" /></svg>
            </span>}
            <ul className='flex flex-col items-start gap-2'>
                <NavLink to="/user" end className={({ isActive }) => `flex items-center gap-2 cursor-pointer ${isActive ? ' bg-gray-200' : ' '}  rounded-md hover:bg-gray-200 p-3 w-full`} onClick={onCloseDashBoardHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6zm2-10h4V5H5zm10 8h4v-6h-4zm0-12h4V5h-4zM5 19h4v-2H5zm4-2" /></svg>
                    Dashboard</NavLink>
                <NavLink to="/user/my-order" className={({ isActive }) => `flex items-center gap-2 cursor-pointer ${isActive ? ' bg-gray-200' : ' '}  rounded-md hover:bg-gray-200 p-3 w-full`} onClick={onCloseDashBoardHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5" /></svg>
                    My Order</NavLink>
                <NavLink to="/user/my-account" className={({ isActive }) => `flex items-center gap-2 cursor-pointer ${isActive ? ' bg-gray-200' : ' '}  rounded-md hover:bg-gray-200 p-3 w-full`} onClick={onCloseDashBoardHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></g></svg>
                    My Account</NavLink>
                <NavLink to="/user/update-profile" className={({ isActive }) => `flex items-center gap-2 cursor-pointer ${isActive ? ' bg-gray-200' : ' '}  rounded-md hover:bg-gray-200 p-3 w-full`} onClick={onCloseDashBoardHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2" /></svg>
                    Update Profile</NavLink>
                <NavLink to="/user/change-password" className={({ isActive }) => `flex items-center gap-2 cursor-pointer ${isActive ? ' bg-gray-200' : ' '}  rounded-md hover:bg-gray-200 p-3 w-full`} onClick={onCloseDashBoardHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 20V10h12v3.09c.33-.05.66-.09 1-.09s.67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2h7.81c-.35-.61-.59-1.28-.72-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm5 9c0 1.11-.89 2-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2m9 3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z" /></svg>
                    Change Password</NavLink>
                <button className='flex items-center gap-2 cursor-pointer rounded-md  hover:bg-gray-200 p-3 w-full' onClick={() => { localStorage.removeItem("token"); localStorage.removeItem("userId"); navigate('/') }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4t-.288.713T11 5H5v14h6q.425 0 .713.288T12 20t-.288.713T11 21zm12.175-8H10q-.425 0-.712-.288T9 12t.288-.712T10 11h7.175L15.3 9.125q-.275-.275-.275-.675t.275-.7t.7-.313t.725.288L20.3 11.3q.3.3.3.7t-.3.7l-3.575 3.575q-.3.3-.712.288t-.713-.313q-.275-.3-.262-.712t.287-.688z" /></svg>
                    Logout
                </button>
            </ul>
        </aside>
    )
}
