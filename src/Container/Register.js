import { Component } from "react";
import axios from 'axios'
import './form.css';
class Register extends Component{

    state={
        firstName:"",
        lastName:"",
        dob:"",
        username:"",
        email:"",
        password:""

    }

    register=(err)=>{
        err.preventDefault()
        const userData={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            dob:this.state.dob,
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        axios.post("http://localhost:90/register",userData)
        .then(res=>{
            console.log(res)
           
        })
        .catch(err=>{
            console.log(err)
        })

    }
    render(){
        return(
            <div className='auth-wrapper'>
            <div className='auth-inner'>
            <div className="row">
           
                <div className='col-lg-5'> 
                       <img className='form-img' src='images/img_aila.png' alt='spaceship' />
                     </div>
                     <div className='col-lg-2'></div>
                     <div className='col-lg-5'>
                <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" 
                    name="firstName" 
                    value={this.state.firstName} 
                    onChange={(event)=>{this.setState({firstName:event.target.value})}} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" 
                     name="lastName" 
                     value={this.state.lastName} 
                     onChange={(event)=>{this.setState({lastName:event.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Date of birth" 
                     name="dob" 
                     value={this.state.dob} 
                     ref={el => this.inputTitle = el}
                     onChange={(event)=>{this.setState({dob:event.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Username" 
                     name="username" 
                     value={this.state.username} 
                     onChange={(event)=>{this.setState({username:event.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                     name="email" 
                     value={this.state.email} 
                     onChange={(event)=>{this.setState({email:event.target.value})}} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                     name="password" 
                     value={this.state.password} 
                     onChange={(event)=>{this.setState({password:event.target.value})}}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.register} >Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
export default Register


