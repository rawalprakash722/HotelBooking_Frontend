import { Component } from "react";
import './aila.css'

class About extends Component{
    render(){
        return(
            <div>

<div className='hero-container'>
      <video src='/videos/about.mp4' autoPlay loop muted />
      <div className="container-fluid">
    <div className="row no-gutters slider-text align-items-end justify-content-center ">
      <div className="col-md-9 ftco-animate mb-5 text-center">
        <p className="breadcrumbs= mb-0"><span className="mr-2"><a href="/home">Home <i className="fa fa-chevron-right" /></a></span> <span>About us <i className="fa fa-chevron-right" /></span></p>
        <h2 className="mb-0 bread">About Us</h2>
      </div>
    </div>
  </div>
      </div>
  



<section className="ftco-intro">
  <div className="container-liquor">
    <div className="row no-gutters">
      <div className="col-md-4 d-flex">
        <div className="intro d-lg-flex w-100 ftco-animate">
          <div className="icon">
            <span className="flaticon-support" />
          </div>
          <div className="text">
            <h2>Online Support 24/7</h2>
            <p>Support given 24/7 all time in any condition for the easiness of people with many services and facilities.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex">
        <div className="intro color-1 d-lg-flex w-100 ftco-animate">
          <div className="icon">
            <span className="flaticon-cashback" />
          </div>
          <div className="text">
            <h2>Money Back Guarantee</h2>
            <p>In any case if the customer finds difficulties and have to cancel the booking of hotel.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex">
        <div className="intro color-2 d-lg-flex w-100 ftco-animate">
          <div className="icon">
            <span className="flaticon-free-delivery" />
          </div>
          <div className="text">
            <h2>Free Shipping &amp; Return</h2>
            <p>Get the best hotels around the countrt with the best services and facilities for the customers.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="ftco-section">
  <div className="container-liquor">
    <div className="row justify-content-center mb-5">
      <div className="col-md-7 heading-section text-center ftco-animate">
        <span className="subheading">Blog</span>
        <h2>Recent Blog</h2>
      </div>
    </div>
    <div className="row d-flex">
      <div className="col-lg-6 d-flex align-items-stretch ftco-animate">
        <div className="blog-entry d-flex">
          <a href="blog-single.html" className="block-20 img" style={{backgroundImage: 'url("images/everest.jpg")'}}>
          </a>
          <div className="text p-4 bg-light">
            <div className="meta">
              <p><span className="fa fa-calendar" /> 23 April 2020</p>
            </div>
            <h3 className="heading mb-3"><a href="#">Best hotels and resturants in pokhara</a></h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <a href="#" className="btn-custom">Continue <span className="fa fa-long-arrow-right" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 d-flex align-items-stretch ftco-animate">
        <div className="blog-entry d-flex">
          <a href="blog-single.html" className="block-20 img" style={{backgroundImage: 'url("images/hyatt.jpg")'}}>
          </a>
          <div className="text p-4 bg-light">
            <div className="meta">
              <p><span className="fa fa-calendar" /> 23 April 2020</p>
            </div>
            <h3 className="heading mb-3"><a href="#">Best hotels and resturants in kathmandu</a></h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <a href="#" className="btn-custom">Continue <span className="fa fa-long-arrow-right" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 d-flex align-items-stretch ftco-animate">
        <div className="blog-entry d-flex">
          <a href="blog-single.html" className="block-20 img" style={{backgroundImage: 'url("images/aloft.jpg")'}}>
          </a>
          <div className="text p-4 bg-light">
            <div className="meta">
              <p><span className="fa fa-calendar" /> 23 April 2020</p>
            </div>
            <h3 className="heading mb-3"><a href="#">Best hotels and resturants in butwal</a></h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <a href="#" className="btn-custom">Continue <span className="fa fa-long-arrow-right" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 d-flex align-items-stretch ftco-animate">
        <div className="blog-entry d-flex">
          <a href="blog-single.html" className="block-20 img" style={{backgroundImage: 'url("images/swiss.jpg")'}}>
          </a>
          <div className="text p-4 bg-light">
            <div className="meta">
              <p><span className="fa fa-calendar" /> 23 April 2020</p>
            </div>
            <h3 className="heading mb-3"><a href="#">Best hotels and resturants in lalitpur</a></h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <a href="#" className="btn-custom">Continue <span className="fa fa-long-arrow-right" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


            </div>
        )
    }
}
export default About