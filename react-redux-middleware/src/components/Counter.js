import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../modules/counter';

function Counter({number,onIncrease,onDecrease}){
    return (
        <div>
          <h1>{number}</h1>
          <button onClick={onIncrease}>+1</button>
          <button onClick={onDecrease}>-1</button>
        </div>
      );
}


export default Counter;