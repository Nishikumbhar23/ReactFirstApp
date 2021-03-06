import {all,takeEvery,put} from "redux-saga/effects"
import axios from "axios"
import {cakesCart} from "../index"
import { toast } from "react-toastify";

function  *CartGenerator() {
    var success =true;
    yield put({
        type:"CART_FETCHING"
    })
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
    yield takeEvery('Cart_Items',CartGenerator)
  }

/////////////////////////////////////////////////
function  *AddCakeCart(action) {
    var success =true;
    yield put({
        type:"CART_FETCHING"
    })
    var response=yield axios({
        method:"post",
        url:"https://apifromashu.herokuapp.com/api/addcaketocart",
        headers:{
            authtoken:localStorage.token
        },
        data:action.payload        
    })
    console.log("add cake from cart", response)
    if(response.data.data){
        yield put({
            type:"ADD_CAKE_SUCCESS",
            payload:response.data.data
        })
    }
    else{
        yield put({
            type:"ADD_FAILURE"
        })
    }
    console.log(".......",action.dispatch)
    yield put(action.dispatch)
}
function *AddCakeCartSaga(){
    yield takeEvery('Add_Cake', AddCakeCart)
  }


////////////////////////////////////
function  *RemoveCake(action) {
    var success =true;
    yield put({
        type:"CART_FETCHING"
    })
    var response=yield axios({
        method:"post",
        url:"https://apifromashu.herokuapp.com/api"+"/removeonecakefromcart",
        headers:{
            authtoken:localStorage.token
        },
        data:action.payload.cakeId1
        
    })
    console.log("-----------",action.payload.cakeId1 )

    console.log("remove cake from cart", response.data.message)
    if(response.data.message=="Removed  item from cart"){
        yield put({
            type:"REMOVE_CAKE_SUCCESS",
            payload:response.data.data
        })
    }
    else{
        yield put({
            type:"REMOVE_FAILURE"
        })
    }
    console.log(".......",action.dispatch)
    yield put(action.dispatch)
}
function *RemoveCakeSaga(){
    yield takeEvery('Remove_Cake' , RemoveCake)
  }
///////////////////////////////////////////////////

function  *RemoveItem(action) {
    var success =true;
    yield put({
        type:"CART_FETCHING"
    })
    var response=yield axios({
        method:"post",
        url:"https://apifromashu.herokuapp.com/api"+"/removecakefromcart",
        headers:{
            authtoken:localStorage.token
        },
        data:action.payload.cakeId
        
    })

    console.log("remove cake from cart", response.data.message)
    if(response.data.message=="Removed whole cake  item from cart"){
        yield put({
            type:"REMOVE_ITEM_SUCCESS",
            payload:response.data.data
        })
    }
    else{
        yield put({
            type:"REMOVE_ITEM_FAILURE"
        })
    }
    console.log(".......",action.dispatch)
    yield put(action.dispatch)
}
function *RemoveItemSaga(){
    yield takeEvery('Remove_Item' , RemoveItem)
  }
/////////////////////////////////////////////////////



  function *PlaceOrders(action){
    console.log("???",action.payload)
    yield put({
        type: "CART_FETCHING"
    })
    let apiUrl = "https://apifromashu.herokuapp.com/api/addcakeorder"
    let response=yield axios({
        method: 'post',
        url: apiUrl,
        headers: {
            authToken: localStorage.token
        },
        data: action.payload
    })
    console.log("Response from place order", response)
    if(response.data.messageg=="order placed"){
        yield put({
            type: "PLACEORDER_SUCCESS",
            payload: response.data.messageg
        })
        toast.success("order placed successfully");
    }
    else{
        yield put({
            type: "PLACEORDER_FAILURE"
        })
    }
}
function *PlaceOrdersSaga(){
    yield takeEvery('PlaceOrder_Items',PlaceOrders)
  }
  export default function *RootSaga(){
    console.log("root saga ")
    yield all([CartSaga(),RemoveCakeSaga(),AddCakeCartSaga(),RemoveItemSaga(), PlaceOrdersSaga()])
}  