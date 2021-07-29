import axios from "axios";
import { PureComponent } from "react";
import { Link } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';

class RecoverPassword extends PureComponent {
    constructor(props) {
        super(props)
         // initialize the state
        this.state = {
            error: "Invalid Credentials"
        }
    }
    user = {}

    handleEmail = (event) => {
        this.user.email = event.target.value
    }

    recoverpassword = (event)=>{
        event.preventDefault();

        let apiurl = process.env.REACT_APP_BASE_API + "/recoverpassword"

        axios({
            method:"post",
            url:apiurl,
            data:this.user  // we required structure like {email}
        }).then((response)=>{
            console.log("response from recoverpassword api",response)
            toast("Password sent to your Email Id!", {
                position: "top-right",
              });
        },(error)=>{
         console.log("error from recoverpassword api",error)
        })
    }

    render() {
        return (
            <div className="container mt-5">
                <form className="p-4 my-4" style={{width:"60%", margin:"0 auto",background:"whitesmoke"}}>
                <h3 class="text-center" style={{color:"#38768a"}}>Recover Password</h3>
                    <Link to="/login" className="mb-3 d-block">Return to login</Link>
                    <div class="form-group">
                        <label for="emailaddress">Email address</label>
                        <input onChange={this.handleEmail} type="email" class="form-control" name="email" placeholder="Email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button onClick={this.recoverpassword} type="submit" className="btn btn-primary">submit</button>
                </form>
            </div>
        )
    }

}


export default RecoverPassword