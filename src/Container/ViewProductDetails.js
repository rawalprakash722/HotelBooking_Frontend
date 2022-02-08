import { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class ViewProductDetails extends Component {
    state = {
        hotelName: "",
        hotelMl: "",
        hotelPrice: "",
        hotelType: "",
        hotelImage:"",
        id: this.props.match.params.id,  //url ko id taneko 
        userid:"",
        hotelQty:"",
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
            
        }



        
    }


    
    

    
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        axios.get('http://localhost:90/hotel/one/' + this.state.id) //backend ma id pathako
            .then((message) => {
                this.setState({
                    hotelName: message.data.hotelName,
                    hotelMl: message.data.hotelMl,
                    hotelPrice: message.data.hotelPrice,
                    hotelType: message.data.hotelType,
                    hotelImage:message.data.hotelImage
                })
            })
            .catch((err) => {
                console.log(err.message)
            })
           

    }
    addHotel=(e)=>{
        this.setState({
            [e.target.name]:e.target.value  //name is of input name
        })
    }
    addToCart=(err)=>{
       
        const cartData={

            hotelName:this.state.hotelName,
            hotelMl:this.state.hotelMl,
            hotelPrice:this.state.hotelPrice,
            hotelType:this.state.hotelType,
            hotelImage:this.state.hotelImage,
            hotelQty:this.state.hotelQty
            
        }
        err.preventDefault()
        axios.post("http://localhost:90/add/cart2/"+this.state.id,cartData,this.state.config)
        .then(response=>{
            console.log(response)
            toast(response.data.message)
            console.log(this.state.config)
           
        })
        .catch(err=>{
            console.log(err)
            console.log(this.state.config.headers.authorization)
        })


    }
    render() {
        return (
            <div>
                <section>
                    <div className="container-liquor">
                        <div className="row mx-auto" style={{margin:'20px'}}>
                            <div className="col-md-6 ">
                                <figure className="view rounded z-depth-1 main-img " style={{height:'400px',objectFit:'fill'}}>
                                   
                                    <img src={'http://localhost:90/'+this.state.hotelImage} class="img-fluid z-depth-1 img-responsive img-thumbnail lazy" height="400px" width="300px"
                                     style={{ borderRadius: '4px',display:'inline-block' }} />
                                       
                                   
                                </figure>

                            </div>

                            <div className="col-md-6">
                                <h5 style={{textAlign:'left'}}>{this.state.hotelName}</h5>
                                <div>
                                    <p className="mb-2 text-muted text-uppercase small" > {this.state.hotelType}</p>
                                    
                                    <div>
                                        <p><span classname="mr-1" style={{fontSize:'19px'}}><strong> Rs. {this.state.hotelPrice}</strong></span></p>
                                        <p classname="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
                                        error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
                                         officia quis dolore quos sapiente tempore alias.</p>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-sm table-borderless mb-0">
                                            <tbody>
                                                <tr>
                                                    <th className="pl-0 w-25" scope="row"><strong>Rooms</strong></th>
                                                    <td>{this.state.hotelMl} rooms</td>
                                                </tr>
                                                <tr>
                                                    <th className="pl-0 w-25" scope="row"><strong>Location</strong></th>
                                                    <td>Kathmandu Valley</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="table-responsive mb-2">
                                        <table className="table table-sm table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td className="pl-0 pb-0 w-25">Rooms</td>

                                                </tr>
                                                <tr>
                                                    <td className="pl-0">
                                                        <div className="def-number-input number-input safari_only mb-0">
                                                            {/* <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" className="minus" >-</button> */}
                                                            <input className="quantity" min={1} name="hotelQty" defaultValue={1} type="number" value={this.state.hotelQty} onChange={this.addHotel}></input>
                                                            {/* <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" className="plus" >+</button> */}
                                                        </div>
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>

                                        <button type="button" className="btn btn-light btn-md mr-1 mb-2" onClick={this.addToCart}><i className="fa fa-shopping-cart pr-2" />Book now</button>
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
export default ViewProductDetails