import {useContext} from "react"
import {MyContext} from "./Home"
import  {withRouter} from "react-router-dom";

function Cake(props){
    const context1 = useContext(MyContext)
    // console.log("................",props)
    function showCakeDetails(event){
        props.history.push('cake/'+props.data.cakeid)
    }
    return(
        <div class="col-sm-4">
            <div class="card my-5">
                <img style={{height:"18rem"}} src={props.data.image} class="card-img-top"></img>
                <div class="card-body text-center">
                    <h5 class="card-title" style={{color:"#38768a"}}><b>{props.data.name}</b></h5>
                    <p className="card-text">{props.data.price}</p>
                    <button type="submit" onClick={showCakeDetails} class="btn btn-primary" style={{backgroundColor:"#38768a"}}>Buy Now</button>
                </div>
            </div>
        </div>

    )
}
export default withRouter(Cake)