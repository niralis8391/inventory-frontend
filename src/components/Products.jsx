import React, { useEffect, useRef, useState } from 'react'
import API from '../API/API';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import { uiSliceAction } from '../store/ui-slice';
import { cartAction } from '../store/cart-slice'
import { suggessionAction } from '../store/suggest-slice'


export const Products = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [bigImage, setBigImage] = useState(null)

  const selectedCategory = useSelector(state => state.category.category);
  const querySlice = useSelector(state => state.suggession.query);
  const suggessionProduct = useSelector(state => state.suggession.products);

  const sectionRef = useRef(null);
  const scrollTarget = useSelector(state => state.ui.target);
  const dispatch = useDispatch();


  async function fetchSuggestions(e) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await API.get(`/product/suggest?search=${query}`);
      dispatch(suggessionAction.searchProduct(res.data))
      dispatch(suggessionAction.setQuery(query))
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 500);
    }
  }


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

  useEffect(() => {
    setProducts(suggessionProduct)
  }, [querySlice])


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
    <div className='p-10 md:p-16 h-2xl h-full bg-gray-100' ref={sectionRef}>
      <form className='flex justify-center items-center min-[950px]:hidden' onSubmit={fetchSuggestions}>
        <input
          type='search'
          className='bg-white border focus:outline-none focus:ring-1 focus:ring-amber-500 border-gray-300 p-2 w-sm rounded-l-md'
          placeholder='Search this blog'
          required
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='p-2 bg-orange-200 rounded-r-md cursor-pointer text-white border border-orange-200'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" /></svg>
        </button>
      </form>
      {/* {products.length > 0 && !query.length && (
        <h2 className='mt-3 capitalize text-2xl font-semibold p-3 w-1/4 max-md:w-full text-center mx-auto border-b border-gray-300 rounded-xl'>
          {selectedCategory}
        </h2>
      )} */}
      <div className="flex flex-wrap max-md:justify-center items-center gap-5 w-full  h-full">
        {products.length > 0 ?
          products.map((product) => (
            <div className="relative bg-white w-[15rem] max-[450]:w-full max-[950px]:mt-10 h-xl flex flex-col justify-between  items-start  transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl rounded-lg" key={product._id}>
              <img
                src={product.image}
                alt={product.productName}
                className='w-full h-64 object-cover '
                onClick={() => setBigImage(product.image)}
              />
              <div className='absolute z-40 top-2 right-2 text-white cursor-pointer' onClick={() => setBigImage(product.image)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" /></svg>
              </div>
              <div className='flex flex-col justify-between items-start p-4'>
                <h2 className="text-lg font-bold capitalize mt-4">{product.productName}</h2>
                <h3 className="text-md text-gray-500 capitalize py-2 h-20">{product.description}</h3>
                <p className="text-amber-800 font-semibold">₹ {product.price}</p>
              </div>
              <button className='w-full px-5 bg-black text-white  mt-5 py-3 hover:cursor-pointer uppercase' onClick={() => addToCartHAndler(product)}>Add to cart</button>
            </div>
          ))
          :
          <p className='m-5 w-full text-2xl text-center capitalize'>no products found.</p>
        }

        {bigImage && <div className='fixed top-0 left-0 bg-black/50 inset-0 w-full h-screen backdrop-blur-xs z-60 ' onClick={() => setBigImage(null)}>
          <button className='absolute top-5 text-white right-5 cursor-pointer flex items-center' onClick={() => setBigImage(null)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="m12 13.414l5.657 5.657a1 1 0 0 0 1.414-1.414L13.414 12l5.657-5.657a1 1 0 0 0-1.414-1.414L12 10.586L6.343 4.929A1 1 0 0 0 4.93 6.343L10.586 12l-5.657 5.657a1 1 0 1 0 1.414 1.414z" /></g></svg>
          </button>

          <img src={bigImage} className='w-fit h-fit min-[500px]:h-[30rem] z-100 mx-auto pt-24 md:pt-10 px-5 ' />
        </div>}
      </div>

    </div>
  )
}
