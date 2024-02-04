import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ContactusPage = () => {

    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className='home-body'>
            <section className="page-banner text-white mt-65 py-165 rpy-130" style={{ backgroundImage: "url(/assets/images/banner/banner.jpg)" }}>
                <div className="container">
                    <div className="banner-inner"  data-aos="fade-down" data-aos-duration="1000" data-aos-once={true}>
                        <h1 className="page-title wow fadeInUp delay-0-2s">Contact Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item active">Contact Us</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="contact-info-area rel z-1 pt-65 rpt-100"  data-aos="fade-up" data-aos-duration="800" data-aos-once={true} >
                <div className="container">
                    <div className="section-title contact-title mb-50 wow fadeInUp delay-0-2s">
                        <span className="sub-title mb-15">Get in Touch</span>
                        <h3>Need Consultations ?</h3>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="contact-info-item wow fadeInUp delay-0-4s">
                                <div className="icon">
                                    <img src="assets/images/contact/icon1.png" alt="Icon" />
                                </div>
                                <div className="content">
                                    <h4>Location</h4>
                                    <span>A-7, Modern Complex, Motibag Chowk, Opp. Hotel Amit Regency, Raipur, Chhattisgarh 492001.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="contact-info-item wow fadeInUp delay-0-5s">
                                <div className="icon">
                                    <img src="assets/images/contact/icon2.png" alt="Icon" />
                                </div>
                                <div className="content">
                                    <h4>Email Us</h4>
                                    <span className="__cf_email__" data-cfemail="8ce3feebede2e5efeaedfee1cce1ede5e0a2e2e9f8">bhavya.herbal@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="contact-info-item wow fadeInUp delay-0-6s">
                                <div className="icon">
                                    <img src="assets/images/contact/icon3.png" alt="Icon" />
                                </div>
                                <div className="content">
                                    <h4>Phone Us</h4>
                                    <span>
                                        <b>Vinay Jain</b><br />
                                        96444-06022, 94252-06022
                                    </span><br />
                                    <span>
                                        <b>Mohit Jain</b><br />
                                    96444-06022, 94252-06022 
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-shapes">
                    <img className="leafs" src="assets/images/shapes/contact-leafs.png" alt="Leafs" />
                    <img className="pumpkin" src="assets/images/shapes/pumpkin.png" alt="pumpkin" />
                </div>
            </section>


            <section className="contact-form-area rel z-1 pt-100 rpt-70 pb-130 rpb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <form id="contactForm" className="contact-form rmb-65 wow fadeInLeft delay-0-2s" name="contactForm" action="https://demo.webtend.net/html/munfirm/assets/php/form-process.php" method="post">
                                <div className="section-title contact-title mb-55">
                                    <span className="sub-title mb-15">Contact With Us</span>
                                    <h3>Send Us Message</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" id="name" name="name" className="form-control" value="" placeholder="Full Name" required data-error="Please enter your name" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" id="phone" name="phone" className="form-control" value="" placeholder="Phone Number" required data-error="Please enter your Phone Number" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="email" id="email" name="email" className="form-control" value="" placeholder="Email Address" required data-error="Please enter your Adderss" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" id="message" className="form-control" rows="4" placeholder="Write Message" required data-error="Please enter your Message"></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-0">
                                            <button type="submit" className="theme-btn style-two">Send Message<i className="fas fa-angle-double-right"></i></button>
                                            <div id="msgSubmit" className="hidden"></div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block ">
                            <div className="contact-right-image wow fadeInRight delay-0-4s">
                                <img src="assets/images/contact/contact-right.png" alt="Contact From" />
                                <img className="bg" src="assets/images/contact/contact-right-bg.png" alt="Contact From BG" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-shapes">
                    <img className="leaf" src="assets/images/shapes/leaf-1.png" alt="Leaf" />
                    <img className="shape" src="assets/images/shapes/contact-shape.png" alt="Shape" />
                    <img className="two-leaf" src="assets/images/shapes/two-lear.png" alt="Leaf" />
                </div>
            </section>
        </div>
    )
}

export default ContactusPage