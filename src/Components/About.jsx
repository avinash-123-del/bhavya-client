import Aos from 'aos'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
    Aos.refresh();
    } , [])
    return (
        <section className="about-section-three rel z-1 py-50 rpy-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div data-aos="fade-right" data-aos-duration="600" data-aos-once={true}  className="about-three-content rmb-65 wow fadeInLeft delay-0-2s">
                            <div className="section-title mb-50">
                                <span className="sub-title mb-20">Our Values</span>
                                <h2>Organic & Helathy Foods Provider Farming</h2>
                            </div>

                            <p>At Bhavya Herbal, our vision is to be a
                                pioneering force in the Ayurvedic industry,
                                recognized for our unwavering commitment
                                to providing superior quality Ayurvedic herbs
                                and spices. We aim to be the go-to supplier
                                for Ayurvedic companies in India, fostering
                                their success by consistently delivering
                                premium quality of herbs that embody the
                                essence of traditional healing practices. Our
                                mission at Bhavya Herbal is to preserve and
                                promote the ancient wisdom of Ayurveda by
                                supplying the finest quality herbs and spices
                                to our esteemed clients. We strive to be the
                                trusted partner for Ayurvedic companies,
                                offering them a wide range of authentic,
                                sustainably sourced herbs and spices that
                                meet the highest standards of purity,
                                potency, and efficacy. </p>

                    <div className="slider-btns mt-30">
                                        <Link to="/about-page"  className="theme-btn style-two">Learn More <i className="fas fa-angle-double-right"></i></Link>
                                    </div>
                        </div>
                    </div>
                    <div className="col-lg-6 text-lg-right">
                        <div className="about-video wow fadeInRight delay-0-2s" data-aos="fade-left" data-aos-duration="600"  data-aos-once={true} >
                            <img className="image" style={{borderRadius:"15px"}} src="/images/value-img.jpg" alt="About" />
                           
                        </div>
                    </div>
                </div>
            </div>
            <img src="/assets/images/shapes/about-three.png" alt="Shape" className="shape" />
        </section>  
    )
}

export default About