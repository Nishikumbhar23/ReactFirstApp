import axios from 'axios';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";
import { withRouter} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import{useState} from "react"


function Cart(props) {
    var [loader, setLoader] = useState(true);

    // var [cartDetails,setCartDetails]=useState([])
    

    useEffect(() => {
        if (props.isuserloggedin) {
            props.history.push("/cart")
            props.dispatch({
                type:"Cart_Items"
            })

        }else{
            toast("Please Login to view cart details", {
                position: "top-center",
              });
            props.history.push("/login");
            
        // let apiurl = "https://apifromashu.herokuapp.com/api" + "/cakecart"
        // axios(
        //     {
        //         method: 'post',
        //         url: apiurl,
        //         headers:{
        //             authtoken:localStorage.token
        //         }    
        //     }
        // ).then((response) => {
        //     setCartDetails(response.data.data)
        //     console.log("response from cake cart api : ", response.data.data)
        // }, (error) => {
        //     console.log("error from cake cart api : ", error)
        // })
        }
    }, []);
    const Loaderstyle = { marginTop: "20%", marginLeft: "48%" };
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        },500);     
    });
    return(
        <div className="container">
            {loader ?<div className="d-flex vh-100 "> <Loader
        style={Loaderstyle}
          type="Oval"
          color="#38768a"
          height={100}
          width={100}
          justifyContent= 'center'
          alignItems='center'
        /> </div>: ''}
           <div className="row">
           <h3 style={{color:"#38768a"}} className="">Showing Items in the cart </h3>
            <div  className="col-12">
            {/* {console.log("Cart Details", this.props.cartitems)} */}

           <div classname=" cart-table table-responsive mt-5">
                <table class="table" style={{verticalAlign:"middle"}}>
                    <thead class="thead-light">
                        <tr className="text-center">
                        <th></th>
                        <th>Name </th>
                        <th>Price </th>
                        <th>Weight</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                        </tr>
                    </thead>
                    < tbody>
                    {console.log("cake details",props.cartitems)}
                    {props.cartitems && props.cartitems.map((each,index)=> { 
                     
                        return<tr key={index} className="text-center">
                        <td style={{verticalAlign:"middle"}}><img src={each.image} style={{width:"100px",height:"100px"}}></img></td>
                        <td style={{verticalAlign:"middle"}}>{each.name}</td>
                        <td style={{verticalAlign:"middle"}}>Rs.{each.price}</td>
                        <td style={{verticalAlign:"middle"}}>{each.weight} kg</td>
                        <td style={{verticalAlign:"middle"}}>{each.quantity}</td>
                        <td style={{verticalAlign:"middle"}}>
                        <button type="button" class="btn btn-danger">Remove</button>

                        </td>
                        </tr>
                         } )
                        }
                    </tbody>
                    </table>
            </div>
            </div>
            
           </div>
         </div>
    )
}

// export default Cart;
Cart = withRouter(Cart)
export default connect(function(state,props) {
  return {
    cartitems : state["CakesCartItems"]["cartitems"],
    isuserloggedin: state["AuthReducer"]["isuserloggedin"],
    authtoken:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["token"],
  }
})(Cart)