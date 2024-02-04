import React from 'react';
import { Link } from 'react-router-dom';
import { CiMail, CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="main-footer bg-green text-white">
      <div className="container py-80">

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 order-md-1">
            <div className="footer-widget about-widget text-center">
              <div className="footer-logo mb-30">
                <img src="/logo.jpg" alt="" height="50px" width="50px" style={{ borderRadius: "50%" }} />
              </div>
              <p>
                Sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. quis
                ipsum suspendisse ultrices gravida.
              </p>
              <div className="social-style-two pt-10">
                <span>
                  <i className="fab fa-facebook-f"></i>
                </span>
                <span>
                  <i className="fab fa-twitter"></i>
                </span>
                <span>
                  <i className="fab fa-linkedin-in"></i>
                </span>
                <span>
                  <i className="fab fa-youtube"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 order-md-2 c-footLinks">
            <div className="footer-widget menu-widget two-column">
              <h4 className="footer-title">Quick Links</h4>
              <ul>
                <Link to="/" ><li>Home</li></Link>
                <Link to="/products" ><li>Product</li></Link>
                <Link to="/about" ><li>About</li></Link>
                <Link to="/contact" ><li>Contact</li></Link>
                {/* Add more links as needed */}
              </ul>
            </div>
          </div>




          <div className="col-lg-4 col-md-6 order-md-3">
            <div className="footer-widget contact-widget">
              <h4 className="footer-title">Contact Details</h4>
              <div className='footer-p1'>
                <img src="/images/call.png" alt="" />
                <small className='span-item'>
                  <span>VINAY JAIN</span>
                  <span>+9196444-06022, 94252-06022</span>
                </small>
              </div>
              <div className='footer-p2'>
                <img src="/images/call.png" alt="" />
                <small className='span-item'>
                  <span>MOHIT JAIN</span>
                  <span>+9197663-13588, 94234-04588</span>
                </small>
              </div>
              <div className='footer-p3'>
                <CiMail color='#ffffff' size={25} />
                <small>bhavya.herbal@gmail.com</small>
              </div>
              <div className='footer-p3'>
                <CiLocationOn color='#ffffff' size={25} />
                <small>A-7, Modern Complex, Motibag Chowk, Opp. Hotel Amit Regency, Raipur, Chhattisgarh 492001</small>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area pt-25 pb-10">
          <p>Copyright © 2022 MunFirm. All Rights Reserved.</p>
          <ul className="footer-menu">
            <li>Setting & Privacy</li>
            <li>Faqs</li>
            <li>Payments</li>
          </ul>

          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="fas fa-angle-double-up"></span>
          </button>
        </div>
      </div>

      <div className="footer-shapes">
        <img className="footer-bg" src="/assets/images/background/footer-bg-shape.png" alt="Shape" />
        <img className="shape-one" src="/assets/images/shapes/footer1.png" alt="Shape" />
        <img className="shape-two" src="/assets/images/shapes/footer2.png" alt="Shape" />
        <img className="shape-three" src="/assets/images/shapes/footer3.png" alt="Shape" />
        <img className="shape-four" src="/assets/images/shapes/footer4.png" alt="Shape" />
      </div>
    </footer>
  );
};

export default Footer;
