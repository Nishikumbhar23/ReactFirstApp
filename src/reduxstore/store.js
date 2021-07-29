import {createStore , combineReducers} from "redux"
import { Baker1,Baker2,AuthReducer } from "./reducers"

var reducers = combineReducers({Baker1,Baker2,AuthReducer})
var store= createStore(reducers)

export default store
console.log("store " , store.getState())

// store.subscribe(()=>{
//     console.log("i will be caled on any event on store", store.getState())
// })

// var storedata= store.getState()
// console.log("state of store is initially " , storedata)

// store.dispatch({
//     type:"Pastry_cakes"
// })
//  var storedata=store.getState()
//  console.log("state of store is", storedata);

//  store.dispatch({
//     type:"Baking_Pastry"
// })

// store.dispatch({
//     type:"Baking_Pastry2"
// })