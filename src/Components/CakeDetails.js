import { useState, useEffect } from "react"
import StarRatings from 'react-star-ratings';
import axios from "axios"
import Loader from "react-loader-spinner";

function CakeDetails(props){
   var [cakeDetails , setCakedetails]  = useState({})
   var [loader, setLoader] = useState(false);

   useEffect(()=>{
    let apiurl = "https://apifromashu.herokuapp.com/api" + "/cake/" + props.match.params.cakeid
    setLoader(true)

    axios(
      {
        method:'get',
       url:apiurl    
     }
    ).then((response)=>{
      console.log("response from  cake details api" , response.data)
      setCakedetails(response.data.data)
    },(error)=>{
        setLoader(true)

      console.log("error from all cakes api" , error)
      setLoader(false)

    })
    
   }, [])
 var addToCart = (event) => {
        event.preventDefault();
        if(!localStorage.token) {
            alert("Please login to add items to cart")
            
        } else {
            // props.history.push("/cart");
            let apiurl = process.env.REACT_APP_BASE_API + "/addcaketocart"
       
        axios(
            {
                method: 'post',
                url: apiurl,
            }
        ).then((response) => {
            alert("added to cart")
            console.log("request sent from cake details api : " + JSON.stringify(response.data.data))
            props.history.push("/cart")
        }, (error) => {
            alert("error while adding to cart")
            console.log("error from cake details api : " + error)
        })
        }
    }
    const Loaderstyle = { marginTop: "20%", marginLeft: "48%" };
        useEffect(() => {
            setTimeout(() => {
                setLoader(false);
            },500);     
        });
   return (
    <div className="container mt-5 p-4 bg-light">
                    {loader ?<div className="d-flex vh-100 "> <Loader
        style={Loaderstyle}
          type="Oval"
          color="#38768a"
          height={100}
          width={100}
          justifyContent= 'center'
          alignItems='center'
        /> </div>: ''}

    <h3 style={{color:"#38768a"}} className="">
         Cake Details  for the cake {props.match.params.cakeid}
     </h3>
      <div class="row align-items-center">
          <div class="col-sm-5">
              {/* <img style={{height:"18rem"}} src='/cake1.jpg' class=""></img> */}
              <img src={cakeDetails.image} style={{width:"460px",height:"500px"}} className="" alt="..."/>

          </div>
          <div class="col-sm-7  text-center">
              <h1 class="mb-3" style={{color:"#38768a"}}><b>{cakeDetails.name}</b></h1>
              <p class="mb-3" style={{}}>{cakeDetails.description}</p>
              <StarRatings
          rating={cakeDetails.ratings}
          starRatedColor="#38768a"
          starDimension="30px"
        starSpacing="5px"
          numberOfStars={5}
          name='rating'
        />
              <h5 className="mb-3 mt-2">{cakeDetails.reviews} Reviews</h5>
              <h5 className=""><span style={{color:"#38768a"}}><b>Current rate : </b></span>{cakeDetails.price}</h5>
              <h5 className=""><span style={{color:"#38768a"}}><b>Flovor </b></span>{cakeDetails.flavour}</h5>
              <h5 className=""><span style={{color:"#38768a"}}><b>Weight </b></span>{cakeDetails.weight} kg</h5>
              <h5 className="mb-5"><span style={{color:"#38768a"}}><b>Occasion : </b></span>{cakeDetails.type}</h5>
              <button onClick={addToCart} type="submit"  class="btn btn-primary" style={{backgroundColor:"#38768a"}}>Add to cart</button>
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