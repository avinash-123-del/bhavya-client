import React, { useEffect } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import AboutPage from "./Pages/AboutPage"
import ContactusPage   from "./Pages/ContactusPage"
import { Route, Routes } from 'react-router-dom'
import './main.css'
import "./review.css"
import ProductsPage from './Pages/ProductsPage'
import ProductDetailsPage from './Pages/ProductDetailsPage'
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh();
  } , [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/about' exact element={<AboutPage />} />
        <Route path='/contact' exact element={<ContactusPage   />} />
        <Route path='/products' exact element={<ProductsPage />} />
        <Route path='/product-details' exact element={<ProductDetailsPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App