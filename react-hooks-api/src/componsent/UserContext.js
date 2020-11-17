import React from 'react'

const initState = {
    users : {
        loading :false,
        data : null,
        error : null
    },
    user:{
        loading :false,
        data : null,
        error : null
    }
};

//로딩상태
const loadingState = {
    loading :true,
    data : null,
    error : null
}
//성공 상태 
const success = data => ({
    loading: false,
    data,
    error: null
});

//실패 에러 
const error = error => ({
    loading: false,
    data: null,
    error: error
});

function userReducer(state,action) {
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state,
                users:loadingState
            };
        case 'GET_USERS_SUCCESS':
            return {
            ...state,
            users: success(action.data)
            };
        case 'GET_USERS_ERROR':
            return {
            ...state,
            users: error(action.error)
            };
        case 'GET_USER':
            return {
            ...state,
            user: loadingState
            };
        case 'GET_USER_SUCCESS':
            return {
            ...state,
            user: success(action.data)
            };
        case 'GET_USER_ERROR':
            return {
            ...state,
            user: error(action.error)
            };
        default:
            throw new Error(`Unhanded action type: ${action.type}`);
    }
}

function UserContext(){

}


export default UserContext;