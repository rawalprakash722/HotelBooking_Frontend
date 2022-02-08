import { Component } from "react";
import HeroSection from "./HeroComponent/HeroSection";
import './aila.css'


class Home extends Component {
  render() {
    return (
      <div>
        <HeroSection />
        <section className="ftco-section ftco-no-pb">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-5 img img-3 d-flex justify-content-center align-items-center image" style={{ backgroundImage: 'url(images/home1.jpg)' }}>
              </div>
              <div className="col-md-5 wrap-about pl-md-5 ftco-animate py-5 para">
                <div className="heading-section">
                  <span className="subheading">Since 2020</span>
                  <h2 className="mb-4">Luxury meets a new taste</h2>
                  <p style={{ color: "black" }}>We think everybody should be able to travel the world. Our vision is of a world where our differences are a source of inspiration and development, not intolerance and prejudice. </p>
                  <p>Our purpose is to give courage and encourage each one of us to stay curious and be open-minded so we can all enjoy a better, more diversified world.</p>
                  <p className="year">
                    <strong className="number" data-number={115}>2</strong>
                    <span>Years of Experience In Business</span>
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </section>

        <section className="ftco-section ftco-no-pb">
          <div className="container-liquor">
            <div className="row">
              <div className="col-lg-2">
                <div className="sort w-100 text-center ftco-animate">
                  <div className="img" style={{ backgroundImage: 'url(images/everest.jpg)' }} />
                  <h3>Everest hotel</h3>
                </div>
              </div>
              <div className="col-lg-2 ">
                <div className="sort w-100 text-center ftco-animate">
                  <div className="img" style={{ backgroundImage: 'url(images/mallaHotel.jpg)' }} />
                  <h3>Malla hotel</h3>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="sort w-100 text-center ftco-animate">
                  <div className="img" style={{ backgroundImage: 'url(images/solti.jpg)' }} />
                  <h3>Soltin hotel</h3>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="sort w-100 text-center ftco-animate">
                  <div className="img" style={{ backgroundImage: 'url(images/hyatt.jpg)' }} />
                  <h3>Hyatt</h3>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="sort w-100 text-center ftco-animate">
                  <div className="img" style={{ backgroundImage: 'url(images/hyattPlacae.jpg)' }} />
                  <h3>Hyatt place</h3>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="sort w-100 text-center ftco-animate">
                  <div className="img" style={{ backgroundImage: 'url(images/raddision.jpg)' }} />
                  <h3>Raddision </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section">
          <div className="container-liquor">
            <div className="row justify-content-center pb-5">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <span className="subheading">Our Delightful offerings</span>
                <h2>Tastefully Yours</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 d-flex">
                <div className="product ftco-animate">
                  <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/yak.jpg)' }}>
                    <div className="desc">
                      <p className="meta-prod d-flex">
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                      </p>
                    </div>
                  </div>
                  <div className="text text-center">
                    <span className="new">Available</span>
                    <span className="category">5 star hotel</span>
                    <h2>Yak and yeti</h2>
                    <p className="mb-0"><span className="price price-sale">$69.00</span> <span className="price">$49.00</span></p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="product ftco-animate">
                  <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/villas.jpg)' }}>
                    <div className="desc">
                      <p className="meta-prod d-flex">
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                      </p>
                    </div>
                  </div>
                  <div className="text text-center">
                    {/* <span className="seller">Best Seller</span> */}
                    <span className="new">Available</span>
                    <span className="category">5 star hotel</span>
                    <h2>Villas the boutique hotel</h2>
                    <span className="price">$69.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="product ftco-animate">
                  <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/meghauli.jpg)' }}>
                    <div className="desc">
                      <p className="meta-prod d-flex">
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                      </p>
                    </div>
                  </div>
                  <div className="text text-center">
                    <span className="sale">Unavailable</span>
                    <span className="category">5 star hotel</span>
                    <h2>Meghauli Serai</h2>
                    <span className="price">$69.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="product ftco-animate">
                  <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/glamour.jpg)' }}>
                    <div className="desc">
                      <p className="meta-prod d-flex">
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                      </p>
                    </div>
                  </div>
                  <div className="text text-center">
                  <span className="new">available</span>
                    <span className="category">5 star hotel</span>
                    <h2>le glamour luxury resort</h2>
                    <span className="price">$69.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="product ftco-animate">
                  <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/aloft.jpg)' }}>
                    <div className="desc">
                      <p className="meta-prod d-flex">
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                      </p>
                    </div>
                  </div>
                  <div className="text text-center">
                  <span className="new">available</span>
                    <span className="category">4 star hotel</span>
                    <h2>Aloft kathmandu thamel</h2>
                    <span className="price">$69.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="product ftco-animate">
                  <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/shambala.jpg)' }}>
                    <div className="desc">
                      <p className="meta-prod d-flex">
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                      </p>
                    </div>
                  </div>
                  <div className="text text-center">
                  <span className="new">available</span>
                    <span className="category">4 star hotel</span>
                    <h2>shambala</h2>
                    <span className="price">$69.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="product ftco-animate">
                  <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/mystic.jpg)' }}>
                    <div className="desc">
                      <p className="meta-prod d-flex">
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                      </p>
                    </div>
                  </div>
                  <div className="text text-center">
                  <span className="sale">Unavailable</span>
                    <span className="category">4 star hotel</span>
                    <h2>Hotel mystic and mountain</h2>
                    <span className="price">$69.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="product ftco-animate">
                  <div className="img d-flex align-items-center justify-content-center imgs" style={{ backgroundImage: 'url(images/swiss.jpg)' }}>
                    <div className="desc">
                      <p className="meta-prod d-flex">
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                      </p>
                    </div>
                  </div>
                  <div className="text text-center">
                  <span className="new">available</span>
                  <span className="category">4 star hotel</span>
                    <h2>Swiss international hotel sarowar</h2>
                    <span className="price">$69.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <a href="/rooms" className="btn btn-primary d-block">View All hotels <span className="fa fa-long-arrow-right" /></a>
              </div>
            </div>
          </div>
        </section>


      </div>



    )
  }
}
export default Home