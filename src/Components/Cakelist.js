import Cake from "./Cake"
import axios from 'axios';
import{useEffect, useState} from "react"
import Loader from "react-loader-spinner";


let cake= { cakeid:101, name:"Choclate cake",price:"500",image:"cake1.jpg"}
let cake2= { cakeid:102, name:"Rainbow cake",price:"500",image:"rainbow.jpg"}
let cake3= { cakeid:103, name:"Fruit cake",price:"500",image:"fruit.jpg"}

export function Cakelist(props){
    var [cakes,setCakes]=useState([])
    var [loader, setLoader] = useState(true);

    useEffect(() =>{
let apiurl="https://apifromashu.herokuapp.com/api" + "/allcakes"
axios(
    {
    method:'get',
    url:apiurl
    }
).then((response)=>{
    console.log("response from all cake api",response.data)
    setCakes(response.data.data)
},(error)=>{
    console.log("error from all cake api",error)
    setLoader(false)

})

},[])
const Loaderstyle = { marginLeft: "48%" };
useEffect(() => {
  setTimeout(() => {
    setLoader(false);
  },600);
});
    return(
        <div className="container" >
            {loader ?<div className="d-flex vh-100 "> <Loader
        style={Loaderstyle}
          type="ThreeDots"
          color="#38768a"
          height={100}
          width={100}
          justifyContent= 'center'
          alignItems='center'
        /> </div>: ''}
           {/* {cakes.length>0  &&  
           <div className=" row ">
            <Cake data={cake} history={props.history}/>
            <Cake data={cake2} history={props.history}/>
            <Cake data={cake3} history={props.history}/>
        </div>} */}
          <div className ="row">
       {cakes.map((each,index)=>{
         console.log("picking cakes one by one" , index , each)
         return <Cake key={index} data={each} />
       })}

    </div> 
        </div>
    
    );
}
export default Cakelist