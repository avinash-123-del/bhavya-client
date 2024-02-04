import Aos from 'aos';
import React, { useEffect } from 'react'
import { brandsData, productsData } from '../Components/ProductsData';
import Slider from 'react-slick';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    Aos.refresh();
    } , [])

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 5,
      slidesToScroll: 2,
      adaptiveHeight: true,
      responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            }
          ]
    };
  
  
    const nav = useNavigate()

  return (
    <div className='mt-65 home-body'>
       <section className="portfolio-details-area rel z-1">
        <div className="container">
          <div className="portfolio-details-content">
            <div className="image mb-50 wow fadeInUp delay-0-2s"  >
              <img  src="https://img.freepik.com/free-vector/flat-design-organic-food-brochure-template_23-2149112287.jpg?w=1380&t=st=1705639267~exp=1705639867~hmac=e2d15c17565e8afe478a992bbc24b9579531683076f18e2ccfd9d3210122612d" alt="Portfolio Details" />
            </div>
            <div className="row wow fadeInUp delay-0-2s">
              <div className="col-lg-6 product-detail">
                <h2>Belguda</h2>
                <img data-aos="zoom-in" data-aos-duration="600" data-aos-once={true} src="/images/BELGUDA.jpg" alt="" />
              </div>
              <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="600" data-aos-once={true}>
                <div className="row">
                  <div className="col-sm-4 col-6">
                    <div className="pd-inner-item">
                      <h4>Category</h4>
                      <p>Organic Foods Vegetables</p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    <div className="pd-inner-item">
                      <h4>Bio Name</h4>
                      <p>Dhawaiphool</p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    <div className="pd-inner-item">
                      <h4>Ratings</h4>
                      <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
                    </div>
                  </div>
                </div>
                <hr className="mt-30 mb-30" />
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                <hr className="mt-45" />
              </div>
            </div>
            <div className="row pt-5 pb-20 wow fadeInUp delay-0-2s">
              <div className="col-lg-6">
                <h2>Product Enquiry</h2>
              </div>
              <div className="col-lg-12">
              <section className="contact-form-area rel z-1 pt-20 rpt-70  ">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-lg-6">
                        <form id="contactForm" className="contact-form rmb-65 wow fadeInLeft delay-0-2s" name="contactForm" action="https://demo.webtend.net/html/munfirm/assets/php/form-process.php" method="post">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" id="name" name="name" className="form-control" value="" placeholder="Full Name" required data-error="Please enter your name"/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" id="phone" name="phone" className="form-control" value="" placeholder="Phone Number" required data-error="Please enter your Phone Number"/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="email" id="email" name="email" className="form-control" value="" placeholder="Email Address" required data-error="Please enter your Adderss"/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea name="message" id="message" className="form-control" rows="4" placeholder="Write Message" required data-error="Please enter your Message"></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-0">
                                        <button type="submit" className="theme-btn style-two">Send<i className="fas fa-angle-double-right"></i></button>
                                        <div id="msgSubmit" className="hidden"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="d-none d-lg-block col-lg-6">
                        <div className="contact-right-image wow fadeInRight delay-0-4s">
                            <img src="assets/images/contact/contact-right.png" alt="Contact From"/>
                            <img className="bg" src="assets/images/contact/contact-right-bg.png" alt="Contact From BG"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-shapes">
                <img className="leaf" src="assets/images/shapes/leaf-1.png" alt="Leaf"/>
                <img className="shape" src="assets/images/shapes/contact-shape.png" alt="Shape"/>
                <img className="two-leaf" src="assets/images/shapes/two-lear.png" alt="Leaf"/>
            </div>
        </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      {/* <Bubble/> */}

      <div className='product-bg '>
        <div className='container mt-85 '>
          <div className="wow fadeInUp delay-0-2s">
            <div className="section-title mb-20 subTitle ">
              {/* <span className="sub-title mb-20">Raw Herbs & Species</span> */}
              <h3 className='sub-title'>Related Products</h3>
              <h3 className='sub-title see-all' onClick={() => nav("/products")}>see all</h3>
            </div>
          </div>


<div className='related container lg-85 sm-container-fluid'>

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
      </div>

      <div className="client-logo-section text-center py-20 lg-py-60 ">
        <div className="container-fluid">
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

export default ProductDetailsPage