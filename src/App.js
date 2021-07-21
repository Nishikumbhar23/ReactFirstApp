import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Carousel from "./Components/Carousel" 
import Cake from './Components/Cake';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {AddCake} from './Components/AddCake';
import Search from './Components/Search';
import CakeDetails from './Components/CakeDetails'
import  {BrowserRouter, Route, Link} from "react-router-dom";

function App() {
  return (  
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/sign-up" component={Signup}></Route>     
      <Route exact path="/search" component={Search}></Route>
      <Route exact path="/cake/:paramentername" component={CakeDetails}></Route>

      </BrowserRouter>
      <AddCake></AddCake>
    </div>
  );
}

export default App;
