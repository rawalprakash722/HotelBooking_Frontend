import axios from "axios";
import { Component } from "react";
import { Link } from 'react-router-dom';

class ViewHotel extends Component {
    state = {
        products: []
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

    deletehotel = (hotelId) => {
        axios.delete('http://localhost:90/hotel/delete/' + hotelId)
            .then((message) => {
                console.log(message)
                window.location.reload() 
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
        <p className="breadcrumbs mb-0"><span className="mr-2"><a href="/home">Home <i className="fa fa-chevron-right" /></a></span> <span>Products <i className="fa fa-chevron-right" /></span></p>
        <h2 className="mb-0 bread">Products</h2>
      </div>
    </div>
    </div>
  </div>


         <section className="ftco-section">
         <div className="container-liquor">
         <div className="row">
                    {
                        this.state.products.map((product) => {
                            return (
                                
                                    <div className="col-md-3 ">
                                    <div className="product ftco-animate fadeInUp ftco-animated" style={{marginBottom:'0px'}}>
                                    <div className="img d-flex align-items-center justify-content-center" >
                                    <img src={'http://localhost:90/' + product.hotelImage.replace("\\", "/")} height="100%" width="270px" style={{borderRadius: '4px',position: 'relative',objectFit:'fill'}}/>
                                     </div>
                                     <div className="text text-center">
                                        <span className="category">{product.hotelType}</span>
                                        <h2 style={{margin:'0px'}}>{product.hotelName}</h2>
                                        <p className="mb-0" style={{textAlign:'center',marginTop:'0px'}}><span className="price price-sale">Rs. {product.hotelPrice}</span> </p>
                                    </div>
                                       
                                        <p>{product.hotelMl} rooms</p>
                                        
                                       

                                    </div>
                                    {/* Bind is used for sending id as parameter */}
                                    <p style={{marginBottom:'10px'}}><button onClick={this.deletehotel.bind(this, product._id)}>Delete</button></p>
                                    <p style={{marginBottom:'30px'}}><Link to={"/updateProduct/" + product._id}><button style={{backgroundColor: '#6495ED',border:'none'}}>Update</button></Link></p>
                                </div>
                            )
                        })
                    }

                </div>
                </div>
                </section>
         </div>
            
        )
    }
}
export default ViewHotel