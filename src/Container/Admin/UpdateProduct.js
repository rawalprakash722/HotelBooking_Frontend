import axios from "axios";
import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
class UpdateProduct extends Component {
    state = {
        hotelName: "",
        hotelMl: "",
        hotelPrice: "",
        hotelType: "",
        hotelImage:"",
        hotelUpdateImage:"",
        id: this.props.match.params.id,  //url ko id taneko 
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    fileHandler = (e) => {
        this.setState({
            hotelUpdateImage: e.target.files[0]
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

    updateHotel = (e) => {
        const hoteldata = {
            id: this.props.match.params.id,
            hotelName: this.state.hotelName,
            hotelMl: this.state.hotelMl,
            hotelPrice: this.state.hotelPrice,
            hotelType: this.state.hotelType

        }
        e.preventDefault();
        axios.put('http://localhost:90/hotel/update', hoteldata, this.state.config)
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
            const data2= new FormData()
            data2.append('hotelImage', this.state.hotelUpdateImage)
     
            // {}, this.state.config,
            axios.put("http://localhost:90/hotel/updateImage/" + this.state.id, data2)
                .then(response => {
                    console.log(response)
                    // toast.success("Image Updated", { position: toast.POSITION.TOP_CENTER, autoClose: 3000 })
                })
                .catch(error => {
                    console.log(error)
                });    
    }
    render() {
        return (
            <div>
                <div className="row no-gutters">
                    <div className="col-md-4 mx-auto">
                        <div className="contact-wrap w-100 p-md-5 p-4">
                            <h3 className="mb-4" style={{ textAlign: 'center' }}>Update Product</h3>
                            <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" htmlFor="name">Hotel Name</label>
                                            <input type="text" className="form-control" placeholder="Hotel Name"
                                                name="hotelName" onChange={this.changeHandler} value={this.state.hotelName} />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" htmlFor="subject">Number of Rooms</label>
                                            <input type="number" min="1" className="form-control" placeholder="hotel Ml"
                                                name="hotelMl" onChange={this.changeHandler} value={this.state.hotelMl} />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" htmlFor="subject">hotel Price</label>
                                            <input type="text" className="form-control" placeholder="hotel Price"
                                                name="hotelPrice" onChange={this.changeHandler} value={this.state.hotelPrice} />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" htmlFor="subject">hotel Type</label>
                                            <input type="text" className="form-control" placeholder="hotel Type"
                                                name="hotelType" onChange={this.changeHandler} value={this.state.hotelType} />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                        <input type="file" name="hotelUpdateImage" onChange={this.fileHandler} />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <button type="submit" defaultValue="Send Message" className="btn btn-primary"
                                                onClick={this.updateHotel}>Update</button>
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
export default UpdateProduct