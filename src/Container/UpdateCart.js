import { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
class UpdateCart extends Component{
    state = {

        
        hotelQty: "",
        id: this.props.match.params.id,  //url ko id taneko 
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')} `}
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        axios.get('http://localhost:90/cart/one/' + this.state.id) //backend ma id pathako
            .then((response) => {
                this.setState({
                    hotelQty: response.data.data.hotelQty,

                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    updatehotel = (e) => {
        const data = {
            id: this.props.match.params.id,
            hotelQty: this.state.hotelQty,
    
        }
        e.preventDefault();
        axios.put('http://localhost:90/cart/update/'+this.state.id, data, this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({ hotelName: "",
                hotelMl: "",
                hotelPrice: "",
                hotelType: "",})
    
                toast(response.data.message)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render(){
        return(
            <div>
            <div className="row no-gutters">
                <div className="col-md-4 mx-auto">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                        <h3 className="mb-4" style={{ textAlign: 'center' }}>Update No of Rooms</h3>
                        <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                            <div className="row">
                              

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="label" htmlFor="subject">Rooms</label>
                                        <input type="text" className="form-control" placeholder="Rooms"
                                            name="hotelQty" onChange={this.changeHandler} value={this.state.hotelQty} />
                                    </div>
                                </div>


                                <div className="col-md-12">
                                    <div className="form-group">
                                        <button type="submit" defaultValue="Send Message" className="btn btn-primary"
                                            onClick={this.updatehotel}>Update</button>
                                        <div className="submitting" />
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        )
    }

}
export default UpdateCart