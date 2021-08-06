import axios from "axios"

 export  function Loginthunk(data){
    return async (dispatch)=>{
        dispatch({
            type:"LOGIN_FETCH"
        })
        var result  = await  axios({
            method:"post",
            url:"https://apifromashu.herokuapp.com/api/login",
            headers:{
                authtoken:localStorage.token
            },
            data:data
        })
        localStorage.token = result.data.token
        if(result.data.token){
            dispatch({
                type:"LOGIN_SUCCESS",
                payload:result.data
            })
        }
        else{
            dispatch({
                type:"LOGIN_FAILURE"
            })
        }
       
    }
}

export  function Ordersthunk(data){
    return async (dispatch)=>{
        dispatch({
            type:"CART_FETCHING"
        })
        var result  = await axios({
            method:"post",
            url:"https://apifromashu.herokuapp.com/api/cakeorders",
            headers: {
                authtoken: localStorage.token
            }
        });
        
        console.log("result",result.data.cakeorders)
        if(result.data.cakeorders){
            dispatch({
                type:"ORDER_SUCCESS",
                payload:result.data.cakeorders
            })
            
        }
        else{
            dispatch({
                type:"ORDER_FAILURE"
            })
        }
       
    }
}