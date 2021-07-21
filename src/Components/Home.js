import Carousel from "./Carousel"
import Cakelist from "./Cakelist"

export function Home(props){


    return(
        <div>
            <Carousel />
            <Cakelist history={props.history} />
        </div>
    );
}
export default Home