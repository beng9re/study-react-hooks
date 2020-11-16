import React,{useRef,useEffect,useMemo,useCallback,useReducer,useContext} from 'react';
import produce from 'immer'
import useInputs from './Hooks/UseInput';


export const UserDispatch = React.createContext(null);


const initState = {
    inputs : {
        id: '',
        pw: '',
    },
    userList : []
}

function reducer(state,action) {
    
    switch (action.type) {
        case 'createUserOnChange' : {   
            return {
                ...state,
                inputs : {
                    ...state.inputs,
                   [action.name] : action.value
                }
            }
        }

        case 'ADD_TO_USER' : {
            return {
                inputs: initState.inputs,
                userList: [...state.userList,action.userInfo],
            }
        }

        case 'DELETE_TO_USER' : {
            // ...state,
            //     userList: action.userList 


            return produce(state,(drft) => {
                    drft.userList = action.userList
            })
                
            
        }
    }
}



const User = React.memo(({userInfo,userList}) => {
    const {dispatch} = useContext(UserDispatch);

    // 컴포넌트가 생기고 난 직후  
    useEffect(()=> {
        console.log(`userInfo.id :: ${userInfo.id} CREATE `);
        return () =>{
               //컴포넌트가 클리어 될때
               console.log(`USER CREAR `,userInfo)
        }
    },[])

    return  <div>
        <label>ID : </label>{userInfo.id}
        <label>PW : </label>{userInfo.pw}
        <button onClick={()=> dispatch({
            type : 'DELETE_TO_USER',
            userList : userList.filter((user) => userInfo.id !== user.id)
        })}
        >삭제</button>
    </div>   
}); 

const UserList = React.memo(({userList}) => {
    // 컴포넌트가 생기고 난 직후  
     // 컴포넌트가  변경될때 
     useEffect(()=> {
        console.log('userList ::' ,userList, 'ALTER');
        return () => {
         
        }
    },[userList])

    useEffect(()=>{
        console.log("리랜더링이 될때마다 실행")
    })
    

    return <div>
        {userList.map(userInfo => 
            <User 
                key={userInfo.key}  
                userInfo={userInfo}
                userList={userList}/>
            )}
    </div>
});

const CreateUser = React.memo(({inputs}) => {
    const {dispatch,cuurentKey} = useContext(UserDispatch);
    
    const [onChange] = useInputs(inputs,dispatch);

    return <>
    <label>ID </label><input name="id" onChange={onChange} value={inputs.id}></input>
    <label> PW </label><input name="pw" onChange={onChange} value={inputs.pw}></input>
    <button onClick={()=>{
        const userInfo = {
            id : inputs.id,
            key : cuurentKey.current,
            pw : inputs.pw
        }
        
        dispatch({
            type : 'ADD_TO_USER',
            userInfo
        })
       
        cuurentKey.current += 1;
    }}>추가</button>
    </>
    
});

function userRegLengt(userList) {
    console.log("실행");
    return userList.length;
};




function UserInputUseReducer(){

    const [state,dispatcher] = useReducer(reducer,initState);
    // 다수의 state를 정리 하는 방법 
    //const count = userRegLengt(userList);
    const count = useMemo(() => userRegLengt(state.userList),[state.userList]);
    const cuurentKey = useRef(0);
  
    return <UserDispatch.Provider value={{dispatch:dispatcher,cuurentKey}}>
    <div>
        <CreateUser inputs={state.inputs}/>
        <UserList userList={state.userList} ></UserList>
        <div><label>활성상태</label>{count}</div>
    
    </div>
    </UserDispatch.Provider>
    
}



export default React.memo(UserInputUseReducer);