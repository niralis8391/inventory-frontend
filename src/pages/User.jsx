import { SideBar } from '../components/profile/SideBar'
import { Navigate, Outlet } from 'react-router-dom'

export const User = () => {

    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" replace />
    }

    return (
        <div className='flex w-full h-screen border-t border-gray-300'>
            <div className='w-1/5 border-r border-gray-300 h-screen'>
                <SideBar />
            </div>
            <div className='p-5 w-full'>
                <Outlet />
            </div>
        </div>
    )
}
