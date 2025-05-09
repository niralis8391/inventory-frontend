import React, { useEffect, useRef, useState } from 'react'
import API from '../API/API';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import { uiSliceAction } from '../store/ui-slice';
import { cartAction } from '../store/cart-slice'

export const Products = () => {

  const [products, setProducts] = useState([]);

  const selectedCategory = useSelector(state => state.category.category);

  const sectionRef = useRef(null);
  const scrollTarget = useSelector(state => state.ui.target);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (scrollTarget === 'buy') {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      dispatch(uiSliceAction.resetScroll());
    }
  }, [scrollTarget, dispatch])


  useEffect(() => {
    async function fetchByCategory() {
      setLoading(true)
      try {

        const response = await API.get(`/product/getProductByCategory/${selectedCategory}`)
        if (response.status === 200) {
          setProducts(response.data.product)
          dispatch(uiSliceAction.handleBuyNowref('buy'))
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchByCategory()
  }, [selectedCategory]);

  function addToCartHAndler(product) {
    dispatch(cartAction.addItem(product))
    dispatch(uiSliceAction.showCart())
  }

  if (loading) {
    return <span className='w-full justify-center items-center flex h-[30rem] md:h-[20rem]'>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><circle cx="12" cy="2" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(45 12 12)"><animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(90 12 12)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(135 12 12)"><animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(180 12 12)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(225 12 12)"><animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(270 12 12)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(315 12 12)"><animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle></svg>
    </span>
  }


  return (
    <div className='p-10 h-2xl h-full bg-gray-100' ref={sectionRef}>
      {/* {loading && <p className=' capitalize w-full h-screen z-60 text-white text-2xl bg-amber-600/50 absolute left-0 top-0 flex items-center justify-center'>Loading...</p>} */}
      {products.length > 0 && <h2 className='capitalize text-2xl font-semibold p-3 w-1/4 max-md:w-full text-center mx-auto border-b border-gray-300 rounded-xl'>{selectedCategory}</h2>}
      <div className="flex flex-wrap max-md:justify-center items-center gap-3 w-full  h-full mt-20">
        {products.length > 0 ?
          products.map((product) => (
            <div className="bg-white border-2 w-[15rem] h-xl flex flex-col justify-between  items-start border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl rounded-lg" key={product._id}>
              <img
                src={product.image}
                alt={product.productName}
                className='w-full h-64 object-cover rounded-t-md'
              />
              <div className='flex flex-col justify-between items-start p-4'>
                <h2 className="text-lg font-semibold capitalize mt-4">{product.productName}</h2>
                <h3 className="text-lg text-gray-600 capitalize py-2 h-20">{product.description}</h3>
                <p className="text-amber-800 font-semibold">₹{product.price}</p>
                <button className='px-5 bg-black text-white rounded-md mt-5 py-1 hover:cursor-pointer' onClick={() => addToCartHAndler(product)}>Add to cart</button>
              </div>
            </div>
          ))
          :
          <p className='m-5 w-full text-2xl text-center capitalize'>no products found.</p>
        }

      </div>

    </div>
  )
}
