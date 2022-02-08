import { Component } from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'
class Footer extends Component{
    render(){
    return(
    <div>  
      <section style={{height: 50}}/>
    <footer id="dk-footer" className="dk-footer">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 col-lg-4">
        <div className="dk-footer-box-info">
          <a href="index.html" className="footer-logo">
            <img src="images/hotelMandu.png" style={{height:"200px",marginTop:'20px'}} alt="footer_logo" className="img-fluid" />
          </a>
          <p className="footer-info-text">
          Bookmandu is an booking website for booking hotels and resturant at best price. 
          </p>
          <div className="footer-social-link">
            <h3>Follow us</h3>
            <ul style={{textAlign:'center'}}>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          {/* End Social link */}
        </div>
        {/* End Footer info */}
        
      </div>
      {/* End Col */}
      <div className="col-md-12 col-lg-8">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-us">
              <div className="contact-icon">
                <i className="fa fa-map-o" aria-hidden="true" />
              </div>
              {/* End contact Icon */}
              <div className="contact-info">
                <h3>Kathmandu Nepal</h3>
                <p>Mahankal, Bouddha</p>
              </div>
              {/* End Contact Info */}
            </div>
            {/* End Contact Us */}
          </div>
          {/* End Col */}
          <div className="col-md-6">
            <div className="contact-us contact-us-last">
              <div className="contact-icon">
                <i className="fa fa-volume-control-phone" aria-hidden="true" />
              </div>
              {/* End contact Icon */}
              <div className="contact-info">
                <h3>977 9861432303</h3>
                <p>Give us a call</p>
              </div>
              {/* End Contact Info */}
            </div>
            {/* End Contact Us */}
          </div>
          {/* End Col */}
        </div>
        {/* End Contact Row */}
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="footer-widget footer-left-widget">
              <div className="section-heading">
                <h3>Useful Links</h3>
                <span className="animate-border border-black" />
              </div>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Faq</a>
                </li>
              </ul>
            </div>
            {/* End Footer Widget */}
          </div>
          {/* End col */}
          <div className="col-md-12 col-lg-6">
            <div className="footer-widget">
              <div className="section-heading">
                <h3>Subscribe</h3>
                <span className="animate-border border-black" />
              </div>
              <p>
               Subscribe our website and get a chance to win a bumper prize.</p>
              <form action="#">
                <div className="form-row">
                  <div className="col dk-footer-form">
                    <input type="email" className="form-control" placeholder="Email Address" />
                    <button type="submit">
                      <i className="fa fa-send send" />
                    </button>
                  </div>
                </div>
              </form>
              {/* End form */}
            </div>
            {/* End footer widget */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Col */}
    </div>
    {/* End Widget Row */}
  </div>
  {/* End Contact Container */}
 
  {/* End Copyright */}
  {/* Back to top */}
  
  {/* End Back to top */}
</footer>

</div>


    )
}
}

export default Footer