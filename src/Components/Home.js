import React from "react"
import Carousel from "./Carousel"
import Cakelist from "./Cakelist"
export const MyContext = React.createContext({id:10})

export function Home(props){


    return(
        <div>
            <Carousel />
            {/* <Cakelist history={props.history} /> */}
            <MyContext.Provider>
            <Cakelist history={props.history}/>
            </MyContext.Provider>
        </div>
    );
}
export default Home