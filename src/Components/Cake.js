function Cake(props){

    console.log("................",props)
    return(
        <div class="card col-4">
            <img style={{height:"18rem"}} src={props.data.image} class="card-img-top"></img>
            <div class="card-body">
                <h5 class="card-title">{props.data.name}</h5>
                <p className="card-text">{props.data.price}</p>

            </div>
        </div>
    )
}
export default Cake