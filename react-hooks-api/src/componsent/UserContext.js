import axios from 'axios';
import React from 'react'

const API_PATH = process.env.REACT_APP_API_PATH;
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



// State 용 Context 와 Dispatch 용 Context 따로 만들어주기
const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

// 위에서 선언한 두가지 Context 들의 Provider 로 감싸주는 컴포넌트
export function UsersProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, initState);
    return (
      <UsersStateContext.Provider value={state}>
        <UsersDispatchContext.Provider value={dispatch}>
          {children}
        </UsersDispatchContext.Provider>
      </UsersStateContext.Provider>
    );
}

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useUsersState() {
    const state = useContext(UsersStateContext);
    if (!state) {
      throw new Error('Cannot find UsersProvider');
    }
    return state;
  }
  
  // Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useUsersDispatch() {
    const dispatch = useContext(UsersDispatchContext);
    if (!dispatch) {
      throw new Error('Cannot find UsersProvider');
    }
    return dispatch;
}

export async function getUsers(dispatch) {
    dispatch({type:'GET_USERS'});
    try {
        const response = await axios.get(
            `${API_PATH}/users`
    )
        dispatch({type:'GET_USERS_SUCCESS', data:response.data});
    }catch(e){
        dispatch({type:'GET_USERS_ERROR',error:e});
    }
}

export async function getUser(dispatch, id) {
    dispatch({ type: 'GET_USER' });
    try {
        const response = await axios.get(
            `${API_PATH}/users/${id}`
        );
        dispatch({ type: 'GET_USER_SUCCESS', data: response.data });
    } catch (e) {
        dispatch({ type: 'GET_USER_ERROR', error: e });
    }
}
    

 


