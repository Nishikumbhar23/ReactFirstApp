export var Baker1= function (state={
    choco_pastry:10
}, action) {
    switch(action.type){
        case "SOMEACTION" :{
            state= {...state}
            return state
        }
        case "Baking_Pastry" :{
            state= {...state}
            state["choco_pastry"]=-1
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