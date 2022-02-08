import { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
class Cart extends Component {
  state={
    products:[],
    total: 0,
    config: {
      headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
      
  }
  }
  componentDidMount() {   //page load hudei run hune function
    axios.get("http://localhost:90/cart/all",this.state.config)
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
    axios.delete('http://localhost:90/cart/delete/' + hotelId)
        .then((message) => {
            console.log(message)
            toast(message.data.message)
            return window.location.href = "/mybooking"
        })
        .catch((error) => {
            console.log(error.message)
        })
}
    render() {
        return (
            <div>
              <div className="hero-container">
                 <video src='/videos/book.mp4' autoPlay loop muted />
                    <div className="container-fluid">
                        <div className="row no-gutters slider-text align-items-end justify-content-center">
                            <div className="col-md-9 ftco-animate mb-5 text-center">
                                <p className="breadcrumbs mb-0"><span className="mr-2"><a href="index.html">Home <i className="fa fa-chevron-right" /></a></span> <span>Cart <i className="fa fa-chevron-right" /></span></p>
                                <h2 className="mb-0 bread">My Cart</h2>
                            </div>
                        </div>
                    </div>
                </div>

               <section className="ftco-section">
  <div className="container-liquor">
    <div className="row">
      <div className="table-wrap one">
        <table className="table tableone">
          <thead className="thead-primary one">
            <tr>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
              <th>Product</th>
              <th>Price (Rs.)</th>
              <th>Rooms</th>
              <th>Total</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.products.map((product) => {
                return(
<tr className="alert" role="alert">
              <td>
                <label className="checkbox-wrap checkbox-primary">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark" />
                </label>
              </td>
              <td>
                <div className="img" >
                  <img src={'http://localhost:90/'+product.hotelId.hotelImage} height="120px" width="100px"/>
                </div>
              </td>
              <td>
                <div className="email">
                  <span>{product.hotelId.hotelName}</span>
                  <span>The following item is added to cart.</span>
                </div>
              </td>
              <td>{product.hotelId.hotelPrice}</td>
              <td className="quantity">
                <div className="input-group">
                  <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={product.hotelQty} min={1} max={100} ></input>
                </div>
              </td>
              <td id="price">{product.hotelId.hotelPrice*product.hotelQty}</td>
              
              <td>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <Link to={"/updateCart/" + product._id}><span aria-hidden="true"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span></Link>
                </button>
              </td>
              <td>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true"><i className="fa fa-close" onClick={this.deleteHotel.bind(this,product._id)}/></span>
                </button>
              </td>
            </tr>
           
                )
              })
            }
            
            
           
           
          </tbody>
        </table>
      </div>
    </div>
    <div className="row justify-content-end">
      <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ftco-animate">
      <div className="cart-total mb-3">
  
</div>

      
      </div>
    </div>
  </div>
</section>
            </div>
        )
    }
}
export default Cart