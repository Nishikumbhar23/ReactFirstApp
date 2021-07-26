import { useState, useEffect } from "react"
import axios from "axios"

function CakeDetails(props){
   var [cakeDetails , setCakedetails]  = useState({})
   useEffect(()=>{
    let apiurl = "https://apifromashu.herokuapp.com/api" + "/cake/" + props.match.params.cakeid

    axios(
      {
        method:'get',
       url:apiurl    
     }
    ).then((response)=>{
      console.log("response from  cake details api" , response.data)
      setCakedetails(response.data.data)
    },(error)=>{
      console.log("error from all cakes api" , error)
    })
    
   }, [])

   return (
    <div className="container">
    <h3 style={{color:"#38768a"}} className="mt-5">
         Cake Details Page  for the cake {props.match.params.cakeid}
     </h3>
      <div class="row align-items-center">
          <div class="col-sm-5">
              {/* <img style={{height:"18rem"}} src='/cake1.jpg' class=""></img> */}
              <img src={cakeDetails.image} style={{height:"18rem"}}  alt="..."/>

          </div>
          <div class="col-sm-7  text-center">
              <h3 class="mb-3" style={{color:"#38768a",fontFamily:" cursive"}}><b>{cakeDetails.name}</b></h3>
              <p class="mb-3" style={{fontFamily:" cursive"}}>Delicious chocolate cake for party of four people.
              A rich moist chocolate cake with a chocolate buttercream icing. This is the best cake in the world!</p>
              <h5 className=""><span style={{color:"#38768a"}}><b>Current rate : </b></span>{cakeDetails.price}</h5>
              <h5 className=""><span style={{color:"#38768a"}}><b>Flovor </b></span>{cakeDetails.flavour}</h5>
              <h5 className=""><span style={{color:"#38768a"}}><b>Weight </b></span>{cakeDetails.weight} kg</h5>
              <h5 className="mb-5"><span style={{color:"#38768a"}}><b>Occasion : </b></span>{cakeDetails.type}</h5>
              <button type="submit"  class="btn btn-primary" style={{backgroundColor:"#38768a"}}>Add to cart</button>
          </div>
      </div>
  </div>
   )
}

export default CakeDetails


// export function CakeDetails(props){
    
//     return(
        
//     );
// }
// export default CakeDetails