import { Component } from "react";
import './LoginForm.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
class LoginSignUp extends Component{
    click=()=>{
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
        
    });
    
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
    }

    state={
      firstName:"",
      lastName:"",
      dob:"",
      username:"",
      email:"",
      password:"",
      checkLogin:false

  }
  changeHandler = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    }

    )
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
      .then(response=>{
          console.log(response)
          toast(response.data.message)
          this.setState({ username: "",
          password: ""})
         
      })
      .catch(err=>{
          console.log(err)
          
      })

  }
  submitLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:90/user/login", this.state)
        .then((response) => {
            console.log(response);
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userType', response.data.userType)
            localStorage.setItem('id',response.data.userId)
            if(response.data.success===true){
                this.setState({ checkLogin: true })
            }
            else{
            this.setState({ checkLogin: false })
            toast(response.data.message)
            this.setState({ username: "",
            password: ""})
            

            }
        })
        .catch((err) => {
            console.log(err.response)
        })
}
    render(){
      if (this.state.checkLogin === true) {
        // return <Redirect to='/home'/>
        return window.location.href = "/home"
    }
        return(
         <div>
 
  <div className="container" id="container">
    <div className="form-container sign-up-container">
      <form>
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social"><i className="fa fa-facebook-f" /></a>
          <a href="#" className="social"><i className="fa fa-google-plus" /></a>
          <a href="#" className="social"><i className="fa fa-linkedin" /></a>
        </div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="First name" 
         name="firstName" 
         value={this.state.firstName} 
         onChange={(event)=>{this.setState({firstName:event.target.value})}}/>

        <input type="text" placeholder="Last name"
        name="lastName" 
        value={this.state.lastName} 
        onChange={(event)=>{this.setState({lastName:event.target.value})}} />
       
        <input type="date" placeholder="Date of birth" 
        name="dob" 
        value={this.state.dob} 
        onChange={(event)=>{this.setState({dob:event.target.value})}}/>
        
      
        <input type="text" placeholder="Username" 
        name="username" 
        value={this.state.username} 
        onChange={(event)=>{this.setState({username:event.target.value})}}/>

        <input type="email" placeholder="Email" 
        name="email" 
        value={this.state.email} 
        onChange={(event)=>{this.setState({email:event.target.value})}}/>
          
        <input type="password" placeholder="Password" 
        name="password" 
        value={this.state.password} 
        onChange={(event)=>{this.setState({password:event.target.value})}}/>
        <button type="submit"onClick={this.register}>Sign Up</button>
      </form>
    </div>

    <div className="form-container sign-in-container">
      <form action="#">
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="https://www.facebook.com/"className="social"><i className="fa fa-facebook" />
          </a>
          <a href="#" className="social"><i className="fa fa-google-plus" /></a>
          <a href="#" className="social"><i className="fa fa-linkedin" /></a>
        </div>
        <span>or use your account</span>
        <input type="text" placeholder="Username" 
        name="username" 
        value={this.state.username} 
        onChange={this.changeHandler}/>
          
        <input type="password" placeholder="Password" 
        name="password" 
        value={this.state.password} 
        onChange={this.changeHandler}/>
        <a href="#">Forgot your password?</a>
        <button onClick={this.submitLogin}>Sign In</button>
      </form>
    </div>
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button className="ghost" id="signIn" onClick={this.click}>Sign In</button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button className="ghost" id="signUp" onClick={this.click}>Sign Up</button>
        </div>
      </div>
    </div>
  </div>
  
</div>


        )
    }
}
export default LoginSignUp