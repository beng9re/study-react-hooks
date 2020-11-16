import React,{useState} from 'react';


//프롭스의 역할
function Counter_UseState({props_number,makeby}) {

    //setState 로 컴포넌트 상태관리 가능하다
    const [number,setNumber] = useState(props_number);
    const [inputs,setInputs] = useState({
        ID : "",
        PW  : "",
    });

    const {ID,PW} = inputs;

    const onIncreMent = (e) =>{
        setNumber(number+1);
    }
    const onDecrement = (e) =>{
        setNumber(number-1);
    }

    const changeInputValue = (e) =>{
        const {value,name} = e.target;
        console.log(ID);
        console.log(value);

        // 기존 객체 안 건들고 변경하기 
        setInputs({...inputs,[name]:value});
    }


    return <>
            <h3>USE_STATE </h3>
            <span>MY Name IS :: {makeby}</span>
            <h1>{number}</h1>
            <button onClick={onIncreMent}> +1</button>
            <button onClick={onDecrement}>-1</button>
            <h3>input Update</h3>
            ID : <input name="ID" value={ID} onChange ={changeInputValue}></input>
            PW : <input name="PW" value={PW} onChange ={changeInputValue}></input>
            <hr/>
        </>
    
}


export default Counter_UseState;
