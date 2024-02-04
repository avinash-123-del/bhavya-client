import React, { useEffect, useState } from 'react'
import Bubble from "../Components/Bubble"
import { Link, useLocation } from 'react-router-dom'
import { brandsData, productsData } from '../Components/ProductsData'
// import Slider from 'react-slick'

const ProductsPage = () => {
  const [FilterPorductsData, setFilteredProductsData] = useState(productsData)
  const [changeClass, setchangeClass] = useState("*")

  const { pathname } = useLocation();

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   slidesToShow: 5,
  //   slidesToScroll: 2,
  //   adaptiveHeight: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleChange = (e) => {
    setchangeClass(e)
  }

  const handleSearch = (e) => {
    const searchTerm = e.target.value.trim().toUpperCase()
    if (searchTerm === "") {
      setFilteredProductsData(productsData);
    }
    else {
      setFilteredProductsData(
        FilterPorductsData.filter((item) => item.name.includes(searchTerm))
      )
    }
  }
  return (
    <div className='home-body-product'>

      <section className="page-banner mt-82 text-white py-165 rpy-130" style={{ backgroundImage: "url(/assets/images/banner/banner.jpg)" }}>
        <div className="container">
          <div className="banner-inner" data-aos="fade-down" data-aos-duration="1000" data-aos-once={true}>
            <h1 className="page-title wow fadeInUp delay-0-2s">Product</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
                <li className="breadcrumb-item">Home</li>
                <li className="breadcrumb-item active">Product</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="portfolio-fluid-area rel z-1 py-85 rpy-100">
        <div className="container">
          <div className="row align-items-center pb-40">
            <div className="col-lg-3 wow fadeInUp delay-0-2s">
              <div className="section-title mb-20">
                {/* <span className="sub-title mb-20">Product Showcase Gallery</span> */}
                <h3 className='sub-title' style={{ color: "#82bc23" }}>Product Showcase Gallery</h3>
              </div>
            </div>
            <div className="col-lg-6 text-lg-right wow fadeInUp delay-0-4s">
              <ul className="portfolio-filter mb-20">
                <li onClick={() => handleChange("*")} data-filter="*" className={changeClass === "*" ? "current" : ""}>Show All</li>
                <li onClick={() => handleChange("1")} data-filter=".fruits" className={changeClass === "1" ? "current" : ""}>Category 1</li>
                <li onClick={() => handleChange("2")} data-filter=".vegetables" className={changeClass === "2" ? "current" : ""}>Category 2</li>
                <li onClick={() => handleChange("3")} data-filter=".bread" className={changeClass === "3" ? "current" : ""}>Category 3</li>
              </ul>
            </div>
            <div className="col-lg-3 pb-8 wow fadeInUp delay-0-2s">
              {/* <button className="far fa-search"></button> */}
              <form action="#" className="d-flex">
                <input type="text" placeholder="Search" className="searchbox" required="" onChange={handleSearch} />
                <button type="submit" className=" searchbutton far fa-search px-2" style={{ backgroundColor: "#90b448", color: "#ffffff" }}></button>
              </form>
            </div>
          </div>
        </div>

        <div className='products-bg-img'>

           <div className="container" style={{ position: "relative" }}>
            <span className='bubble-product'><Bubble /></span>
            <div className="row portfolio-active">
              {FilterPorductsData.length > 0 ? FilterPorductsData.map((e, i) => (
                <div key={i} className="col-xl-3 col-lg-12 col-xs-2 item vegetables">
                  <div className="gallery-style-two wow fadeInUp delay-0-2s">
                    <Link to="/product-details"><img src={e.image} alt="Portfolio" /></Link>
                    <Link to="/product-details"><div className="gallery-over">
                      <div className="content">
                        <span className="category">{e.name}</span>
                        <h4 style={{ fontSize: "16px", padding: "10px 15px" }}>{e.bioName}</h4>
                      </div>
                    </div></Link>
                    <div className="d-block d-lg-none  product-page-name">
                      <span >{e.name}</span>
                    </div>
                  </div>
                </div>
              )) : <h4 className='d-flex py-50 text-center w-100' style={{ color: "green" }}>Sorrry No items found ! </h4>}
            </div>
          </div> 
        </div>
        {/* <div className="portfolio-more-btn text-center pt-15">
          <a href="portfolio-grid.html" className="theme-btn style-three mt-15">View More <i className="fas fa-angle-double-right"></i></a>
        </div> */}
      </section>

      {/* <div className="client-logo-section text-center bg-light-green py-60 ">
        <div className="container">
          <div className="client-logo-wrap " >
              <Slider {...settings} className='client-logo-slide'>
                {
                  brandsData.map((e) => (
                    <div key={e.name} className="client-logo-item">
                      <img className='client-logo-img' src={e.image} alt="Client Logo" />
                    </div>
                  ))
                }
              </Slider>
          </div>
        </div>
      </div> */}
      <div className="client-logo-section text-center bg-light-green py-20 lg-py-60 ">
        <div className="container">
          <div className="client-logo-wrap " >
                { 
                  brandsData.map((e) => (
                    <div key={e.name} className="client-logo-item">
                      <img className='client-logo-img' src={e.image} alt="Client Logo" />
                    </div>
                  ))
                  }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage