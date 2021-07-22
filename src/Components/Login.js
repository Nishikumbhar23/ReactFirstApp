import {Component} from "react"
import  { Link} from "react-router-dom";
import axios from 'axios';

class Login extends Component{
  constructor(){
    super()
    this.state={
      name:"Nishi"
    }
  }
 user={};
  handleEmail=(event)=>{
    this.user.email=event.target.value;
  }
  handlePass=(event)=>{
    this.user.password=event.target.value;
  }
  login=(event)=>{
    this.setState({
      name:"Nishu"
    })
    console.log(this.user);
    // this.user.name="Nishu"

    // if(this.user.email=="test@gmail.com" && this.user.pass=="test"){
    //   this.props.history.push("/")
    // }
    let apiurl="https://apifromashu.herokuapp.com/api/login"
    axios({
      method:"post",
      url:apiurl,
      data:this.user  // we requrie structure like {email,name,password}
  }).then((response)=>{
      console.log("response from login api",response)
      this.props.history.push("/")
  },(error)=>{
   console.log("error from login api",error)
  })
    event.preventDefault();
}
  render(){
    return(
            <form>
                <div class="Login-form p-4 my-4" style={{width:"60%", margin:"0 auto",background:"whitesmoke"}}>
      <div class="form-group">
          <h3 class="text-center" style={{color:"#38768a"}}>Login Form</h3>
          <h6>Hello {this.state.name}</h6>
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" onChange={this.handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" onChange={this.handlePass} class="form-control" id="exampleInputPassword1"/>
      </div>
      
      <div>
        <Link to="/sign-up">New User? Sign up Here</Link>
      </div>
      <button type="submit" onClick={this.login} class="btn btn-primary mt-3">Submit</button>
      </div>
        </form>
    );
  }
}
export default Login;