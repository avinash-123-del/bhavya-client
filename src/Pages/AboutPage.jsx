import React, { useEffect } from 'react'
import { GiCheckMark } from "react-icons/gi";
import { Table } from 'react-bootstrap';
import { plantData } from '../Components/ProductsData';
import { useLocation } from 'react-router-dom';

const AboutPage = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     autoplay: true,
    //     autoplaySpeed: 1500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true
    // };

    return (
        <div className='home-body'>
            <section className="page-banner text-white mt-65 py-165 rpy-130" style={{ backgroundImage: "url(/assets/images/banner/banner.jpg)" }}>
                <div className="container" data-aos="fade-down" data-aos-duration="1000" data-aos-once={true}>
                    <div className="banner-inner">
                        <h1 className="page-title wow fadeInUp delay-0-2s">About</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item active">About</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="about-page-section rel z-1 py-130 rpy-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000" data-aos-once={true}>
                            <div className="about-three-content rmb-35 wow fadeInLeft delay-0-2s">
                                <div className="section-title mb-20">
                                    <span className="sub-title mb-20">About Company</span>
                                    <h2>Organic & Helathy Foods Provider Farming</h2>
                                </div>
                                <p>Bhavya Herbal is a reputable company that has been at the
                                    forefront of the herbal and spice industry since its establishment
                                    in 1992. Founded by Vinay Jain, Bhavya Herbal has become a
                                    trusted name in sourcing, processing, and supplying a diverse
                                    range of Ayurvedic Herbs and Spices. With a commitment to
                                    quality, authenticity, and customer satisfaction, Bhavya Herbal
                                    has carved a niche for itself in the market.
                                    The company follows stringent quality control
                                    measures at every stage from sourcing and processing to
                                    packaging and distribution.
                                    The company sources its Herbs & Spices from reputable farmers
                                    and cultivators who follow traditional and organic farming
                                    practices, ensuring the purity and potency of the herbs and
                                    spices. The company's dedication to sourcing and delivering
                                    authentic ingredients has earned it the trust of renowned
                                    Ayurvedic companies, including Baidyanath, Sandhu, Unijules,
                                    Himalaya, and others.</p>

                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-right">
                            <div className="about-video wow fadeInRight delay-0-2s">
                                <img data-aos="fade-left" data-aos-duration="1000" data-aos-once={true} className="about-img-1" src="/images/about-img-1.jpg" alt="About" />
                                <img data-aos="fade-up" data-aos-duration="1200" data-aos-once={true} className="about-img-2" src="/images/about-img-2.jpg" alt="About" />
                                <img className="bg-shape" src="/assets/images/about/about-bg-shape.png" alt="Shape" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/shapes/about-page.png" alt="Shape" className="shape" />
            </section>

            <section className='services col-lg-12 container'>
                <section className='services-1 col-lg-6 col-sm-12'>
                    <h5>Services Provided</h5>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-once={true} >
                        <ul >
                            <li><GiCheckMark style={{marginRight:"15px"}}/> Packing in PP Bags</li>
                            <li><GiCheckMark style={{marginRight:"15px"}}/>Customization and Tailored
                                Solutions</li>
                            <li><GiCheckMark style={{marginRight:"15px"}}/>Herbs and Spices in Powder Form</li>
                            <li><GiCheckMark style={{marginRight:"15px"}}/>Quality Assurance</li>
                            <li><GiCheckMark style={{marginRight:"15px"}}/>Sorting, Cleaning, and Grading</li>
                        </ul>
                    </div>
                </section>
                <section className='services-2 col-lg-6'>
                    <h5 >Why Bhavya Herbal</h5>
                    <img data-aos="fade-left" data-aos-duration="1000" data-aos-once={true} src="/images/whyBhavya.jpg" alt="" />
                </section>
            </section>

            <section className='services-2 col-lg-12 container'>
                <h5 >Raw Herbs and Species</h5>
                <section className='services-1 col-lg-9'>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-once={true} >
                        <Table striped bordered hover>
                            <thead className='text-white bg-success '>
                                <tr className='text-center '>
                                    <th>Indian Name</th>
                                    <th>Botanical Name</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {plantData.map((plant, index) => (
                                    <tr key={index}>
                                        <td>{plant.indianName}</td>
                                        <td>{plant.botanicalName}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                    </div>
                </section>

            </section>


        </div>
    )
}

export default AboutPage