import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { productsData } from "./ProductsData"


const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 5,
    slidesToScroll: 2,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  const nav = useNavigate()
  return (
    <div>
      <div className='product-bg '>
        <div className='container mt-85'>
          <div className="wow fadeInUp delay-0-2s">
            <div className="section-title mb-20 subTitle ">
              {/* <span className="sub-title mb-20">Raw Herbs & Species</span> */}
              <h3 className='sub-title'>Raw Herbs & Species</h3>
              <h3 className='sub-title see-all' onClick={() => nav("/products")}>see all</h3>
              <img className="bg-shape bg-img" src="/assets/images/about/about-bg-shape.png" alt="Shape" />
              <img src="/assets/images/shapes/about-page.png" alt="Shape" className="shape bg-img2"></img>
            </div>
          </div>

          <div className="container">
            <Slider {...settings} className='mx-0 lg-mx-5'>
              {productsData.slice(0, 8).map((e, i) => (
                <div key={i} className=" item vegetables">
                  <div className="gallery-style-two wow fadeInUp delay-0-2s">
                  <Link to="/product-details"><img src={e.image} alt="Portfolio" /></Link>
                    <Link to="/product-details"><div className="gallery-over">
                      <div className="content">
                        <span className="category" >{e.name}</span>
                        <h6>{e.bioName}</h6>
                      </div>
                    </div></Link>
                    <div className='product-name-div'>
                      <span className="product-name d-block d-lg-none" >{e.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className='product-2'>

        <div className='container mt-85 sm-container-fluid'>
          <div className="wow fadeInUp delay-0-2s">
            <div className="section-title mb-20 subTitle ">
              {/* <span className="sub-title mb-20">Raw Herbs & Species</span> */}
              <h3 className='sub-title' style={{ color: "#668033" }}>Raw Herbs & Species</h3>
              <h3 className='sub-title see-all' onClick={() => nav("/products")}>see all</h3>
              <img className="pumpkin bg-img-2" src="assets/images/shapes/pumpkin.png" alt="pumpkin" />
              <img className="pumpkin bg-img-2-1" src="assets/images/shapes/pumpkin.png" alt="pumpkin" />
            </div>
          </div>

          <div className="container sm-container-fluid">
            <Slider {...settings} className='mx-0 lg-mx-5'>
              {productsData.slice(8, 16).map((e, i) => (
                <div key={i} className=" item vegetables">
                  <div className="gallery-style-two wow fadeInUp delay-0-2s">
                  <Link to="/product-details"><img src={e.image} alt="Portfolio" /></Link>
                    <Link to="/product-details"><div className="gallery-over">
                      <div className="content">
                        <span className="category" >{e.name}</span>
                        <h6>{e.bioName}</h6>
                      </div>
                    </div></Link>
                    <div className='product-name-div'>

                    <span className="product-name d-block d-lg-none" >{e.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className='product-bg' >

        <div className='container mt-85 '>
          <div className="wow fadeInUp delay-0-2s">
            <div className="section-title mb-20 subTitle ">
              {/* <span className="sub-title mb-20">Raw Herbs & Species</span> */}
              <h3 className='sub-title'>Raw Herbs & Species</h3>
              <h3 className='sub-title see-all' onClick={() => nav("/products")}>see all</h3>
              <img className="bg-shape bg-img-3" src="/assets/images/about/about-bg-shape.png" alt="Shape" />
              <img src="/assets/images/shapes/about-page.png" alt="Shape" className="shape bg-img3"></img>
            </div>
          </div>

          <div className="container">
            <Slider {...settings} className='mx-0 lg-mx-5'>
              {productsData.slice(16,).map((e, i) => (
                <div key={i} className=" item vegetables">
                  <div className="gallery-style-two wow fadeInUp delay-0-2s">
                  <Link to="/product-details"><img src={e.image} alt="Portfolio" /></Link>
                  
                    <Link to="/product-details">
                      <div className="gallery-over">
                      <div className="content">
                        <span className="category" >{e.name}</span>
                        <h6>{e.bioName}</h6>
                      </div>
                    </div></Link>
                    <div className='product-name-div'>
                      <span className="product-name d-block d-lg-none" >{e.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
