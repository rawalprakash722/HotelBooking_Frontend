import { Component } from "react";
import {Redirect} from 'react-router-dom';
class Logout extends Component{
    componentDidMount(){
        localStorage.removeItem('token')
        localStorage.removeItem('userType')

        window.location.href='/loginsignup';
    
    }
    render(){
        return(
            <div>Unaothorized</div>
        )
    }
 
}
export default Logout