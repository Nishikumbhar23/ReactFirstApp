import {Component,PureComponent} from "react"
import { Link } from "react-router-dom"
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Signup extends PureComponent{
    constructor(){
        super()
        this.state = {
            name:"nishi"
        }
    } 
    user = {}

    handleEmail = (event)=>{
        this.user.email = event.target.value
      }
    handlePassword = (event)=>{
         this.user.password = event.target.value
       }
    handleName = (event)=>{
        this.user.name = event.target.value
      }
    SignUp = (event)=>{
        event.preventDefault()
        // this.setState({
        //      errorMessage:"Please Enter all the details"
        // })
        if( this.user.name=="" || this.user.name==undefined || this.user.email== "" || this.user.email==undefined || this.user.password=="" || this.user.password==undefined){
            toast.error("Please enter all details", {
                position: "top-center",
              });
        }
        let apiurl="https://apifromashu.herokuapp.com/api/register"
        axios({
          method:"post",
          url:apiurl,
          data:this.user  // we requrie structure like {email,name,password}
      }).then((response)=>{
          console.log("response from signup api",response)
      },(error)=>{
       console.log("error from signup api",error)
      })

    }

    render(){
        return (
          <div class="Login-form p-4 my-4" style={{width:"60%", margin:"0 auto",background:"whitesmoke"}}>
                <form>
                    <h1>Signup Here</h1>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input onChange={this.handleName} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                        <small className="text-danger form-text">{this.state.errorMessage}</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input onChange={this.handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small className="text-danger form-text">{this.state.errorMessage}</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={this.handlePassword} type="password" class="form-control"  placeholder="Password" />
                        <small className="text-danger form-text">{this.state.errorMessage}</small>
                    </div>
                    <button onClick={this.SignUp} type="submit" class="btn btn-primary">Submit</button>
                    <p className="mt-3 text-center"><small>If you have already account <Link to="/login">Login Here</Link></small></p>
                </form>
            </div>
        );
    }
}

export default Signup;




















// import {Component} from "react"
// import { Link } from "react-router-dom"

// class Signup extends Component{
//   constructor(){
//     super()
//     this.state = {
//         name:"SignUp"
//     }
// }
// user = {}

// handleEmail = (event)=>{
//     this.user.email = event.target.value
//   }
// handlePassword = (event)=>{
//      this.user.password = event.target.value
//    }
// handleName = (event)=>{
//     this.user.name = event.target.value
//   }
// SignUp = (event)=>{
//     this.setState({
//         errorMessage:"Invalid Credentials"
//     })
//    event.preventDefault()
// }
//   render(){
//     return(
//       //       <form>
//       //           <div class="Login-form p-4 my-4" style={{width:"60%", margin:"0 auto",background:"whitesmoke"}}>
//       //           <h3 class="text-center" style={{color:"#38768a"}}>Sign up Here</h3>
//       //           <div class="form-group">
//       //   <label for="exampleInputname">Enter Name</label>
//       //   <input type="text"  class="form-control" id="exampleInputname" />
//       //   <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//       // </div>
//       //       <div class="form-group">
//       //   <label for="exampleInputEmail1">Email address</label>
//       //   <input type="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//       //   <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//       // </div>
//       // <div class="form-group">
//       //   <label for="exampleInputPassword1">Password</label>
//       //   <input type="password" class="form-control" id="exampleInputPassword1"/>
//       // </div>
//       // <div class="form-group form-check">
//       //   <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//       //   <label class="form-check-label" for="exampleCheck1">Check me out</label>
//       // </div>
//       // <button type="submit"  class="btn btn-primary" >Submit</button>
//       // </div>
//       //   </form>
//        <div className="container mt-5">
//        <form className="w-50 m-auto">
//            <h1>Signup Here</h1>
//            <div class="form-group">
//                <label for="exampleInputEmail1">Name</label>
//                <input onChange={this.handleName} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
//                <small className="text-danger form-text">{this.state.errorMessage}</small>
//            </div>
//            <div class="form-group">
//                <label for="exampleInputEmail1">Email</label>
//                <input onChange={this.handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//                <small className="text-danger form-text">{this.state.errorMessage}</small>
//            </div>
//            <div class="form-group">
//                <label for="exampleInputPassword1">Password</label>
//                <input onChange={this.handlePassword} type="password" class="form-control"  placeholder="Password" />
//                <small className="text-danger form-text">{this.state.errorMessage}</small>
//            </div>
//            <button onClick={this.SignUp} type="submit" class="btn btn-primary">Submit</button>
//            <p className="mt-3 text-center"><small>If you have already account <Link to="/login">Login Here</Link></small></p>
//        </form>
//    </div>
//     );
//   }
// }
// export default Signup;