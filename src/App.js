import logo from './logo.svg';
import './App.css';
import {Navbar} from "./Components/Navbar"
import Carousel from "./Components/Carousel" 
import Cake from './Components/Cake';
import Login from './Components/Login';
import { AddCake } from './Components/AddCake';

let cake= { name:"Choclate cake",price:"500",image:"cake1.jpg"}
let cake2= { name:"Rainbow cake",price:"500",image:"rainbow.jpg"}
let cake3= { name:"Fruit cake",price:"500",image:"fruit.jpg"}

function App() {
  return (  
    <div className="App">
     <Navbar ></Navbar>
      <Carousel></Carousel>
      <AddCake></AddCake>
     <div class="row">
       <Cake data={cake}/>
       <Cake data={cake2}/>
       <Cake data={cake3}/>
     </div>
     <Login></Login>

    </div>
  );
}

export default App;
