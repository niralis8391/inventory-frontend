import React from 'react'
import background from '../assets/banner-bg.png'
import { useDispatch } from 'react-redux';
import { uiSliceAction } from '../store/ui-slice';

export const Main = () => {

    const dispatch = useDispatch();

    const handleBuyNowClick = () => {
        dispatch(uiSliceAction.handleBuyNowref('buy'));
    };


    return (
        <div className='w-full  flex flex-col items-center'>
            {/* <img src={background} className='w-full h-fit' /> */}
            <h1 className='text-7xl font-bold text-center text-white capitalize mt-20' style={{
                fontFamily: '"Nunito", sans-serif'
            }}>Get Start<br />
                Your favriot shoping</h1>
            <button onClick={handleBuyNowClick} type='button' className='px-5 py-1 bg-black text-white mt-5 text-2xl rounded-md cursor-pointer'>Buy Now</button>
        </div>
    )
}
