export function CakeDetails(props){
    
    return(
        <div className="container">
            <h3>Cake Details</h3>
            <div class="row align-items-center">
                <div class="col-sm-5">
                    <img style={{height:"18rem"}} src='cake1.jpg' class="card-img-top"></img>
                </div>
                <div class="col-sm-7  text-center">
                    <h3 class="mb-3" style={{color:"#38768a",fontFamily:" cursive"}}><b>Chocolate Cake</b></h3>
                    <p class="mb-3" style={{fontFamily:" cursive"}}>Delicious chocolate cake for party of four people.
                    A rich moist chocolate cake with a chocolate buttercream icing. This is the best cake in the world!</p>
                    <h5 className=""><span style={{color:"#38768a"}}><b>Current rate : </b></span>500</h5>
                    <h5 className=""><span style={{color:"#38768a"}}><b>Flovor </b></span>chocolate</h5>
                    <h5 className=""><span style={{color:"#38768a"}}><b>Weight </b></span>1 kg</h5>
                    <h5 className="mb-5"><span style={{color:"#38768a"}}><b>Occasion : </b></span>Birthday special</h5>
                    <button type="submit"  class="btn btn-primary" style={{backgroundColor:"#38768a"}}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}
export default CakeDetails