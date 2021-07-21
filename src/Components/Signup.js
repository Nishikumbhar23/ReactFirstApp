import {Component} from "react"

class Signup extends Component{
  
  render(){
    return(
            <form>
                <div class="Login-form p-4 my-4" style={{width:"60%", margin:"0 auto",background:"whitesmoke"}}>
                <h3 class="text-center" style={{color:"#38768a"}}>Sign up Here</h3>
                <div class="form-group">
        <label for="exampleInputname">Enter Name</label>
        <input type="text"  class="form-control" id="exampleInputname" />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
            <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit"  class="btn btn-primary" >Submit</button>
      </div>
        </form>
    );
  }
}
export default Signup;