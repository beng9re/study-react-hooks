import React from 'react';
import { useState ,useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  }



function CounterUseReducer() {
    const [counter,dispatcher] = useReducer(reducer,0); 
    const onDecurement = (e) => {
        dispatcher({type:'DECREMENT'});
    } 

    const onIncreement = (e) =>{
        dispatcher({type:'INCREMENT'});
    } 
   
   return <div>
        <span>
            current Count :: <b>{counter}</b>
        </span>
        <div>
            <button onClick={onIncreement}>증가</button>
            <button onClick={onDecurement} >감소</button>
        </div>
    </div>
} 


export default CounterUseReducer;