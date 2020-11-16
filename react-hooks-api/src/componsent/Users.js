import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios'

//env 안에 환경변수 가져오기
const API_PATH = process.env.REACT_APP_API_PATH;


function reducer(state,action){
    switch(action.type){
        case 'LOADING' :
            return {
                loading:true,
                users:null,
                error:false
            }
        case 'SUCSESS' :
            return {
                loading:false,
                users:action.data,
                error:false
            }
        case 'ERROR' :
            return {
                loading: false,
                users: null,
                error: action.error
            }
        default : 
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function Users(){
    // const [users,setUsers] = useState(null);
    // const [loading,setLoding] = useState();
    // const [error,setError] = useState(false);

    // const fetchData = async () => {
    //     try{
    //         setUsers(null);
    //         setLoding(true);
    //         setError(false);
    //         const {data} =  await axios.get(API_PATH+"/users");
    //         setUsers(data);
    //     }catch(e){
    //         console.error(e)
    //         setError(true);
    //     }
    //     setLoding(false);   
    // }

    const [state,dispatcher] = useReducer(reducer,{
        loading: false,
        users: null,
        error: null
        }
    );

    const fetchData = async () => {
        try{
            dispatcher({type:"LOADING"});
            const {data} =  await axios.get(API_PATH+"/users");
            console.log(data);
            dispatcher({type:"SUCSESS",data});
        }catch(e){
            dispatcher({type:"ERROR"});
        }
        
    }
    useEffect(()=>{
      fetchData();
    },[]); //컴포넌트가 생성되자마자

    console.log(state);

    if (state.loading) return <div>로딩중..</div>;
    if (state.error) return <div>에러가 발생했습니다.</div>;
    if (!state.users) return null;

    return <>
        <ul>
            {state.users.map((user)=><li key={user.id}>{user.name}</li>)}
        </ul>
        <button onClick={fetchData}>리로딩하기</button>
    </>
}

export default Users;