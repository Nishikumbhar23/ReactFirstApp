import queryString from 'query-string'
import{useEffect, useState} from "react"


function Search(props){
// var query=queryString.parse(props.location.search);

var [cakeresults , setCakeresults] = useState([])
var query = queryString.parse(props.location.search).q
console.log("query object" , query)


// useEffect(()=>{
//   let apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q="+ query


// },[query])
    return(
        <div class="container">
            <h3>Search here for {query}</h3>
        </div>

    )
}
export default Search