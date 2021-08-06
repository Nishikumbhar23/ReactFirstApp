import { connect } from "react-redux";
import { withRouter } from "react-router";
import {Ordersthunk} from '../reduxstore/thunks';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


function OrderHistory(props){
    props.order && console.log("history=====",props.order);
     useEffect(() => {
        if (props.isuserloggedin) {
            props.dispatch(Ordersthunk());
        }
        else{
            toast("Please Login to view details", {
                position: "top-center",
              });
            props.history.push("/login");
         }
        }, []);

    return(
        <div className="container mt-5">
            <div classname=" order-table table-responsive mt-5">
                <table class="table" style={{verticalAlign:"middle"}}>
                    <thead class="thead-light">
                        <tr className="text-center">
                        <th>Date </th>
                        <th>Order </th>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Mode of Payment</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {console.log("order history:",props.order)}
                        {props.orders && props.orders.map((dis)=> { 
                            return(
                                <tr className="text-center">
                                    <td style={{verticalAlign:"middle"}}>{dis.orderdate}</td>
                                    <td style={{verticalAlign:"middle"}}>{dis.orderid}</td>
                                    <td style={{verticalAlign:"middle"}}>
                                    {dis.cakes && dis.cakes.map((display)=>{
                                        return <span>{display.name}<br></br></span>
                                    })} 
                                    </td>
                                    <td style={{verticalAlign:"middle"}}>₹{dis.price}</td>
                                    <td style={{verticalAlign:"middle"}}>{dis.mode}</td>
                                    </tr>
                            )
                        })}
                    </tbody>
                </table>
            
            </div>
        </div>
    );
}

OrderHistory= withRouter(OrderHistory)
export default connect(function(state, props){
    return{
        isuserloggedin: state["AuthReducer"]["isuserloggedin"],
        orders: state["CakesCartItems"]["orders"]
    }
})( OrderHistory)