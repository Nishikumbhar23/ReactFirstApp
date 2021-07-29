import axios from 'axios';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

function Cart(props) {
    useEffect(() => {
        let apiurl = "https://apifromashu.herokuapp.com/api" + "/cakecart"
      
        axios(
            {
                method: 'post',
                url: apiurl,
                requestObj:{},
                headers: props.token
            }
        ).then((request) => {
            console.log("response from cake cart api : " + JSON.stringify(request.data.data))
        }, (error) => {
            console.log("error from cake cart api : " + error)
        })
    }, []);

    return(
        <div>
           <h1>cart</h1>
         </div>
    )
}

// export default Cart;
Cart = withRouter(Cart)
export default connect(function(state,props) {
  return {
    token:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["token"]
  }
})(Cart)