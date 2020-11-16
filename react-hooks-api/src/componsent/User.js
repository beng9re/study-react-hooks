import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import UseAsync from './UseAsync';

const API_PATH = process.env.REACT_APP_API_PATH;

async function getUser(id){
    const response = await axios.get(`${API_PATH}/users/${id}`);
    console.log(response);
    return response.data;
}


function User({id}){
  const [state] = UseAsync(() => getUser(id),[id]);
  const {loading, data: user, error } = state;
  

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );

}


export default User;