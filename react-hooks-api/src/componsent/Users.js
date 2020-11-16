import React, { useEffect, useState } from 'react';
import axios from 'axios'

//env 안에 환경변수 가져오기
const API_PATH = process.env.REACT_APP_API_PATH;




function Users(){
    const [users,setUsers] = useState(null);
    const [loading,setLoding] = useState();
    const [error,setError] = useState(false);

    const fetchData = async () => {
        try{
            setUsers(null);
            setLoding(true);
            setError(false);
            const {data} =  await axios.get(API_PATH+"/users");
            setUsers(data);
        }catch(e){
            console.error(e)
            setError(true);
        }
        setLoding(false);   
    }


    useEffect(()=>{
      fetchData();
    },[]); //컴포넌트가 생성되자마자

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다.</div>;
    if (!users) return null;
    console.log(users);

    return <>
        <ul>
            {users.map((user)=><li key={user.id}>{user.name}</li>)}
        
        </ul>
        <button onClick={fetchData}>리로딩하기</button>
    </>
}

export default Users;