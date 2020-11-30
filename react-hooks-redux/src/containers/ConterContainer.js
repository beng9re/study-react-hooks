import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { increase, decrease, setDiff } from '../modules/counter';
import Counter from '../components/Counter';

function ConterContainer(){
    // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
    // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }));

    const dispatch = useDispatch();
    const onIncrease = () => dispatch(increase);
    const onDecrease = () => dispatch(decrease);
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter 
            number={number}
            diff={diff}
            // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}>

        </Counter>
    )

}



export default ConterContainer;