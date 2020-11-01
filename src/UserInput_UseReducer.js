import React,{useRef,useEffect,useMemo,useCallback,useReducer} from 'react';
import useInputs from './Hooks/UseInput';

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
            return {
                ...state,
                userList: action.userList 
            }
        }
    }
}

const User = React.memo(({userInfo,deleteUser}) => {
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
        <button onClick={()=>deleteUser(userInfo.id)}>삭제</button>
    </div>   
}); 

const UserList = React.memo(({userList,deleteUser}) => {
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
                deleteUser= {deleteUser}/>
            )}
    </div>
});

const CreateUser = React.memo(({onChange,onAdd,inputs}) => {
    
    return <>
    <label>ID </label><input name="id" onChange={onChange} value={inputs.id}></input>
    <label> PW </label><input name="pw" onChange={onChange} value={inputs.pw}></input>
    <button onClick={onAdd}>추가</button>
    </>
    
});

function userRegLengt(userList) {
    console.log("실행");
    return userList.length;
};




function UserInputUseReducer(){

    const [state,dispatcher] = useReducer(reducer,initState);
    // 다수의 state를 정리 하는 방법 
    const cuurentKey = useRef(0);

    //const count = userRegLengt(userList);
    const count = useMemo(() => userRegLengt(state.userList),[state.userList]);
    
    const [onChange] = useInputs(state.inputs,dispatcher);

    // const createUserOnChange = useCallback((e)=>{
    //     const { name, value } = e.target;
    //     dispatcher({
    //         type : 'createUserOnChange',
    //         name,
    //         value
    //     })
     
    // },[state.inputs]);

    const createUserOnAdd = useCallback((e) => {
        const userInfo = {
            id : state.inputs.id,
            key : cuurentKey.current,
            pw : state.inputs.pw
        }
        
        dispatcher({
            type : 'ADD_TO_USER',
            userInfo
        })
       
        cuurentKey.current += 1;

    },[state.userList,state.inputs]);
   
    const deleteUser = useCallback((id)=>{
        dispatcher({
            type : 'DELETE_TO_USER',
            userList : state.userList.filter((user) => user.id !== id)
        })
    });
  
    return <div>
        <CreateUser onChange={onChange} onAdd = {createUserOnAdd}  inputs={state.inputs}/>
        <UserList userList={state.userList} deleteUser= {deleteUser} ></UserList>
        <div><label>활성상태</label>{count}</div>
    
    </div>
}



export default React.memo(UserInputUseReducer);