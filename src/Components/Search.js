import queryString from 'query-string'

function Search(props){
var query=queryString.parse(props.location.search);


    return(
        <div class="container">
            <h3>Search here for {query.q}</h3>
        </div>

    )
}
export default Search