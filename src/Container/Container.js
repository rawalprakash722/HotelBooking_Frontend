import { Component } from "react";
import Register from './Register'

import LoginSignUp from './LoginSignUp'

import {Route} from 'react-router-dom'
import Home from "./Home";
import Product from "./Product";
import AddProduct from "./Admin/AddProduct";
import UpdateProduct from "./Admin/UpdateProduct";
import Logout from "./Logout";
import About from "./About";
import Contact from "./Contact";
import ViewAila from "./Admin/ViewHotel";
import ViewProductDetails from "./ViewProductDetails";
import Cart from "./Cart";
import UpdateCart from "./UpdateCart";
import ProfileDashboard from "./UserProfile/ProfileDashboard";
import UpdateProfile from "./UserProfile/UpdateProfile";

class Container extends Component{
   
    render(){
        return(
            <div className="container-fluid">
                <div className="">

                            <div className="col-md-12">
                                {/* //path of link and Register from above imported */}
                                <Route path='/register' component={Register}/>  
                            </div>
                        
                        
                            {/* //path of link and Register from above imported */}
                              

                                <Route exact path='/loginsignup' component={LoginSignUp}/>

                                <Route exact path='/home' component={Home}/>
                                <Route exact path="/" component={Home} />
                                  
                                <Route exact path='/about' component={About}/>
                                <Route exact path='/rooms' component={Product}/>
                                <Route exact path='/contact' component={Contact}/>
                                <Route exact path='/addProduct' component={AddProduct}/>
                                {/* :id hold the id of specific product */}
                                 <Route exact path='/updateProduct/:id' component={UpdateProduct}/>  
                                 <Route exact path='/updateCart/:id' component={UpdateCart}/>  
                                 <Route exact path='/updateProfile/:id' component={UpdateProfile}/> 
                                 <Route exact path='/logout' component={Logout}/>
                                <Route exact path='/profile/:id' component={ProfileDashboard}/>
                                 <Route exact path='/viewAila' component={ViewAila}/>
                                 <Route exact path='/mybooking' component={Cart}/>
                                 <Route exact path='/viewProduct/:id' component={ViewProductDetails}/>  
                               
                        
                </div>
            </div>
        )
    }
}

export default Container