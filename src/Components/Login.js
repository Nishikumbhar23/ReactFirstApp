import {Component} from "react"
import  { Link, withRouter} from "react-router-dom";
import axios from 'axios';
import { connect } from "react-redux"
import Loader from 'react-loader-spinner';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Loginthunk} from '../reduxstore/thunks'

class Login extends Component{
  constructor(){
    super()
    this.state={
      name:"Nishi",
      loading: "false"
    }
  }
  hideLoader = () => {
    this.setState({ loading: false });
}
showLoader = () => {
    this.setState({ loading: true });
}

 user={};
  handleEmail=(event)=>{
    this.user.email=event.target.value;
  }
  handlePass=(event)=>{
    this.user.password=event.target.value;
  }
  login=(event)=>{  
    event.preventDefault()
    console.log(this.user);
    
    if( this.user.email== "" || this.user.email==undefined || this.user.password=="" || this.user.password==undefined){
      toast.error("Please enter all details", {
          position: "top-center",
        });
      }
    this.props.dispatch(Loginthunk(this.user))
      if(this.props.isuserloggedin==true){
        alert("hiiii")
        console.log(".........",this.props)
      }
    // setTimeout(() => {
    //   if(this.props.isuserloggedin==true){
    //     alert("hiiii")
    //     console.log(".........",this.props)
    //     this.props.history.push("/");
    //   } 
    // }, 1000);
    
    // localStorage.token = response.data.token

    // let apiurl = "https://apifromashu.herokuapp.com/api/login"
  //   axios({
  //       method:"post",
  //       url:apiurl,
  //       data:this.user  // we requrie structure like {email,name,password}
  //   }).then((response)=>{
  //       console.log("response from login api",response)
  //       if(response.data.token){
  //           // this.props.loggedin()
  //           this.props.dispatch({
  //             type:"LOGIN",
  //             payload:response.data
  //           })
  //           localStorage.token = response.data.token
  //           this.showLoader()
            
  //           toast.success("Login Succesfull!", {
  //             position: "top-right",
  //           });
  //           this.props.history.push("/")
  //       }     
  //       else{
  //         toast.error("Login Failed!", {
  //           position: "top-right",
  //         });
  //           // alert("Invalid Credentials")
  //           // this.hideLoader()
  //       }
  // },(error)=>{
  //   this.setState({
  //     errorMessage: "Invalid Credentials"
  //   })
  //  console.log("error from login api",error)
  // })
}
  render(){
    return(
      <div className="container">
        {/* {this.state.loading && 
         <Loader
        
           type="Oval"
           color="#38768a"
           height={100}
           width={100}
           justifyContent= 'center'
           alignItems='center'
         />} */}
            <form>
                <div class="Login-form p-4 my-4" style={{width:"60%", margin:"0 auto",background:"whitesmoke"}}>
      <div class="form-group">
          <h3 class="text-center" style={{color:"#38768a"}}>Login Form</h3>
          {/* <h6>Hello {this.state.name}</h6> */}
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" onChange={this.handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" onChange={this.handlePass} class="form-control" id="exampleInputPassword1"/>
      </div>
  
      <div className="form-group">
           <Link to="/recoverpassword">Forgot your password?</Link>
      </div>
      <div className="form-group">
          <label className="errormessage" style={{color:"red"}}>{this.state.errorMessage}</label><br></br>
          <button type="submit" onClick={this.login} class="btn btn-primary mt-2">Submit</button>
      </div>
      <div className="form-group text-center">
        <Link to="/sign-up">New User? Sign up Here</Link>
      </div>
      </div>
        </form>
      
        </div>
        
    );
  }
}
// export default withRouter(Login)
Login= withRouter(Login)
export default connect(function (state,props) {
  return{
    isuserloggedin:state["AuthReducer"]["isuserloggedin"],
    name:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["name"],
    token:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["token"]
   }
}
) (Login)


