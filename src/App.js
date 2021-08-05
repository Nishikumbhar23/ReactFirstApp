import logo from './logo.svg';
import './App.css';
import Loader from "react-loader-spinner";
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Login from './Components/Login';
import Signup from './Components/Signup';
import {AddCake} from './Components/AddCake';
import Search from './Components/Search';
import Pagenotfound from './Components/PageNotFound'
import RecoverPassword from './Components/RecoverPassword'
import Cart from './Components/Cart'
import PlaceOrder from './Components/PlaceOrder'
import CakeDetails from './Components/CakeDetails'
import  { useState,useEffect } from 'react';
import  {BrowserRouter, Route, Switch} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


function App() {
  
  const [loader, setLoader] = useState(true);
  // var [isuserloggedin,setUserlogin]= useState(false)
  var [isuserloggedin,setUserlogin] = useState(localStorage.token?true:false)
function loggedin(){
  setUserlogin(true)
}
const style = { marginTop: "20%", marginLeft: "48%" };
useEffect(() => {
  setTimeout(() => {
    setLoader(false);
  }, 1000);
});


  return (  
    <div className="App">
                <ToastContainer/>
        {loader ? (
        <Loader
        style={style}
          type="Oval"
          color="#38768a"
          height={100}
          width={100}
          justifyContent= 'center'
          alignItems='center'
        />
      ) : (
        
      <BrowserRouter>
      <Navbar isuserloggedin={isuserloggedin}></Navbar>
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" ><Login loggedin={loggedin}></Login> </Route>
      <Route exact path="/recoverpassword" component={RecoverPassword}></Route>     
      <Route exact path="/sign-up" component={Signup}></Route>     
      <Route exact path="/search" component={Search}></Route>
      <Route exact path="/add-cake" component={AddCake}></Route>
      <Route exact path="/cart" component={Cart}></Route>
      <Route exact path="/placeorder" component={PlaceOrder}></Route>
      <Route exact path="/cake/:cakeid" component={CakeDetails}></Route>
      <Route exact path="**" component={Pagenotfound} />
      </Switch>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
