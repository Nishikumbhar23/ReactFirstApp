import {all,takeEvery,put} from "redux-saga/effects"
import axios from "axios"
import {cakesCart} from "../index"

function  *CartGenerator() {
    var success =true;
    yield put({
        type:"CART_FETCHING"
    })
    
    // let response=yield axios({
    //     method: "post",
    //     url: "https://apifromashu.herokuapp.com/api/cakecart",
    //     headers: {
    //         authToken: localStorage.token
    //     },
    //     requestObj:{}
    // })
    var response=yield cakesCart({
        method:"post",
        url:"https://apifromashu.herokuapp.com/api"+"/cakecart",
        data:{}
    })
    console.log("data from cart items", response)
    if(response.data.data){
        yield put({
            type:"CART_SUCCESS",
            payload:response.data.data
        })
    }
    else{
        yield put({
            type:"CART_FAILURE"
        })
    }
    
}
function *CartSaga(){
    yield takeEvery('Cart_Items' , CartGenerator)
  }
  export default function *RootSaga(){
    console.log("root saga ")
    yield all([CartSaga()])
}  