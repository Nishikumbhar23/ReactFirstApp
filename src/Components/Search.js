import queryString from 'query-string'
import{useEffect, useState} from "react"
import Cake from "./Cake";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import Loader from 'react-loader-spinner';

function Search(props){
    let query=queryString.parse(props.location.search);
    let [cakeResults, setCakeResults]=useState([]);
    var [loader, setloader] = useState(true)

    let [noCakeResult,setNoCakeResult]=useState([]);
    useEffect(()=>{
        let apiurl="https://apifromashu.herokuapp.com/api/searchcakes?q="+query.q;
        console.log(query);
        axios({
            method: "get",
            url: apiurl
        }).then((response)=>{
            console.log("response from all cakes api", response.data);
            setCakeResults(response.data.data);
                  setloader(false)
            if (!response.data.data.length) {
                setNoCakeResult(true)
                toast('No results found')
              } else {
                  setNoCakeResult(false);
                toast('Search results fetch successful!')
              }
        },(error)=>{
            toast.error("No Cake Found", {
                position: "top-right",
              });
            console.log("error from all cakes api", error);
        })
    },[query.q])
   
    return(
        <div className="container">
               
            <div className="row mt-5">
                <div className="col-12">
                <h3 style={{color:"#38768a"}} >Search here for {query.q}</h3>
                </div>
            </div>
         
             
                 {!loader && cakeResults == 0 &&
                    <div className="mt-5 bg-light p-3">
                        <p>Cake not found for {query.q}</p>
                    </div>
                 }
           
            <div className="row ">
                {cakeResults.map((each, index)=>{
                return <Cake key={index} data={each}/>
            })}
            </div> 
        </div>
        
    );
// var query=queryString.parse(props.location.search);

// var [cakeresults , setCakeresults] = useState([])
// var query = queryString.parse(props.location.search).q
// console.log("query object" , query)


// useEffect(()=>{
//   let apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q="+ query


// },[query])
    // return(
    //     <div class="container">
    //         <h3>Search here for {query}</h3>
    //     </div>

    // )
}
export default Search