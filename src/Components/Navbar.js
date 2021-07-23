import {useState , useEffect} from "react"
import  { Link, withRouter} from "react-router-dom";

function Navbar(props){
  var [tittle, setTitle]=useState("Cake Gellery");
  var [searchText, setSearchText]=useState(undefined);


  function search(e){
    e.preventDefault()
    if(searchText){
      var url="/search?q="+searchText;
      props.history.push(url);
    }
  }
  function getSearchText(event){
    setSearchText(event.target.value)
  }

//  function demo(event) {
//   event.preventDefault();
//   var value=document.getElementById("searchInput").value;
//   setTitle(value);  
// }

    return(
        <nav class="navbar navbar-expand-lg navbar-dark text-white" style={{backgroundColor:"#38768a"}}>
  <Link to="/"><a class="navbar-brand" href="#">{tittle}</a> </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/" class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
       <Link to="/add-cake" class="nav-link" href="#">Add Cake</Link>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#" >Gallery</a>
      </li>
      
    </ul>
    <form style={{margin:"auto"}} class="form-inline my-2 my-lg-0">
      <input id="searchInput" onChange={getSearchText} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      {/* <Link to={`/search?q=${searchText}`}> */}
      <button  onClick={search} class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
      {/* </Link> */}
    </form>
    {props.isuserloggedin==false && <form class="form-inline my-2 my-lg-0">
    <Link to="/login"> <button class="btn btn-light my-2 my-sm-0 mr-2" type="submit">Login</button></Link>
    </form>}
    {props.isuserloggedin==true &&  <form class="form-inline my-2 my-lg-0">
    <button class="btn btn-outline-light my-2 my-sm-0 mr-2" type="submit">Cart</button>
    <button class="btn btn-light my-2 my-sm-0 mr-2" type="submit">Logout</button>

    </form>}
  </div>
</nav>
    );
}
export default Navbar = withRouter(Navbar)