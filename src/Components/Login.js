import {Component} from "react"

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
    this.user.pass=event.target.value;
  }
  login=(event)=>{
    this.setState({
      name:"Nishu"
    })
    console.log(this.user);
    // this.user.name="Nishu"
    event.preventDefault();
}
  render(){
    return(
            <form>
                <div class="Login-form p-4 my-4" style={{width:"60%", margin:"0 auto",background:"whitesmoke"}}>
      <div class="form-group">
          <h3 class="text-center">Login Form</h3>
          <h6>Hello {this.state.name}</h6>
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" onChange={this.handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" onChange={this.handlePass} class="form-control" id="exampleInputPassword1"/>
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" onClick={this.login} class="btn btn-primary">Submit</button>
      </div>
        </form>
    );
  }
}
export default Login;