import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios'
import UseAsync from './UseAsync';
import User from './User';
import {useAsync} from 'react-async'
import { useUsersState, useUsersDispatch, getUsers } from './UsersContext';

//env 안에 환경변수 가져오기
const API_PATH = process.env.REACT_APP_API_PATH;


async function getUsers(){
    const response = await axios.get(API_PATH+"/users");
    
    return response.data;
}


function Users(){
    const [userId, setUserId] = useState(null);
    //시작하자마자 불러오는경우
    const { data: users, error, loading, reload } = useAsync({
        promiseFn: getUsers
    });
    const state = useUsersState();
    const dispatch = useUsersDispatch();

    const { data: users, loading, error } = state.users;

    const fetchData = () =>{
        getUsers(dispatch);
    }

    // const [state,fetchData] = UseAsync(getUsers,[]);
    // const { loading, data: users, error } = state;
    
    
    //fetchData();

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



    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다.</div>;
    if (!users) return  <button onClick={reload}>불러오기</button>;

    return <>
        <ul>
            {users.map((user)=>
            <li style={{ cursor: 'pointer' }}
                    onClick={() => setUserId(user.id)}
                    key={user.id}>
                  {user.name}</li>)}
        </ul>
        <button onClick={reload}>리로딩하기</button>
        <div>
            {userId && <User id={userId}></User>}
        </div>
        
        
    </>
}

export default Users;