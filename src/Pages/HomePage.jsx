import React, { useEffect } from 'react'
import SliderPage from '../Components/SliderPage'
import Products from '../Components/Products'
import About from '../Components/About'
import Reviews from '../Components/Reviews'
import { useLocation } from 'react-router-dom'

const HomePage = () => {

  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{width:"100vw" , overflow:"hidden"}} className='mt-65  home-body'>
       <SliderPage/>
      <Products/>
      <About/>
      <Reviews/>
    </div>
  )
}

export default HomePage