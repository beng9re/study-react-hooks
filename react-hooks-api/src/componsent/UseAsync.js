import React, { useEffect, useReducer, useState } from 'react';

// 데이터 공통화 
function reducer(state,action){
    console.log("reducer",state)
    switch(action.type){
        case 'LOADING' :
            return {
                loading:true,
                data:null,
                error:false
            }
        case 'SUCSESS' :
            return {
                loading:false,
                data:action.data,
                error:false
            }
        case 'ERROR' :
            return {
                loading: false,
                data: null,
                error: action.error
            }
        default : 
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}


function UseAsync(fetch,deps=[],isSkip=false){
    const [state,dispatcher] = useReducer(reducer,{
        loading: false,
        data: null,
        error: null
        }
    );

    const fetchData = async () => {
        try{
            dispatcher({type:"LOADING"});
            const data =  await fetch();
            console.log(data);
            dispatcher({type:"SUCSESS",data});
        }catch(e){
            dispatcher({type:"ERROR"});
        }
    }

    useEffect(() => {
        if (isSkip) return;
        fetchData();
    }, deps);
    
    return [state, fetchData];

}

export default UseAsync;