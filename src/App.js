import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Login from './Components/Login';
import Signup from './Components/Signup';
import {AddCake} from './Components/AddCake';
import Search from './Components/Search';
import CakeDetails from './Components/CakeDetails'
import  { useState } from 'react';
import  {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  // var [isuserloggedin,setUserlogin]= useState(false)
  var [isuserloggedin,setUserlogin] = useState(localStorage.token?true:false)
function loggedin(){
  setUserlogin(true)
}

  return (  
    <div className="App">
      <BrowserRouter>
      <Navbar isuserloggedin={isuserloggedin}></Navbar>
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" ><Login loggedin={loggedin}></Login> </Route>
      <Route exact path="/sign-up" component={Signup}></Route>     
      <Route exact path="/search" component={Search}></Route>
      <Route exact path="/add-cake" component={AddCake}></Route>

      <Route exact path="/cake/:paramentername" component={CakeDetails}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
