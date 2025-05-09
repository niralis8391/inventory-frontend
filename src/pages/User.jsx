import { useState } from 'react';
import { SideBar } from '../components/profile/SideBar'
import { Navigate, Outlet } from 'react-router-dom'

export const User = () => {

    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" replace />
    }

    const [showDashBoard, setShowDashBoard] = useState(false)

    function showDashBoardHandler() { setShowDashBoard(true) }
    function closeDashBoardHandler() { setShowDashBoard(false) }

    return (
        <div className='flex w-full h-[30rem] max-md:h-full border-t border-b border-gray-300 relative'>
            <div className={`w-1/5 border-r border-gray-300 h-full max-md:absolute ${showDashBoard ? 'left-0' : '-left-full'} max-md:w-xs max-md:bg-white max-md:z-60 transition-all duration-300 ease-in-out`}>
                <div className='block md:hidden'>
                    {!showDashBoard && <span className='fixed top-32 left-0 bg-amber-800 text-white p-2 rounded-r-md' onClick={showDashBoardHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414" /></svg>
                    </span>}

                </div>
                <SideBar onshowDashBoard={showDashBoard} onCloseDashBoardHandler={closeDashBoardHandler} />
            </div>
            <div className='p-5 w-full max-md:py-16'>
                <Outlet />
            </div>
        </div>
    )
}
