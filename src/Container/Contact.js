import { Component } from "react";

class Contact extends Component{
  state={
    fullName:"",
    subject:"",
    email:"",
    message:"",
    
}
changeHandler = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  }

  )
}
    render(){
        return(
            <div>
           <section className="hero-wrap hero-wrap-2" style={{backgroundImage: 'url("images/contact.jpg")'}} data-stellar-background-ratio="0.5">
  <div className="overlay" />
  <div className="container-liquor">
    <div className="row no-gutters slider-text align-items-end justify-content-center">
      <div className="col-md-9 ftco-animate mb-5 text-center">
        <p className="breadcrumbs mb-0"><span className="mr-2"><a href="index.html">Home <i className="fa fa-chevron-right" /></a></span> <span>Contact Us <i className="fa fa-chevron-right" /></span></p>
        <h2 className="mb-0 bread">Contact Us</h2>
      </div>
    </div>
  </div>
</section>

<section className="ftco-section bg-light">
  <div className="container-liquor">
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="wrapper px-md-4">
          <div className="row mb-5">
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-map-marker" />
                </div>
                <div className="text">
                  <p><span>Address:</span> Mahankal, Bouddha Kathmandu</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-phone" />
                </div>
                <div className="text">
                  <p><span>Phone:</span> <a href="tel://1234567920">+977 9861432303</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-paper-plane" />
                </div>
                <div className="text">
                  <p><span>Email:</span> <a href="mailto:info@yoursite.com">hotelmandu@gmail.com</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-globe" />
                </div>
                <div className="text">
                  <p><span>Website</span> <a href="#">hotelmandu.com.np</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-7">
              <div className="contact-wrap w-100 p-md-5 p-4">
                <h3 className="mb-4">Contact Us</h3>
                <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="label" htmlFor="name">Full Name</label>
                        <input type="text" className="form-control" name="fullName" id="name" placeholder="Name"
                         value={this.state.fullName} 
                         onChange={this.changeHandler} />
                      </div>
                    </div>
                    <div className="col-md-6"> 
                      <div className="form-group">
                        <label className="label" htmlFor="email">Email Address</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email"
                         value={this.state.email} 
                         onChange={this.changeHandler} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="subject">Subject</label>
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"
                         value={this.state.subject} 
                         onChange={this.changeHandler} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="#">Message</label>
                        <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Message" defaultValue={""} 
                         value={this.state.message} 
                         onChange={this.changeHandler}/>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        {/* <input type="submit" defaultValue="Send Message" className="btn btn-primary" /> */}
                        <a href="/contact" button type="button">Submit</a>
                        <div className="submitting" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5 order-md-first d-flex align-items-stretch">
              <div id="map" className="map" />
            </div>
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
export default Contact