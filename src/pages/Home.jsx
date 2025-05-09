import React from 'react'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { Products } from '../components/Products'

export const Home = () => {
    return (
        <div className='relative'>
            {/* <Main /> */}
            <Products />
            <Footer />
        </div>
    )
}
