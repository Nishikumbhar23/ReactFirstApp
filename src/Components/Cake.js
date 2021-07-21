function Cake(props){

    console.log("................",props)
    function showCakeDetails(){
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
export default Cake