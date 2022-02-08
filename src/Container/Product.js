import axios from "axios";
import { Component } from "react";
import { Link } from 'react-router-dom';
import './aila.css'
class Product extends Component {
  state = {
    products: [],
    hotelType:''
  }
  componentDidMount() {   //page load hudei run hune function
    axios.get("http://localhost:90/hotel/all")
      .then((allHotel) => {
        console.log(allHotel)
        this.setState({
          products: allHotel.data.data
        })
      })
      .catch((err) => {
        console.log(err.response)
      }
      )
  }

  getHotelType=(id)=>{
    axios.get("http://localhost:90/hotel/all"+ id)
      .then((allHotel) => {
        console.log(allHotel)
        this.setState({
          products: allHotel.data.data
        })
      })
      .catch((err) => {
        console.log(err.response)
      }
      )
  }
  deleteHotel = (hotelId) => {
    axios.delete('http://localhost:90/hotel/delete/' + hotelId)
      .then((message) => {
        console.log(message)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  render() {
    return (

      <div>
        <div className="hero-container">
 <video src='/videos/room.mp4' autoPlay loop muted />
    
          <div className="container-fluid">
            <div className="row no-gutters slider-text align-items-end justify-content-center">
              <div className="col-md-9 ftco-animate mb-5 text-center">
                <p className="breadcrumbs mb-0"><span className="mr-2"><a href="/home">Home <i className="fa fa-chevron-right" /></a></span> <span>Rooms <i className="fa fa-chevron-right" /></span></p>
                <h2 className="mb-0 bread">Rooms</h2>
              </div>
            </div>
          </div>
        </div>


        <section className="ftco-section">
          <div className="container-liquor">
          <div className="row justify-content-center pb-5">
              <div className="col-md-4 heading-section text-center ftco-animate">
                <h2>Our Rooms available</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9">

                <div className="row">
                  {
                    this.state.products.map((product) => {
                      return (
                        <div className="col-md-4 d-flex">
                          <div className="product ftco-animate fadeInUp ftco-animated">
                            <div className="img d-flex align-items-center justify-content-center" >
                              <img src={'http://localhost:90/' + product.hotelImage.replace("\\", "/")} class="view" height="100%" width="270px" style={{ borderRadius: '4px', position: 'relative', objectFit: 'fill' }} />
                              <div class="middle" >
                                <div class="text"><Link to={"/viewProduct/" + product._id}><button>View</button></Link></div>
                              </div>
                            </div>
                            <div className="text text-center">
                              <span className="new">available</span>
                              <span className="category">{product.hotelType}</span>
                              <h2 style={{ margin: '0px' }}>{product.hotelName}</h2>
                              <p className="mb-0" style={{ textAlign: 'center', marginTop: '0px' }}><span className="price">Rs. {product.hotelPrice}</span></p>
                            </div>
                            <p>{product.hotelMl} rooms</p>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>

              </div>
              <div className="col-md-3">
                <div className="sidebar-box ftco-animate">
                  <div className="categories">
                    <h3>Room types</h3>
                    <ul className="p-0">
                      <li><a href="/product">All<span className="fa fa-chevron-right" /></a></li>
                      <li><a href="#" onClick={this.getHotelType.bind(this,"Rum")} >5 star hotel  <span className="fa fa-chevron-right" /></a></li>
                      <li><a href="#"  onClick={this.getHotelType.bind(this,"Wine")} >4 star hotel <span className="fa fa-chevron-right" /></a></li>
                      <li><a href="#"  onClick={this.getHotelType.bind(this,"Vodka")} >3 star hotel <span className="fa fa-chevron-right" /></a></li>
                      <li><a href="#"  onClick={this.getHotelType.bind(this,"Whisky")}>Villas <span className="fa fa-chevron-right" /></a></li>
                      <li><a href="#"  onClick={this.getHotelType.bind(this,"Beer")}>Resort <span className="fa fa-chevron-right" /></a></li>
                    </ul>
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
export default Product