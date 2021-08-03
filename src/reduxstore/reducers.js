export var AuthReducer= function (state={
    isuserloggedin : localStorage.token?true:false,
    isloading:false
}, action) {
    console.log("Action :", action)
    switch(action.type){
        case "LOGIN_FETCH":{
            state= {...state}
            state["isloading"] = true
            return state
        }
        case "LOGIN_SUCCESS" :{
            state = {...state}
            state["isuserloggedin"] = true
            state["user"] = action.payload
            state["isloading"] = false
            console.log(">>>>>>>>>>>>>>>>>>>> login success" , state)
            return state
        }
        case "LOGIN_FAILURE":{
         state= {...state}
         state["isloading"] = false
         state["error"]="INVALID LOGIN"
         return state
     }
        default : return state
    }
 }
export var CakesCartItems= function (state={
    choco_pastry:10
}, action) {
    switch(action.type){
        case "CART_FETCHING" :{
            state= {...state}
            state["isloading"] = true
            return state
        }
        case "CART_SUCCESS" :{
            state= {...state}
            state["isloading"] = false
            state["cartitems"] = action.payload
            return state
        }
        case "CART_FAILURE" :{
            state= {...state}
            state["isloading"] = false
            state["carterror"] = "Some Error Occurred"
            return state
        }
        default:return state
    }
  
}

export var Baker2= function (state={
    cupcakes:10
}, action) {
    switch(action.type){
        case "Baking_CupCakes" :{
            state= {...state}
            state["cupcakes"]=+1
            return state
        }
        case "Baking_Cakes" :{
            state= {...state}
            state["cupcakes"]=-1
            return state
        }
        default:return state
    }
    
}