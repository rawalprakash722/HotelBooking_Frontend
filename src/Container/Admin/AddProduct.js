import axios from "axios";
import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
class AddProduct extends Component{
    state={
        hotelName:'',
        hotelMl:'',
        hotelPrice:'',
        hotelType:'',
        hotelImage:'',
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }
    
    addHotel=(e)=>{
        this.setState({
            [e.target.name]:e.target.value  //name is of input name
        })
    }
    fileHandler = (e)=>{
        this.setState({
            hotelImage : e.target.files[0]
        })
    }
    sendHotel=(e)=>{
        e.preventDefault(); //stops reloading page
        const data = new FormData() // new line

        data.append('hotelName', this.state.hotelName)
        data.append('hotelMl', this.state.hotelMl)
        data.append('hotelPrice', this.state.hotelPrice)
        data.append('hotelType', this.state.hotelType)
        data.append('hotelImage', this.state.hotelImage)
        
        axios.post('http://localhost:90/hotel/insert',data)  //axios helps inserting data into db
        
        .then((message)=>{
            console.log(message)
            toast(message.data.message)
            this.setState({hotelName:'',
            hotelMl:'',
            hotelPrice:'',
            hotelType:'',
            hotelImage:''})
        })
        
        .catch((error)=>{
            console.log(error.message)
        })
    }  
    render(){
        return(
            <div>
                

                <div className="row no-gutters">
            <div className="col-md-4 mx-auto">
              <div className="contact-wrap w-100 p-md-5 p-4">
                <h3 className="mb-4" style={{textAlign:'center'}}>Add Product</h3>
                <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="name">hotel Name</label>
                        <input type="text" className="form-control"  placeholder="hotel Name" 
                        name="hotelName" value={this.state.hotelName} onChange={this.addHotel} required/>
                      </div>
                    </div>
                    
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="subject">Number of rooms</label>
                        <input type="number" min="1"className="form-control" placeholder="hotel Ml" 
                        name="hotelMl" value={this.state.hotelMl} onChange={this.addHotel} required/>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="subject">hotel per room Price</label>
                        <input type="text" className="form-control" placeholder="hotel Price" 
                        name="hotelPrice" value={this.state.hotelPrice} onChange={this.addHotel} required/>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="subject">hotel Type</label>
                        <input type="text" className="form-control" placeholder="hotel Type" 
                        name="hotelType" value={this.state.hotelType} onChange={this.addHotel} required/>
                      </div>
                    </div>

                    <div className="col-md-12 ">
                      <div className="form-group">
                      <input type="file" name="hotelImage"  onChange={this.fileHandler} />
                        <div className="submitting" />
                      </div>
                    </div>
                    
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="submit" defaultValue="Send Message" className="btn btn-primary" 
                        onClick={this.sendHotel}/>
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

export default AddProduct;