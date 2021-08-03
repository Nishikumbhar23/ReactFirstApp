import {createStore , combineReducers, applyMiddleware} from "redux"
import { CakesCartItems,Baker2,AuthReducer } from "./reducers"
import createSaga from "redux-saga"
import RootSaga from "./sagas"
import thunk from "redux-thunk"

var sagaMiddleware = createSaga()
var reducers = combineReducers({CakesCartItems,Baker2,AuthReducer})
var store= createStore(reducers,  applyMiddleware(sagaMiddleware,thunk))

sagaMiddleware.run(RootSaga)
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