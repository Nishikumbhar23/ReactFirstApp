import axios from 'axios';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";
import { Link,withRouter} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import{useState} from "react"


function Cart(props) {
    var [loader, setLoader] = useState(true);
    var total=0;
    // var [cartDetails,setCartDetails]=useState([])
    function additmes(dis){
        // dis.quantity = dis.quantity + 1
        console.log("add item to cart",dis)
        props.dispatch({
            type:"Add_Cake",
            payload: dis,
            dispatch: props.dispatch({
                type:"Cart_Items"
            })
        })
    }    
    function removefromcart(dis){
        let cakeId={cakeId1:dis}
        console.log("id------------",cakeId)
        props.dispatch({
            type:"Remove_Cake",
            payload:cakeId,
            dispatch: props.dispatch({
                type:"Cart_Items",
            })
        })
    }
   function removeItem(dis){
    let cakeId={cakeId:dis}
    console.log("dis------------",dis.cakeid)
    props.dispatch({
        type:"Remove_Item",
        payload:cakeId,
        dispatch: props.dispatch({
            type:"Cart_Items",
        })
    })   
   }

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
                        <th>Total</th> 
                        </tr>
                    </thead>
                    < tbody>
                    {/* {console.log("cake details",props.cartitems)} */}
                    {props.cartitems && props.cartitems.map((dis)=> { 
                     
                        return<tr className="text-center">
                        <td style={{verticalAlign:"middle"}}><img src={dis.image} style={{width:"100px",height:"100px"}}></img></td>
                        <td style={{verticalAlign:"middle"}}>{dis.name}</td>
                        <td style={{verticalAlign:"middle"}}>Rs.{dis.price}</td>
                        <td style={{verticalAlign:"middle"}}>{dis.weight} kg</td>
                        <td style={{verticalAlign:"middle"}}>
                            <button type="button" className="mr-2 px-2" onClick={() => additmes(dis)}>+</button>
                                {dis.quantity}
                            <button type="button"  className="ml-2 px-2" onClick={()=>removefromcart(dis)} >-</button>
                        </td>
                        <td style={{verticalAlign:"middle"}}>
                        <button type="button" onClick={()=>removeItem(dis)} class="btn btn-danger">Remove</button>

                        </td>
                        <td style={{verticalAlign:"middle"}}>{ dis.price * dis.quantity}</td>

                        <span className="d-none">Total :{total+= dis.price * dis.quantity}</span>

                        </tr>
                        
                         } )
                        }
                    </tbody>
                    </table>
                    <span className="" style={{float:'right'}}><b>Total : {total} </b></span>
                    
                        <Link to="/placeorder"><button type="button" className="btn btn-success btn-block"><b>Checkout</b></button></Link>
                           

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
    isloading: state['CakesCartItems']['isloading'],

    isuserloggedin: state["AuthReducer"]["isuserloggedin"],
    authtoken:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["token"],
  }
})(Cart)