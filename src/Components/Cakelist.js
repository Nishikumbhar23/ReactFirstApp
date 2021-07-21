import Cake from "./Cake"



let cake= { cakeid:101, name:"Choclate cake",price:"500",image:"cake1.jpg"}
let cake2= { cakeid:102, name:"Rainbow cake",price:"500",image:"rainbow.jpg"}
let cake3= { cakeid:103, name:"Fruit cake",price:"500",image:"fruit.jpg"}

export function Cakelist(props){


    return(
        <div className="container" >
            <div className=" row ">
            <Cake data={cake} history={props.history}/>
            <Cake data={cake2} history={props.history}/>
            <Cake data={cake3} history={props.history}/>
        </div>
      </div>
    );
}
export default Cakelist