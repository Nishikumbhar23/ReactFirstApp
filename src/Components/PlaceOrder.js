import {Component} from "react"
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from "react-toastify";
// import {PlaceOrderthunk} from '../reduxstore/thunks';
 
function PlaceOrder(props){
    if (!props.isuserloggedin) {
        props.history.push("/login")
      } 
    let user={}
    function handleName(event){user.name=event.target.value;}
    function handlePhone(event){user.phone=event.target.value;}
    function handleAddress(event){user.address=event.target.value;}
    function handleArea(event){user.area=event.target.value;}
    function handleCity(event){user.city=event.target.value;}
    function handlePincode(event){user.pincode=event.target.value;};
   
  
function handleSubmit(event) {
    event.preventDefault();
   let total=0;
    props.cartitems && props.cartitems.map((each, index)=> { 
        total+= each.price * each.quantity
    })
    console.log("price:",total)

    user.cakes=props.cartitems;
    user.price=total;
    console.log("<<<<<<>>>>>>",user);
    // props.dispatch(PlaceOrderthunk(user))
    props.dispatch({
        type:"PlaceOrder_Items",
        payload:user
    })

    if(props.placeorder){
        toast.success("order placed successfully");
    }
    else{
        toast("order placed successfully")
    }
}
    // render(){
    return(
        <div className="container">
            <form>
                <div class="place-order p-4 my-4" style={{ margin:"0 auto",background:"whitesmoke"}}>
                <div className="row">
                        <div className="col-6">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" onChange={handleName} class="form-control" id="name"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="number" onChange={handlePhone}  class="form-control" id="phone"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div class="form-group">
                                <label for="address">Address</label>
                                <input type="text" onChange={handleAddress} class="form-control" id="address"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="form-group">
                                <label for="area">Area</label>
                                <input type="text" onChange={handleArea} class="form-control" id="area"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div class="form-group">
                                <label for="City">City</label>
                                <input type="text" onChange={handleCity} class="form-control" id="city"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="form-group">
                                <label for="pincode">Pincode</label>
                                <input type="number" onChange={handlePincode} class="form-control" id="pincode"/>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <button className="btn btn-success btn-block" type="submit" onClick={handleSubmit}  >Place Order</button>


            </form>      
        </div>
    )
    }
// }
PlaceOrder = withRouter(PlaceOrder)
export default connect(function(state,props) {
  return {
    cartitems : state["CakesCartItems"]["cartitems"],
    placeorder: state["CakesCartItems"]["placeorder"],
    isloading: state['CakesCartItems']['isloading'],
    isuserloggedin: state["AuthReducer"]["isuserloggedin"],
    authtoken:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["token"],
  }
})(PlaceOrder)